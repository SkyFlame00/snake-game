import Snake from '../snake';
import Apple from '../apple';
import { Grid } from '../../engine/grid';
import UIController from '../../ui/lib/controller';
import { Renderer } from '../../engine/renderer';
import ButtonBinding from '../button-binding';
import { onEscPressed } from './bindings/common-bindings';
import { onArrowPressed } from './bindings/game-bindings';

interface Settings {
    cellsNum: number;
    cellWidth: number;
    borderColor: string;
    borderWidth: number;
    boardLength: number;
    snake: {
        headColor: string;
        bodyColor: string;
    };
}

const DEFAULT_SETTINGS = {
    cellsNum: 20,
    cellWidth: 25,
    borderColor: '#000',
    borderWidth: 0,
    snake: {
        headColor: '#004a00',
        bodyColor: '#008000',
    },
};

export class Game {
    public started: boolean = false;
    public ended: boolean = false;
    public paused: boolean = false;
    public inited: boolean = false;
    public snake: Snake;
    public stepInterval: number = 150;
    public grid: Grid;
    public apple: Apple;
    public ui: UIController;
    public renderer: Renderer;
    public gameBindings: ButtonBinding[] = [];
    public settings: Settings;

    constructor() {
        this.applyDefaultSettings();
        this.ui = new UIController();
        this.gameBindings.push(onArrowPressed(this));

        onEscPressed(this).bind();
    }

    prepare() {
        if (this.ended) {
            this.restore();
        }

        this.buildWorld();
        this.inited = true;
    }

    start() {
        this.snake.handleMove();
        this.schedule();
        this.started = true;
    }

    pause() {
        this.paused = true;
    }

    resume() {
        this.paused = false;
        this.schedule();
    }

    schedule() {
        setTimeout(() => {
            if (!this.started || this.paused) {
                return;
            }

            this.snake.handleMove();
            this.schedule();
        }, this.stepInterval);
    }

    spawnApple() {
        const notBusyCells = Object.keys(this.grid.notBusyCells);
        const index = Math.floor(Math.random() * notBusyCells.length);
        const key = notBusyCells[index];
        const cell = this.grid.notBusyCells[key];
        this.apple = new Apple({ x: cell.gridX, y: cell.gridY, color: 'red' });
        cell.setOwner(this.apple)
            .paint(this.apple.color);
    }

    eatApple() {
        this.apple = null;
    }

    end() {
        this.started = false;
        this.ended = true;
        this.inited = false;
        this.disableGameBindings();
        this.ui.openWindow('game_over');
    }

    restore() {
        this.ended = false;
        this.renderer.deleteAll();
        this.renderer.clearAll();
        delete this.grid;
        delete this.snake;
        delete this.apple;
    }
    
    public applySettings(settings) {
        function copyingWalk(dictFrom: Settings, dictTo: Settings) {
            for (const key in dictFrom) {
                if (typeof dictFrom[key] === 'object') {
                    copyingWalk(dictFrom[key], dictTo[key]);
                } else {
                    dictTo[key] = dictFrom[key];
                }
            }
        }

        copyingWalk(settings, this.settings);

        const { cellsNum, cellWidth, borderWidth } = this.settings;
        this.settings.boardLength = this.calcBoardLength(cellsNum, cellWidth, borderWidth);
    }

    public applyDefaultSettings() {
        this.settings = {
            cellsNum: DEFAULT_SETTINGS.cellsNum,
            cellWidth: DEFAULT_SETTINGS.cellWidth,
            borderColor: DEFAULT_SETTINGS.borderColor,
            borderWidth: DEFAULT_SETTINGS.borderWidth,
            boardLength: DEFAULT_SETTINGS.cellsNum * DEFAULT_SETTINGS.cellWidth + (DEFAULT_SETTINGS.cellsNum + 1) * DEFAULT_SETTINGS.borderWidth,
            snake: {
                headColor: DEFAULT_SETTINGS.snake.headColor,
                bodyColor: DEFAULT_SETTINGS.snake.bodyColor,
            },
        };
    }

    private buildWorld() {
        this.buildGrid();
        this.snake = new Snake({
            grid: this.grid,
            x: 4,
            y: 4,
            color: this.settings.snake.bodyColor,
            headColor: this.settings.snake.headColor,
        });

        this.paintWorld();
        this.snake.place();
        this.spawnApple();
    }

    public buildGrid() {
        const { cellsNum, cellWidth, borderColor, borderWidth } = this.settings;

        this.settings.boardLength = this.calcBoardLength(cellsNum, cellWidth, borderWidth);
        this.renderer.canvas.width = this.settings.boardLength;
        this.renderer.canvas.height = this.settings.boardLength;

        const grid = new Grid(this.renderer, cellsNum, cellWidth, borderColor, borderWidth);
        this.grid = grid;
        const entities = [
            ...grid.horizontalLines,
            ...grid.verticalLines,
            ...grid.cells.flat(),
        ];

        for (const entity of entities) {
            this.renderer.add(entity);
        }
    }

    public paintWorld() {
        for (const { entity } of Object.values(this.renderer.objects)) {
            let color = entity.color;

            if (entity.owner) {
                color = entity.owner.color;
            }

            this.renderer.paint(entity, color);
        }
    }

    public enableGameBindings() {
        for (const binding of this.gameBindings) {
            binding.bind();
        }
    }

    public disableGameBindings() {
        for (const binding of this.gameBindings) {
            binding.unbind();
        }
    }

    public calcBoardLength(cellsNum: number, cellWidth: number, borderWidth: number) {
        return cellsNum * cellWidth + (cellsNum + 1) * borderWidth;
    }
}

export const $game = new Game();
