import { Renderer, RendererEntity } from '../renderer';
import Cell from './cell';
import Line from './line';


export default class Grid {
    public renderer: Renderer;
    public horizontalLines: Line[];
    public verticalLines: Line[];
    public cells: Cell[][];
    public notBusyCells: Record<string, Cell> = {};

    constructor(renderer: Renderer, cellsNum: number, cellSize: number, borderColor: string, borderSize: number) {
        const length = borderSize * (cellsNum + 1) + cellsNum * cellSize;
        this.renderer = renderer;
        this.horizontalLines = this.createLines('horizontal', cellsNum + 1, cellSize, borderColor, borderSize, length);
        this.verticalLines = this.createLines('vertical', cellsNum + 1, cellSize, borderColor, borderSize, length);
        this.cells = this.createCells(cellsNum, cellSize, borderSize);
    }

    createLines(direction, num, distance, color, thickness, length) {
        const lines = [];

        switch(direction) {
            case 'horizontal':
                for (let i = 0; i < num; i++) {
                    lines.push(new Line({
                        grid: this,
                        type: 'rect',
                        x: 0,
                        y: thickness * i + distance * i,
                        width: length,
                        height: thickness,
                        color: color,
                    }));
                }
                break;
            case 'vertical':
                for (let i = 0; i < num; i++) {
                    lines.push(new Line({
                        grid: this,
                        type: 'rect',
                        x: thickness * i + distance * i,
                        y: 0,
                        width: thickness,
                        height: length,
                        color: color,
                    }));
                }
                break;
        }

        return lines;
    }

    createCells(cellsNum, cellSize, borderSize) {
        const matrix = [];

        for (let i = 0; i < cellsNum; i++) {
            const column = [];

            for (let j = 0; j < cellsNum; j++) {
                const cell = new Cell({
                    grid: this,
                    type: 'rect',
                    x: borderSize * (i + 1) + cellSize * i,
                    y: borderSize * (j + 1) + cellSize * j,
                    gridX: i,
                    gridY: j,
                    width: cellSize,
                    height: cellSize,
                    color: '#fff',
                });
                column.push(cell);
                this.notBusyCells[`${i}:${j}`] = cell;
            }

            matrix.push(column);
        }

        return matrix;
    }

    isOutside(x, y) {
        return !(
            x >= 0 && x < this.cells[0].length &&
            y >= 0 && y < this.cells.length
        );
    }

    cell(x, y) {
        const row = this.cells[x];
        const cell = row && row[y];
        return cell || null;
    }
}