import { $game } from './game/game';
import { Renderer } from './engine/renderer';

import mainWindow from './ui/windows/main';
import playWindow from './ui/windows/play';
import gameoverWindow from './ui/windows/game-over';
import pauseWindow from './ui/windows/pause';
import settingsWindow from './ui/windows/settings';

function initUI() {
    $game.ui.addWindow(mainWindow);
    $game.ui.addWindow(playWindow);
    $game.ui.addWindow(gameoverWindow);
    $game.ui.addWindow(pauseWindow);
    $game.ui.addWindow(settingsWindow);

    $game.ui.openWindow('main');
}

function main() {
    const cellsNum = 20;
    const cellWidth = 25;
    const borderWidth = 0;
    const boardLength = cellsNum * cellWidth + (cellsNum + 1) * borderWidth;

    const renderer = new Renderer(boardLength, boardLength);
    $game.renderer = renderer;

    initUI();

    const gameContainer = document.createElement('div');
    gameContainer.className = 'GameContainer';
    gameContainer.appendChild(renderer.canvas);
    gameContainer.appendChild($game.ui.element);
    document.body.appendChild(gameContainer);
}

document.addEventListener('DOMContentLoaded', () => {
    main();
});
