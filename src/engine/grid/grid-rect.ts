import GridEntity from './grid-entity';
import Grid from './grid';

interface IGridRect {
    grid: Grid;
    type: string;
    x: number;
    y: number;
    gridX: number;
    gridY: number;
    width: number;
    height: number;
    color: string;
}

export default class GridRect extends GridEntity {
    public type: string;
    public x: number;
    public y: number;
    public gridX: number;
    public gridY: number;
    public width: number;
    public height: number;
    public color: string;
    public defaultColor: string = '#fff';

    constructor({ grid, type, x, y, gridX, gridY, width, height, color }: IGridRect) {
        super(grid);
        this.type = type;
        this.x = x;
        this.y = y;
        this.gridX = gridX;
        this.gridY = gridY;
        this.width = width;
        this.height = height;
        this.color = color || this.defaultColor;
    }

    paint(color) {
        this.grid.renderer.paint(this, color);
        return this;
    }

    clear() {
        this.grid.renderer.clear(this);
        return this;
    }
}