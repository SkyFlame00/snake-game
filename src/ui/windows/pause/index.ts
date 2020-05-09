import Window from '../../lib/window';
import { $game } from '../../../game/game';

const mainWindow = new Window({
    id: 'pause',
    title: 'Pause',
    markup: `
        <button data-id="resume">Resume</button>
        <button data-id="end">End game</button>
    `,
    controls: {
        resume: [{
            eventName: 'click',
            handler: () => {
                $game.ui.currentWindow.close();
                $game.enableGameBindings();
                $game.resume();
            },
        }],
        end: [{
            eventName: 'click',
            handler: () => {
                $game.end();
            },
        }],
    },
});

export default mainWindow;
