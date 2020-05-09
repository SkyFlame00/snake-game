import { $game } from '../../../game/game/';

type ControlsDict = Record<string, {
    eventName: string,
    handler: (controls: Record<string, HTMLElement>, event: Event) => void
}[]>;

interface IWindowUI {
    id: string;
    title?: string;
    markup?: string;
    controls?: ControlsDict;
}

export default class WindowUI {
    public id: string;
    public element: HTMLDivElement;
    public controls: Record<string, HTMLElement>;

    constructor({ id, title, markup, controls }: IWindowUI) {
        this.id = id;
        this.element = this.build(title, markup);
        this.controls = Array
            .from(this.element.querySelectorAll<HTMLElement>('[data-id]'))
            .reduce((dict, control) => ({
                ...dict,
                [control.dataset.id]: control,
            }), {});
        this.bindEvents(controls);
    }

    private build(title: string, markup: string) {
        const element = document.createElement('div');
        element.className = 'Window Window_hidden';

        element.innerHTML = `
            <div class="Window-Title">
                <div class="Window-TitleText">${title}</div>
            </div>
            <div class="Window-Body">${markup}</div>
            <div class="Window-Hint">
                <div class="Window-HintText"></div>
            </div>
        `;

        return element;
    }

    private bindEvents(controls: ControlsDict) {
        for (const id in controls) {
            const element = this.element.querySelector(`[data-id=${id}]`);

            if (element) {
                for (const { eventName, handler } of controls[id]) {
                    element.addEventListener(eventName, handler.bind(this, this.controls));
                }
            }
        }
    }

    public open() {
        $game.ui.channel.dispatch('ui::window:open', { id: this.id });
    }

    public close() {
        $game.ui.channel.dispatch('ui::window:close', { id: this.id });
    }

    public show() {
        this.element.classList.remove('Window_hidden');
    }

    public hide() {
        this.element.classList.add('Window_hidden');
    }
}
