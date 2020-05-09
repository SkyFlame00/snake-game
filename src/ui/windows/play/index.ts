import Window from '../../lib/window';
import { $game } from '../../../game/game';

const playWindow = new Window({
    id: 'play',
    title: 'Play',
    markup: `
        <button data-id="classic">Classic game</button>
        <button data-id="custom">Custom game</button>
        <button data-id="back">Back</button>
    `,
    controls: {
        classic: [{
            eventName: 'click',
            handler: () => {
                // $game.ui.openWindow('classic_game');
                $game.prepare();
                $game.enableGameBindings();
                $game.ui.currentWindow.close();
            },
        }],
        custom: [{
            eventName: 'click',
            handler: () => {
                $game.ui.openWindow('custom_game');
            },
        }],
        back: [{
            eventName: 'click',
            handler: () => {
                $game.ui.back();
            },
        }],
    },
});

export default playWindow;
