interface RendererObject {
    entity: any;
    originX: number;
    originY: number;
    x: number | null;
    y: number | null;
}

export default class Renderer {
    public canvas: HTMLCanvasElement;
    public width: number;
    public height: number;
    public entities: Record<string, any> = {};
    public objects: Record<string, RendererObject> = {};
    
    private context: CanvasRenderingContext2D;
    
    constructor(width, height) {
        this.canvas = this.createCanvas(width, height);
        this.context = this.canvas.getContext('2d');
    }

    private createCanvas(width, height) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        this.width = width;
        this.height = height;
        return canvas;
    }

    public add(entity, originX = 0, originY = 0) {
        this.objects[entity.id] = {
            entity: entity,
            originX: originX,
            originY: originY,
            x: null,
            y: null,
        };
    }

    public paint(entity, color = entity.defaultColor) {
        const object = this.objects[entity.id];

        switch(entity.type) {
            case 'rect':
                object.x = object.originX + entity.x;
                object.y = object.originY + entity.y;

                this.context.fillStyle = color;
                this.context.fillRect(object.x, object.y, entity.width, entity.height);

                break;
        }
    }

    public clear(entity) {
        const object = this.objects[entity.id];

        this.context.clearRect(object.x, object.y, entity.width, entity.height);

        object.x = null;
        object.y = null;
    }

    public delete(entity) {
        delete this.entities[entity.id];
    }

    public clearAll() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
    
    public deleteAll() {
        this.entities = {};
    }
}