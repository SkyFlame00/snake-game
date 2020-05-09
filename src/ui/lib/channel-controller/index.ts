type EventHandler = (arg: any) => void;

export default class ChannelController {
    private listeners: Record<string, EventHandler[]> = {};

    public subscribe(eventName: string, func: EventHandler) {
        const listeners = this.listeners;
        
        if (listeners[eventName]) {
            listeners[eventName].push(func);
        } else {
            listeners[eventName] = [func];
        }
    }

    public dispatch(eventName: string, eventData: any) {
        const listeners = this.listeners;

        if (listeners[eventName]) {
            for (const func of listeners[eventName]) {
                func(eventData);
            }
        }
    }
}
