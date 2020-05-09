import { RendererEntity } from '../renderer';
import Grid from './grid';

export default class GridEntity extends RendererEntity {
    public grid: Grid;

    constructor(grid) {
        super();
        this.grid = grid;
    }
}
