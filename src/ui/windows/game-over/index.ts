import Window from '../../lib/window';
import { $game } from '../../../game/game';

const mainWindow = new Window({
    id: 'game_over',
    title: 'Game over',
    markup: `
        <button data-id="quit">Main menu</button>
    `,
    controls: {
        quit: [{
            eventName: 'click',
            handler: () => {
                $game.ui.openWindow('main');
            },
        }],
    },
});

export default mainWindow;
