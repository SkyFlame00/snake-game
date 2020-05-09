import { Game } from '../index';
import ButtonBinding from '../../button-binding';

export function onEscPressed($game: Game) {
    return new ButtonBinding(window, 'keydown', function(event: KeyboardEvent) {
        if (event.code !== 'Escape' || !$game.inited) {
            return;
        }
    
        if ($game.paused) {
            $game.enableGameBindings();
            $game.ui.currentWindow.close();
            $game.resume();
        } else {
            $game.disableGameBindings();
            $game.ui.openWindow('pause');
            $game.pause();
        }
    });
}
