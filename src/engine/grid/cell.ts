import GridRect from './grid-rect';

export default class Cell extends GridRect {
    public owner: any;

    constructor(options) {
        super(options);
    }

    setOwner(entity) {
        this.owner = entity;
        delete this.grid.notBusyCells[`${this.gridX}:${this.gridY}`];
        return this;
    }

    removeOwner() {
        this.owner = null;
        this.grid.notBusyCells[`${this.gridX}:${this.gridY}`] = this;
        return this;
    }
}