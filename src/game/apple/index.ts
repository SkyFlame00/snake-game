interface IApple {
    x: number;
    y: number;
    color: string;
}

export default class Apple {
    public kind: string = 'apple';
    public coordinates: [number, number];
    public color: string;

    constructor({ x, y, color }: IApple) {
        this.coordinates = [x, y];
        this.color = color;
    }
}
