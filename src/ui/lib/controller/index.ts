import WindowUI from '../window';
import ChannelController from '../channel-controller';

interface WindowData {
    id: string;
}

export default class UIController {
    public element: HTMLDivElement;
    public channel: ChannelController;
    
    private windows: Record<string, WindowUI> = {};
    private windowsStack: WindowUI[] = [];
    
    constructor() {
        this.element = this.build();
        this.channel = new ChannelController();
        this.bindEvents();
    }

    private build() {
        const element = document.createElement('div');
        
        element.className = 'Windows';

        return element;
    }

    public addWindow(window: WindowUI) {
        this.windows[window.id] = window;
        this.element.appendChild(window.element);
    }

    private bindEvents() {
        this.channel.subscribe('ui::window:open', this.onWindowOpen.bind(this));
        this.channel.subscribe('ui::window:close', this.onWindowClose.bind(this));
    }

    private onWindowOpen(data: WindowData) {
        const nextWindow = this.windows[data.id];
        nextWindow.show();
        if (this.currentWindow) {
            this.currentWindow.hide();
        }
        this.windowsStack.push(nextWindow);
    }

    private onWindowClose(data: WindowData) {
        this.windows[data.id].hide();
        this.clearWindowsHistory();
    }

    public showUI() {
        this.element.classList.remove('Windows_hidden');
    }

    public hideUI() {
        this.element.classList.add('Windows_hidden');
    }

    get currentWindow(): WindowUI | undefined {
        return this.windowsStack[this.windowsStack.length - 1];
    }

    public back() {
        if (this.windowsStack.length < 2) {
            throw new Error('Less than 2 windows in the stack!');
        }

        this.currentWindow.hide();
        this.windowsStack.pop();
        this.currentWindow.show();
    }

    public openWindow(id: string) {
        if (this.windows[id]) {
            this.windows[id].open();
        }
    }

    public clearWindowsHistory() {
        this.windowsStack = [];
    }
}
