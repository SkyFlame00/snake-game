import { Game } from '../index';
import ButtonBinding from '../../button-binding';

export function onArrowPressed($game: Game) {
    return new ButtonBinding(window, 'keydown', function(event: KeyboardEvent) {
        let direction: string;

        switch(event.code) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }

        if (!direction) {
            return;
        }

        if ($game.snake.canSetNextDirection(direction)) {
            $game.snake.setNextDirection(direction);
        }
        
        if (!$game.started) {
            $game.start();
        }
    });
}
