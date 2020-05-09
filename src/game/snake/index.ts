import { $game } from '../game';
import { Grid } from '../../engine/grid';

interface ISnake {
    grid: Grid;
    x: number;
    y: number;
    color: string;
    headColor: string;
    length?: number;
}

interface GameRectEntity {
    kind: string;
    coordinates: [number, number];
    color: string;
}

export default class Snake {
    public grid: Grid;
    public body: GameRectEntity[];
    public direction: string = 'right';
    public bodyColor: string;
    public nextDirection?: string;

    constructor({ grid, x, y, color, headColor, length = 3 }: ISnake) {
        this.grid = grid;
        this.body = this.createBody(x, y, color, headColor, length);
        this.bodyColor = color;
    }

    createBody(x: number, y: number, color: string, headColor: string, length: number) {
        const body = [{
            kind: 'snake_head',
            coordinates: [x, y],
            color: headColor,
        }] as GameRectEntity[];

        for (let i = 1; i < length; i++) {
            body.push({
                kind: 'snake_body',
                coordinates: [x - i, y],
                color: color,
            });
        }

        return body;
    }

    place() {
        for (const part of this.body) {
            this.grid.cell(part.coordinates[0], part.coordinates[1])
                .setOwner(part)
                .paint(part.color);
        }
    }

    canMove(direction) {
        const [head, prev] = this.body;
        const { dx, dy } = this.getStep(direction);

        return head.coordinates[0] + dx === prev.coordinates[0] &&
            head.coordinates[1] + dy === prev.coordinates[1];
    }

    setDirection(direction) {
        this.direction = direction;
    }

    setNextDirection(direction) {
        this.nextDirection = direction;
    }

    getStep(direction) {
        let dx, dy;

        switch(direction) {
            case 'left':
                dx = -1;
                dy = 0;
                break;
            case 'right':
                dx = 1;
                dy = 0;
                break;
            case 'up':
                dx = 0;
                dy = -1;
                break;
            case 'down':
                dx = 0;
                dy = 1;
                break;
        }

        return { dx, dy };
    }

    handleMove() {
        if (this.nextDirection) {
            this.setDirection(this.nextDirection);
        }

        const { dx, dy } = this.getStep(this.direction);
        const head = this.body[0];
        const [x, y] = head.coordinates;
        const nextCell = this.grid.cell(x + dx, y + dy);
        const entityKind = nextCell && nextCell.owner && nextCell.owner.kind;

        if (
            this.grid.isOutside(x + dx, y + dy) ||
            ['obstacle', 'snake_body'].indexOf(entityKind) > -1
        ) {
            return this.kill();   
        }

        const [trailX, trailY] = this.move(nextCell, x + dx, y + dy);
        
        if (entityKind === 'apple') {
            this.grow(trailX, trailY);
            $game.eatApple();
            $game.spawnApple();
        }
    }

    move(to, x, y) {
        const grid = this.grid;
        let nextCell = to;
        let nextX = x;
        let nextY = y;

        for (const part of this.body) {
            const [prevX, prevY] = part.coordinates;
            grid.cell(prevX, prevY)
                .removeOwner()
                .clear();
            part.coordinates = [nextX, nextY];
            nextCell
                .setOwner(part)
                .paint(part.color);
            nextCell = grid.cell(prevX, prevY);
            nextX = prevX;
            nextY = prevY;
        }

        return [nextX, nextY];
    }

    kill() {
        $game.end();
    }

    axis(direction) {
        const axisX = ['left', 'right'];
        const axisY = ['up', 'down'];

        if ([...axisX, ...axisY].indexOf(direction) === -1) {
            return null;
        }

        return axisX.indexOf(direction) > -1 ? 'hor' : 'ver';
    }

    canSetNextDirection(direction) {
        const prevDir = this.axis(this.direction);
        const nextDir = this.axis(direction);

        if (
            prevDir === 'hor' && nextDir === 'hor' ||
            prevDir === 'ver' && nextDir === 'ver'
        ) {
            return false;
        }

        return true;
    }

    grow(x: number, y: number) {
        const part = {
            kind: 'snake_body',
            coordinates: [x, y],
            color: this.bodyColor,
        } as GameRectEntity;
        this.body.push(part);
        this.grid.cell(x, y)
            .setOwner(part)
            .paint(part.color);
    }
}