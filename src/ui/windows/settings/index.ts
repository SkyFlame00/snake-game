import Window from '../../lib/window';
import { $game } from '../../../game/game';

const playWindow = new Window({
    id: 'settings',
    title: 'Settings',
    markup: `
        <div class="Settings-Item">
            <label for="window::settings:tiles_number">Tiles number (in a row or column, so there'll be NxN grid)</label>
            <input data-id="tiles_number" id="window::settings:tiles_number" type="number" min="3" max="30" value="${$game.settings.cellsNum}" />
        </div>

        <div class="Settings-Item">
            <label for="window::settings:tile_size">Tile size</label>
            <input data-id="tile_size" id="window::settings:tile_size" type="number" min="5" max="50" value="${$game.settings.cellWidth}" />
        </div>

        <div class="Settings-Item">
            <label for="window::settings:border_color">Border color</label>
            <input data-id="border_color" id="window::settings:border_color" type="color" value="${$game.settings.borderColor}" />
        </div>
        
        <div class="Settings-Item">
            <label for="window::settings:border_width">Border width</label>
            <input data-id="border_width" id="window::settings:border_width" type="number" min="0" max="20" value="${$game.settings.borderWidth}" />
        </div>

        <div class="Settings-Item">
            <label for="window::settings:snake_head_color">Snake's head color</label>
            <input data-id="snake_head_color" id="window::settings:snake_head_color" type="color" value="${$game.settings.snake.headColor}" />
        </div>

        <div class="Settings-Item">
            <label for="window::settings:snake_body_color">Snake's body color</label>
            <input data-id="snake_body_color" id="window::settings:snake_body_color" type="color" value="${$game.settings.snake.bodyColor}" />
        </div>

        <div class="Settings-Actions">
            <button data-id="defaults">Apply default settings</button>
            <button data-id="cancel">Cancel</button>
            <button data-id="apply">Apply</button>
        </div>
    `,
    controls: {
        defaults: [{
            eventName: 'click',
            handler: (controls: Record<string, HTMLElement>) => {
                $game.applyDefaultSettings();
                $game.renderer.clearAll();
                $game.renderer.deleteAll();
                $game.buildGrid();
                $game.paintWorld();

                (controls['tiles_number'] as HTMLInputElement).value = String($game.settings.cellsNum);
                (controls['tile_size'] as HTMLInputElement).value = String($game.settings.cellWidth);
                (controls['border_color'] as HTMLInputElement).value = String($game.settings.borderColor);
                (controls['border_width'] as HTMLInputElement).value = String($game.settings.borderWidth);
                (controls['snake_head_color'] as HTMLInputElement).value = $game.settings.snake.headColor;
                (controls['snake_body_color'] as HTMLInputElement).value = $game.settings.snake.bodyColor;
            },
        }],
        apply: [{
            eventName: 'click',
            handler: (controls: Record<string, HTMLElement>) => {
                const tilesNum = Number((controls['tiles_number'] as HTMLInputElement).value);
                const tileSize = Number((controls['tile_size'] as HTMLInputElement).value);
                const borderColor = (controls['border_color'] as HTMLInputElement).value;
                const borderWidth = Number((controls['border_width'] as HTMLInputElement).value);
                const snakeHeadColor = (controls['snake_head_color'] as HTMLInputElement).value;
                const snakeBodyColor = (controls['snake_body_color'] as HTMLInputElement).value;

                $game.applySettings({
                    cellsNum: tilesNum,
                    cellWidth: tileSize,
                    borderColor: borderColor,
                    borderWidth: borderWidth,
                    snake: {
                        headColor: snakeHeadColor,
                        bodyColor: snakeBodyColor,
                    },
                });
                $game.renderer.clearAll();
                $game.renderer.deleteAll();
                $game.buildGrid();
                $game.paintWorld();
            },
        }],
        cancel: [{
            eventName: 'click',
            handler: () => {
                $game.ui.back();
            },
        }],
    },
});

export default playWindow;
