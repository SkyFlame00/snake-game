export default class Entity {
    public id: string;

    private listeners: Record<string, Function> = {};

    constructor() {
        this.id = this.__generateId();
    }

    __generateId(): string {
        return Math.floor(Math.random() * 10000000000).toString(16);
    }
}