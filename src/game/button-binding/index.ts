export default class ButtonBinding {
    private element: GlobalEventHandlers;
    private eventName: string;
    private func: (event: Event) => void;

    constructor(element: GlobalEventHandlers, eventName, func: (event: Event) => void) {
        this.element = element;
        this.eventName = eventName;
        this.func = func;
    }

    public bind() {
        this.element.addEventListener(this.eventName, this.func);
    }

    public unbind() {
        this.element.removeEventListener(this.eventName, this.func);
    }
}
