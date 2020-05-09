import Window from '../../lib/window';
import { $game } from '../../../game/game';

const mainWindow = new Window({
    id: 'main',
    title: 'The Snake game',
    markup: `
        <button data-id="play">Play</button>
        <button data-id="scores">Scores</button>
        <button data-id="settings">Settings</button>
        <button data-id="about">About</button>
    `,
    controls: {
        play: [{
            eventName: 'click',
            handler: () => {
                $game.ui.openWindow('play');
            },
        }],
        scores: [{
            eventName: 'click',
            handler: () => {
                $game.ui.openWindow('scores');
            },
        }],
        settings: [{
            eventName: 'click',
            handler: () => {
                $game.ui.openWindow('settings');
            },
        }],
        about: [{
            eventName: 'click',
            handler: () => {
                $game.ui.openWindow('about');
            },
        }],
    },
});

export default mainWindow;
