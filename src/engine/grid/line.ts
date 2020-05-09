import GridRect from './grid-rect';

export default class Line extends GridRect {
    public owner: any;

    constructor(options) {
        super(options);
    }
}