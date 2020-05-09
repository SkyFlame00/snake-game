/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/engine/grid/cell.ts":
/*!*********************************!*\
  !*** ./src/engine/grid/cell.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cell; });
/* harmony import */ var _grid_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-rect */ "./src/engine/grid/grid-rect.ts");

class Cell extends _grid_rect__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
    }
    setOwner(entity) {
        this.owner = entity;
        delete this.grid.notBusyCells[`${this.gridX}:${this.gridY}`];
        return this;
    }
    removeOwner() {
        this.owner = null;
        this.grid.notBusyCells[`${this.gridX}:${this.gridY}`] = this;
        return this;
    }
}


/***/ }),

/***/ "./src/engine/grid/grid-entity.ts":
/*!****************************************!*\
  !*** ./src/engine/grid/grid-entity.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridEntity; });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer */ "./src/engine/renderer/index.ts");

class GridEntity extends _renderer__WEBPACK_IMPORTED_MODULE_0__["RendererEntity"] {
    constructor(grid) {
        super();
        this.grid = grid;
    }
}


/***/ }),

/***/ "./src/engine/grid/grid-rect.ts":
/*!**************************************!*\
  !*** ./src/engine/grid/grid-rect.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridRect; });
/* harmony import */ var _grid_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-entity */ "./src/engine/grid/grid-entity.ts");

class GridRect extends _grid_entity__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor({ grid, type, x, y, gridX, gridY, width, height, color }) {
        super(grid);
        this.defaultColor = '#fff';
        this.type = type;
        this.x = x;
        this.y = y;
        this.gridX = gridX;
        this.gridY = gridY;
        this.width = width;
        this.height = height;
        this.color = color || this.defaultColor;
    }
    paint(color) {
        this.grid.renderer.paint(this, color);
        return this;
    }
    clear() {
        this.grid.renderer.clear(this);
        return this;
    }
}


/***/ }),

/***/ "./src/engine/grid/grid.ts":
/*!*********************************!*\
  !*** ./src/engine/grid/grid.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/engine/grid/cell.ts");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ "./src/engine/grid/line.ts");


class Grid {
    constructor(renderer, cellsNum, cellSize, borderColor, borderSize) {
        this.notBusyCells = {};
        const length = borderSize * (cellsNum + 1) + cellsNum * cellSize;
        this.renderer = renderer;
        this.horizontalLines = this.createLines('horizontal', cellsNum + 1, cellSize, borderColor, borderSize, length);
        this.verticalLines = this.createLines('vertical', cellsNum + 1, cellSize, borderColor, borderSize, length);
        this.cells = this.createCells(cellsNum, cellSize, borderSize);
    }
    createLines(direction, num, distance, color, thickness, length) {
        const lines = [];
        switch (direction) {
            case 'horizontal':
                for (let i = 0; i < num; i++) {
                    lines.push(new _line__WEBPACK_IMPORTED_MODULE_1__["default"]({
                        grid: this,
                        type: 'rect',
                        x: 0,
                        y: thickness * i + distance * i,
                        width: length,
                        height: thickness,
                        color: color,
                    }));
                }
                break;
            case 'vertical':
                for (let i = 0; i < num; i++) {
                    lines.push(new _line__WEBPACK_IMPORTED_MODULE_1__["default"]({
                        grid: this,
                        type: 'rect',
                        x: thickness * i + distance * i,
                        y: 0,
                        width: thickness,
                        height: length,
                        color: color,
                    }));
                }
                break;
        }
        return lines;
    }
    createCells(cellsNum, cellSize, borderSize) {
        const matrix = [];
        for (let i = 0; i < cellsNum; i++) {
            const column = [];
            for (let j = 0; j < cellsNum; j++) {
                const cell = new _cell__WEBPACK_IMPORTED_MODULE_0__["default"]({
                    grid: this,
                    type: 'rect',
                    x: borderSize * (i + 1) + cellSize * i,
                    y: borderSize * (j + 1) + cellSize * j,
                    gridX: i,
                    gridY: j,
                    width: cellSize,
                    height: cellSize,
                    color: '#fff',
                });
                column.push(cell);
                this.notBusyCells[`${i}:${j}`] = cell;
            }
            matrix.push(column);
        }
        return matrix;
    }
    isOutside(x, y) {
        return !(x >= 0 && x < this.cells[0].length &&
            y >= 0 && y < this.cells.length);
    }
    cell(x, y) {
        const row = this.cells[x];
        const cell = row && row[y];
        return cell || null;
    }
}


/***/ }),

/***/ "./src/engine/grid/index.ts":
/*!**********************************!*\
  !*** ./src/engine/grid/index.ts ***!
  \**********************************/
/*! exports provided: Grid, Cell, GridEntity, GridRect, Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/engine/grid/grid.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _grid__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ "./src/engine/grid/cell.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return _cell__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _grid_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-entity */ "./src/engine/grid/grid-entity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridEntity", function() { return _grid_entity__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _grid_rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-rect */ "./src/engine/grid/grid-rect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridRect", function() { return _grid_rect__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line */ "./src/engine/grid/line.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _line__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./src/engine/grid/line.ts":
/*!*********************************!*\
  !*** ./src/engine/grid/line.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Line; });
/* harmony import */ var _grid_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-rect */ "./src/engine/grid/grid-rect.ts");

class Line extends _grid_rect__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
    }
}


/***/ }),

/***/ "./src/engine/renderer/index.ts":
/*!**************************************!*\
  !*** ./src/engine/renderer/index.ts ***!
  \**************************************/
/*! exports provided: Renderer, RendererEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ "./src/engine/renderer/renderer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _renderer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _renderer_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer-entity */ "./src/engine/renderer/renderer-entity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RendererEntity", function() { return _renderer_entity__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/engine/renderer/renderer-entity.ts":
/*!************************************************!*\
  !*** ./src/engine/renderer/renderer-entity.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entity; });
class Entity {
    constructor() {
        this.listeners = {};
        this.id = this.__generateId();
    }
    __generateId() {
        return Math.floor(Math.random() * 10000000000).toString(16);
    }
}


/***/ }),

/***/ "./src/engine/renderer/renderer.ts":
/*!*****************************************!*\
  !*** ./src/engine/renderer/renderer.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
class Renderer {
    constructor(width, height) {
        this.entities = {};
        this.objects = {};
        this.canvas = this.createCanvas(width, height);
        this.context = this.canvas.getContext('2d');
    }
    createCanvas(width, height) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        this.width = width;
        this.height = height;
        return canvas;
    }
    add(entity, originX = 0, originY = 0) {
        this.objects[entity.id] = {
            entity: entity,
            originX: originX,
            originY: originY,
            x: null,
            y: null,
        };
    }
    paint(entity, color = entity.defaultColor) {
        const object = this.objects[entity.id];
        switch (entity.type) {
            case 'rect':
                object.x = object.originX + entity.x;
                object.y = object.originY + entity.y;
                this.context.fillStyle = color;
                this.context.fillRect(object.x, object.y, entity.width, entity.height);
                break;
        }
    }
    clear(entity) {
        const object = this.objects[entity.id];
        this.context.clearRect(object.x, object.y, entity.width, entity.height);
        object.x = null;
        object.y = null;
    }
    delete(entity) {
        delete this.entities[entity.id];
    }
    clearAll() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
    deleteAll() {
        this.entities = {};
    }
}


/***/ }),

/***/ "./src/game/apple/index.ts":
/*!*********************************!*\
  !*** ./src/game/apple/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Apple; });
class Apple {
    constructor({ x, y, color }) {
        this.kind = 'apple';
        this.coordinates = [x, y];
        this.color = color;
    }
}


/***/ }),

/***/ "./src/game/button-binding/index.ts":
/*!******************************************!*\
  !*** ./src/game/button-binding/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonBinding; });
class ButtonBinding {
    constructor(element, eventName, func) {
        this.element = element;
        this.eventName = eventName;
        this.func = func;
    }
    bind() {
        this.element.addEventListener(this.eventName, this.func);
    }
    unbind() {
        this.element.removeEventListener(this.eventName, this.func);
    }
}


/***/ }),

/***/ "./src/game/game/bindings/common-bindings.ts":
/*!***************************************************!*\
  !*** ./src/game/game/bindings/common-bindings.ts ***!
  \***************************************************/
/*! exports provided: onEscPressed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onEscPressed", function() { return onEscPressed; });
/* harmony import */ var _button_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../button-binding */ "./src/game/button-binding/index.ts");

function onEscPressed($game) {
    return new _button_binding__WEBPACK_IMPORTED_MODULE_0__["default"](window, 'keydown', function (event) {
        if (event.code !== 'Escape' || !$game.inited) {
            return;
        }
        if ($game.paused) {
            $game.enableGameBindings();
            $game.ui.currentWindow.close();
            $game.resume();
        }
        else {
            $game.disableGameBindings();
            $game.ui.openWindow('pause');
            $game.pause();
        }
    });
}


/***/ }),

/***/ "./src/game/game/bindings/game-bindings.ts":
/*!*************************************************!*\
  !*** ./src/game/game/bindings/game-bindings.ts ***!
  \*************************************************/
/*! exports provided: onArrowPressed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onArrowPressed", function() { return onArrowPressed; });
/* harmony import */ var _button_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../button-binding */ "./src/game/button-binding/index.ts");

function onArrowPressed($game) {
    return new _button_binding__WEBPACK_IMPORTED_MODULE_0__["default"](window, 'keydown', function (event) {
        let direction;
        switch (event.code) {
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


/***/ }),

/***/ "./src/game/game/index.ts":
/*!********************************!*\
  !*** ./src/game/game/index.ts ***!
  \********************************/
/*! exports provided: Game, $game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$game", function() { return $game; });
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snake */ "./src/game/snake/index.ts");
/* harmony import */ var _apple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apple */ "./src/game/apple/index.ts");
/* harmony import */ var _engine_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../engine/grid */ "./src/engine/grid/index.ts");
/* harmony import */ var _ui_lib_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/lib/controller */ "./src/ui/lib/controller/index.ts");
/* harmony import */ var _bindings_common_bindings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bindings/common-bindings */ "./src/game/game/bindings/common-bindings.ts");
/* harmony import */ var _bindings_game_bindings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bindings/game-bindings */ "./src/game/game/bindings/game-bindings.ts");






const DEFAULT_SETTINGS = {
    cellsNum: 20,
    cellWidth: 25,
    borderColor: '#000',
    borderWidth: 0,
    snake: {
        headColor: '#004a00',
        bodyColor: '#008000',
    },
};
class Game {
    constructor() {
        this.started = false;
        this.ended = false;
        this.paused = false;
        this.inited = false;
        this.stepInterval = 150;
        this.gameBindings = [];
        this.applyDefaultSettings();
        this.ui = new _ui_lib_controller__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.gameBindings.push(Object(_bindings_game_bindings__WEBPACK_IMPORTED_MODULE_5__["onArrowPressed"])(this));
        Object(_bindings_common_bindings__WEBPACK_IMPORTED_MODULE_4__["onEscPressed"])(this).bind();
    }
    prepare() {
        if (this.ended) {
            this.restore();
        }
        this.buildWorld();
        this.inited = true;
    }
    start() {
        this.snake.handleMove();
        this.schedule();
        this.started = true;
    }
    pause() {
        this.paused = true;
    }
    resume() {
        this.paused = false;
        this.schedule();
    }
    schedule() {
        setTimeout(() => {
            if (!this.started || this.paused) {
                return;
            }
            this.snake.handleMove();
            this.schedule();
        }, this.stepInterval);
    }
    spawnApple() {
        const notBusyCells = Object.keys(this.grid.notBusyCells);
        const index = Math.floor(Math.random() * notBusyCells.length);
        const key = notBusyCells[index];
        const cell = this.grid.notBusyCells[key];
        this.apple = new _apple__WEBPACK_IMPORTED_MODULE_1__["default"]({ x: cell.gridX, y: cell.gridY, color: 'red' });
        cell.setOwner(this.apple)
            .paint(this.apple.color);
    }
    eatApple() {
        this.apple = null;
    }
    end() {
        this.started = false;
        this.ended = true;
        this.inited = false;
        this.disableGameBindings();
        this.ui.openWindow('game_over');
    }
    restore() {
        this.ended = false;
        this.renderer.deleteAll();
        this.renderer.clearAll();
        delete this.grid;
        delete this.snake;
        delete this.apple;
    }
    applySettings(settings) {
        function copyingWalk(dictFrom, dictTo) {
            for (const key in dictFrom) {
                if (typeof dictFrom[key] === 'object') {
                    copyingWalk(dictFrom[key], dictTo[key]);
                }
                else {
                    dictTo[key] = dictFrom[key];
                }
            }
        }
        copyingWalk(settings, this.settings);
        const { cellsNum, cellWidth, borderWidth } = this.settings;
        this.settings.boardLength = this.calcBoardLength(cellsNum, cellWidth, borderWidth);
    }
    applyDefaultSettings() {
        this.settings = {
            cellsNum: DEFAULT_SETTINGS.cellsNum,
            cellWidth: DEFAULT_SETTINGS.cellWidth,
            borderColor: DEFAULT_SETTINGS.borderColor,
            borderWidth: DEFAULT_SETTINGS.borderWidth,
            boardLength: DEFAULT_SETTINGS.cellsNum * DEFAULT_SETTINGS.cellWidth + (DEFAULT_SETTINGS.cellsNum + 1) * DEFAULT_SETTINGS.borderWidth,
            snake: {
                headColor: DEFAULT_SETTINGS.snake.headColor,
                bodyColor: DEFAULT_SETTINGS.snake.bodyColor,
            },
        };
    }
    buildWorld() {
        this.buildGrid();
        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_0__["default"]({
            grid: this.grid,
            x: 4,
            y: 4,
            color: this.settings.snake.bodyColor,
            headColor: this.settings.snake.headColor,
        });
        this.paintWorld();
        this.snake.place();
        this.spawnApple();
    }
    buildGrid() {
        const { cellsNum, cellWidth, borderColor, borderWidth } = this.settings;
        this.settings.boardLength = this.calcBoardLength(cellsNum, cellWidth, borderWidth);
        this.renderer.canvas.width = this.settings.boardLength;
        this.renderer.canvas.height = this.settings.boardLength;
        const grid = new _engine_grid__WEBPACK_IMPORTED_MODULE_2__["Grid"](this.renderer, cellsNum, cellWidth, borderColor, borderWidth);
        this.grid = grid;
        const entities = [
            ...grid.horizontalLines,
            ...grid.verticalLines,
            ...grid.cells.flat(),
        ];
        for (const entity of entities) {
            this.renderer.add(entity);
        }
    }
    paintWorld() {
        for (const { entity } of Object.values(this.renderer.objects)) {
            let color = entity.color;
            if (entity.owner) {
                color = entity.owner.color;
            }
            this.renderer.paint(entity, color);
        }
    }
    enableGameBindings() {
        for (const binding of this.gameBindings) {
            binding.bind();
        }
    }
    disableGameBindings() {
        for (const binding of this.gameBindings) {
            binding.unbind();
        }
    }
    calcBoardLength(cellsNum, cellWidth, borderWidth) {
        return cellsNum * cellWidth + (cellsNum + 1) * borderWidth;
    }
}
const $game = new Game();


/***/ }),

/***/ "./src/game/snake/index.ts":
/*!*********************************!*\
  !*** ./src/game/snake/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Snake; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game/game/index.ts");

class Snake {
    constructor({ grid, x, y, color, headColor, length = 3 }) {
        this.direction = 'right';
        this.grid = grid;
        this.body = this.createBody(x, y, color, headColor, length);
        this.bodyColor = color;
    }
    createBody(x, y, color, headColor, length) {
        const body = [{
                kind: 'snake_head',
                coordinates: [x, y],
                color: headColor,
            }];
        for (let i = 1; i < length; i++) {
            body.push({
                kind: 'snake_body',
                coordinates: [x - i, y],
                color: color,
            });
        }
        return body;
    }
    place() {
        for (const part of this.body) {
            this.grid.cell(part.coordinates[0], part.coordinates[1])
                .setOwner(part)
                .paint(part.color);
        }
    }
    canMove(direction) {
        const [head, prev] = this.body;
        const { dx, dy } = this.getStep(direction);
        return head.coordinates[0] + dx === prev.coordinates[0] &&
            head.coordinates[1] + dy === prev.coordinates[1];
    }
    setDirection(direction) {
        this.direction = direction;
    }
    setNextDirection(direction) {
        this.nextDirection = direction;
    }
    getStep(direction) {
        let dx, dy;
        switch (direction) {
            case 'left':
                dx = -1;
                dy = 0;
                break;
            case 'right':
                dx = 1;
                dy = 0;
                break;
            case 'up':
                dx = 0;
                dy = -1;
                break;
            case 'down':
                dx = 0;
                dy = 1;
                break;
        }
        return { dx, dy };
    }
    handleMove() {
        if (this.nextDirection) {
            this.setDirection(this.nextDirection);
        }
        const { dx, dy } = this.getStep(this.direction);
        const head = this.body[0];
        const [x, y] = head.coordinates;
        const nextCell = this.grid.cell(x + dx, y + dy);
        const entityKind = nextCell && nextCell.owner && nextCell.owner.kind;
        if (this.grid.isOutside(x + dx, y + dy) ||
            ['obstacle', 'snake_body'].indexOf(entityKind) > -1) {
            return this.kill();
        }
        const [trailX, trailY] = this.move(nextCell, x + dx, y + dy);
        if (entityKind === 'apple') {
            this.grow(trailX, trailY);
            _game__WEBPACK_IMPORTED_MODULE_0__["$game"].eatApple();
            _game__WEBPACK_IMPORTED_MODULE_0__["$game"].spawnApple();
        }
    }
    move(to, x, y) {
        const grid = this.grid;
        let nextCell = to;
        let nextX = x;
        let nextY = y;
        for (const part of this.body) {
            const [prevX, prevY] = part.coordinates;
            grid.cell(prevX, prevY)
                .removeOwner()
                .clear();
            part.coordinates = [nextX, nextY];
            nextCell
                .setOwner(part)
                .paint(part.color);
            nextCell = grid.cell(prevX, prevY);
            nextX = prevX;
            nextY = prevY;
        }
        return [nextX, nextY];
    }
    kill() {
        _game__WEBPACK_IMPORTED_MODULE_0__["$game"].end();
    }
    axis(direction) {
        const axisX = ['left', 'right'];
        const axisY = ['up', 'down'];
        if ([...axisX, ...axisY].indexOf(direction) === -1) {
            return null;
        }
        return axisX.indexOf(direction) > -1 ? 'hor' : 'ver';
    }
    canSetNextDirection(direction) {
        const prevDir = this.axis(this.direction);
        const nextDir = this.axis(direction);
        if (prevDir === 'hor' && nextDir === 'hor' ||
            prevDir === 'ver' && nextDir === 'ver') {
            return false;
        }
        return true;
    }
    grow(x, y) {
        const part = {
            kind: 'snake_body',
            coordinates: [x, y],
            color: this.bodyColor,
        };
        this.body.push(part);
        this.grid.cell(x, y)
            .setOwner(part)
            .paint(part.color);
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game */ "./src/game/game/index.ts");
/* harmony import */ var _engine_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/renderer */ "./src/engine/renderer/index.ts");
/* harmony import */ var _ui_windows_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/windows/main */ "./src/ui/windows/main/index.ts");
/* harmony import */ var _ui_windows_play__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/windows/play */ "./src/ui/windows/play/index.ts");
/* harmony import */ var _ui_windows_game_over__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/windows/game-over */ "./src/ui/windows/game-over/index.ts");
/* harmony import */ var _ui_windows_pause__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/windows/pause */ "./src/ui/windows/pause/index.ts");
/* harmony import */ var _ui_windows_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/windows/settings */ "./src/ui/windows/settings/index.ts");







function initUI() {
    _game_game__WEBPACK_IMPORTED_MODULE_0__["$game"].ui.addWindow(_ui_windows_main__WEBPACK_IMPORTED_MODULE_2__["default"]);
    _game_game__WEBPACK_IMPORTED_MODULE_0__["$game"].ui.addWindow(_ui_windows_play__WEBPACK_IMPORTED_MODULE_3__["default"]);
    _game_game__WEBPACK_IMPORTED_MODULE_0__["$game"].ui.addWindow(_ui_windows_game_over__WEBPACK_IMPORTED_MODULE_4__["default"]);
    _game_game__WEBPACK_IMPORTED_MODULE_0__["$game"].ui.addWindow(_ui_windows_pause__WEBPACK_IMPORTED_MODULE_5__["default"]);
    _game_game__WEBPACK_IMPORTED_MODULE_0__["$game"].ui.addWindow(_ui_windows_settings__WEBPACK_IMPORTED_MODULE_6__["default"]);
    _game_game__WEBPACK_IMPORTED_MODULE_0__["$game"].ui.openWindow('main');
}
function main() {
    const cellsNum = 20;
    const cellWidth = 25;
    const borderWidth = 0;
    const boardLength = cellsNum * cellWidth + (cellsNum + 1) * borderWidth;
    const renderer = new _engine_renderer__WEBPACK_IMPORTED_MODULE_1__["Renderer"](boardLength, boardLength);
    _game_game__WEBPACK_IMPORTED_MODULE_0__["$game"].renderer = renderer;
    initUI();
    const gameContainer = document.createElement('div');
    gameContainer.className = 'GameContainer';
    gameContainer.appendChild(renderer.canvas);
    gameContainer.appendChild(_game_game__WEBPACK_IMPORTED_MODULE_0__["$game"].ui.element);
    document.body.appendChild(gameContainer);
}
document.addEventListener('DOMContentLoaded', () => {
    main();
});


/***/ }),

/***/ "./src/ui/lib/channel-controller/index.ts":
/*!************************************************!*\
  !*** ./src/ui/lib/channel-controller/index.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChannelController; });
class ChannelController {
    constructor() {
        this.listeners = {};
    }
    subscribe(eventName, func) {
        const listeners = this.listeners;
        if (listeners[eventName]) {
            listeners[eventName].push(func);
        }
        else {
            listeners[eventName] = [func];
        }
    }
    dispatch(eventName, eventData) {
        const listeners = this.listeners;
        if (listeners[eventName]) {
            for (const func of listeners[eventName]) {
                func(eventData);
            }
        }
    }
}


/***/ }),

/***/ "./src/ui/lib/controller/index.ts":
/*!****************************************!*\
  !*** ./src/ui/lib/controller/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UIController; });
/* harmony import */ var _channel_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../channel-controller */ "./src/ui/lib/channel-controller/index.ts");

class UIController {
    constructor() {
        this.windows = {};
        this.windowsStack = [];
        this.element = this.build();
        this.channel = new _channel_controller__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.bindEvents();
    }
    build() {
        const element = document.createElement('div');
        element.className = 'Windows';
        return element;
    }
    addWindow(window) {
        this.windows[window.id] = window;
        this.element.appendChild(window.element);
    }
    bindEvents() {
        this.channel.subscribe('ui::window:open', this.onWindowOpen.bind(this));
        this.channel.subscribe('ui::window:close', this.onWindowClose.bind(this));
    }
    onWindowOpen(data) {
        const nextWindow = this.windows[data.id];
        nextWindow.show();
        if (this.currentWindow) {
            this.currentWindow.hide();
        }
        this.windowsStack.push(nextWindow);
    }
    onWindowClose(data) {
        this.windows[data.id].hide();
        this.clearWindowsHistory();
    }
    showUI() {
        this.element.classList.remove('Windows_hidden');
    }
    hideUI() {
        this.element.classList.add('Windows_hidden');
    }
    get currentWindow() {
        return this.windowsStack[this.windowsStack.length - 1];
    }
    back() {
        if (this.windowsStack.length < 2) {
            throw new Error('Less than 2 windows in the stack!');
        }
        this.currentWindow.hide();
        this.windowsStack.pop();
        this.currentWindow.show();
    }
    openWindow(id) {
        if (this.windows[id]) {
            this.windows[id].open();
        }
    }
    clearWindowsHistory() {
        this.windowsStack = [];
    }
}


/***/ }),

/***/ "./src/ui/lib/window/index.ts":
/*!************************************!*\
  !*** ./src/ui/lib/window/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WindowUI; });
/* harmony import */ var _game_game___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../game/game/ */ "./src/game/game/index.ts");

class WindowUI {
    constructor({ id, title, markup, controls }) {
        this.id = id;
        this.element = this.build(title, markup);
        this.controls = Array
            .from(this.element.querySelectorAll('[data-id]'))
            .reduce((dict, control) => ({
            ...dict,
            [control.dataset.id]: control,
        }), {});
        this.bindEvents(controls);
    }
    build(title, markup) {
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
    bindEvents(controls) {
        for (const id in controls) {
            const element = this.element.querySelector(`[data-id=${id}]`);
            if (element) {
                for (const { eventName, handler } of controls[id]) {
                    element.addEventListener(eventName, handler.bind(this, this.controls));
                }
            }
        }
    }
    open() {
        _game_game___WEBPACK_IMPORTED_MODULE_0__["$game"].ui.channel.dispatch('ui::window:open', { id: this.id });
    }
    close() {
        _game_game___WEBPACK_IMPORTED_MODULE_0__["$game"].ui.channel.dispatch('ui::window:close', { id: this.id });
    }
    show() {
        this.element.classList.remove('Window_hidden');
    }
    hide() {
        this.element.classList.add('Window_hidden');
    }
}


/***/ }),

/***/ "./src/ui/windows/game-over/index.ts":
/*!*******************************************!*\
  !*** ./src/ui/windows/game-over/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/window */ "./src/ui/lib/window/index.ts");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../game/game */ "./src/game/game/index.ts");


const mainWindow = new _lib_window__WEBPACK_IMPORTED_MODULE_0__["default"]({
    id: 'game_over',
    title: 'Game over',
    markup: `
        <button data-id="quit">Main menu</button>
    `,
    controls: {
        quit: [{
                eventName: 'click',
                handler: () => {
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].ui.openWindow('main');
                },
            }],
    },
});
/* harmony default export */ __webpack_exports__["default"] = (mainWindow);


/***/ }),

/***/ "./src/ui/windows/main/index.ts":
/*!**************************************!*\
  !*** ./src/ui/windows/main/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/window */ "./src/ui/lib/window/index.ts");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../game/game */ "./src/game/game/index.ts");


const mainWindow = new _lib_window__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].ui.openWindow('play');
                },
            }],
        scores: [{
                eventName: 'click',
                handler: () => {
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].ui.openWindow('scores');
                },
            }],
        settings: [{
                eventName: 'click',
                handler: () => {
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].ui.openWindow('settings');
                },
            }],
        about: [{
                eventName: 'click',
                handler: () => {
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].ui.openWindow('about');
                },
            }],
    },
});
/* harmony default export */ __webpack_exports__["default"] = (mainWindow);


/***/ }),

/***/ "./src/ui/windows/pause/index.ts":
/*!***************************************!*\
  !*** ./src/ui/windows/pause/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/window */ "./src/ui/lib/window/index.ts");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../game/game */ "./src/game/game/index.ts");


const mainWindow = new _lib_window__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].ui.currentWindow.close();
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].enableGameBindings();
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].resume();
                },
            }],
        end: [{
                eventName: 'click',
                handler: () => {
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].end();
                },
            }],
    },
});
/* harmony default export */ __webpack_exports__["default"] = (mainWindow);


/***/ }),

/***/ "./src/ui/windows/play/index.ts":
/*!**************************************!*\
  !*** ./src/ui/windows/play/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/window */ "./src/ui/lib/window/index.ts");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../game/game */ "./src/game/game/index.ts");


const playWindow = new _lib_window__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].prepare();
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].enableGameBindings();
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].ui.currentWindow.close();
                },
            }],
        custom: [{
                eventName: 'click',
                handler: () => {
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].ui.openWindow('custom_game');
                },
            }],
        back: [{
                eventName: 'click',
                handler: () => {
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].ui.back();
                },
            }],
    },
});
/* harmony default export */ __webpack_exports__["default"] = (playWindow);


/***/ }),

/***/ "./src/ui/windows/settings/index.ts":
/*!******************************************!*\
  !*** ./src/ui/windows/settings/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/window */ "./src/ui/lib/window/index.ts");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../game/game */ "./src/game/game/index.ts");


const playWindow = new _lib_window__WEBPACK_IMPORTED_MODULE_0__["default"]({
    id: 'settings',
    title: 'Settings',
    markup: `
        <div class="Settings-Item">
            <label for="window::settings:tiles_number">Tiles number (in a row or column, so there'll be NxN grid)</label>
            <input data-id="tiles_number" id="window::settings:tiles_number" type="number" min="3" max="30" value="${_game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].settings.cellsNum}" />
        </div>

        <div class="Settings-Item">
            <label for="window::settings:tile_size">Tile size</label>
            <input data-id="tile_size" id="window::settings:tile_size" type="number" min="5" max="50" value="${_game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].settings.cellWidth}" />
        </div>

        <div class="Settings-Item">
            <label for="window::settings:border_color">Border color</label>
            <input data-id="border_color" id="window::settings:border_color" type="color" value="${_game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].settings.borderColor}" />
        </div>
        
        <div class="Settings-Item">
            <label for="window::settings:border_width">Border width</label>
            <input data-id="border_width" id="window::settings:border_width" type="number" min="0" max="20" value="${_game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].settings.borderWidth}" />
        </div>

        <div class="Settings-Item">
            <label for="window::settings:snake_head_color">Snake's head color</label>
            <input data-id="snake_head_color" id="window::settings:snake_head_color" type="color" value="${_game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].settings.snake.headColor}" />
        </div>

        <div class="Settings-Item">
            <label for="window::settings:snake_body_color">Snake's body color</label>
            <input data-id="snake_body_color" id="window::settings:snake_body_color" type="color" value="${_game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].settings.snake.bodyColor}" />
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
                handler: (controls) => {
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].applyDefaultSettings();
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].renderer.clearAll();
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].renderer.deleteAll();
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].buildGrid();
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].paintWorld();
                    controls['tiles_number'].value = String(_game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].settings.cellsNum);
                    controls['tile_size'].value = String(_game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].settings.cellWidth);
                    controls['border_color'].value = String(_game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].settings.borderColor);
                    controls['border_width'].value = String(_game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].settings.borderWidth);
                    controls['snake_head_color'].value = _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].settings.snake.headColor;
                    controls['snake_body_color'].value = _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].settings.snake.bodyColor;
                },
            }],
        apply: [{
                eventName: 'click',
                handler: (controls) => {
                    const tilesNum = Number(controls['tiles_number'].value);
                    const tileSize = Number(controls['tile_size'].value);
                    const borderColor = controls['border_color'].value;
                    const borderWidth = Number(controls['border_width'].value);
                    const snakeHeadColor = controls['snake_head_color'].value;
                    const snakeBodyColor = controls['snake_body_color'].value;
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].applySettings({
                        cellsNum: tilesNum,
                        cellWidth: tileSize,
                        borderColor: borderColor,
                        borderWidth: borderWidth,
                        snake: {
                            headColor: snakeHeadColor,
                            bodyColor: snakeBodyColor,
                        },
                    });
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].renderer.clearAll();
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].renderer.deleteAll();
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].buildGrid();
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].paintWorld();
                },
            }],
        cancel: [{
                eventName: 'click',
                handler: () => {
                    _game_game__WEBPACK_IMPORTED_MODULE_1__["$game"].ui.back();
                },
            }],
    },
});
/* harmony default export */ __webpack_exports__["default"] = (playWindow);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmlkL2NlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmlkL2dyaWQtZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ3JpZC9ncmlkLXJlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmlkL2dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmlkL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ3JpZC9saW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcmVuZGVyZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9yZW5kZXJlci9yZW5kZXJlci1lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9yZW5kZXJlci9yZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9hcHBsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9idXR0b24tYmluZGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lL2JpbmRpbmdzL2NvbW1vbi1iaW5kaW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lL2JpbmRpbmdzL2dhbWUtYmluZGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvZ2FtZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9zbmFrZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2xpYi9jaGFubmVsLWNvbnRyb2xsZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2xpYi9jb250cm9sbGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9saWIvd2luZG93L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91aS93aW5kb3dzL2dhbWUtb3Zlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvd2luZG93cy9tYWluL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91aS93aW5kb3dzL3BhdXNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91aS93aW5kb3dzL3BsYXkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3dpbmRvd3Mvc2V0dGluZ3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBbUM7QUFFcEIsTUFBTSxJQUFLLFNBQVEsa0RBQVE7SUFHdEMsWUFBWSxPQUFPO1FBQ2YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBTTtRQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FB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QUFDO1FBQ0YsTUFBTSxFQUFFLENBQUM7Z0JBQ0wsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLE9BQU8sRUFBRSxHQUFHLEVBQUU7b0JBQ1YsZ0RBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7YUFDSixDQUFDO0tBQ0w7Q0FDSixDQUFDLENBQUM7QUFFWSx5RUFBVSxFQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBHcmlkUmVjdCBmcm9tICcuL2dyaWQtcmVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbGwgZXh0ZW5kcyBHcmlkUmVjdCB7XG4gICAgcHVibGljIG93bmVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHNldE93bmVyKGVudGl0eSkge1xuICAgICAgICB0aGlzLm93bmVyID0gZW50aXR5O1xuICAgICAgICBkZWxldGUgdGhpcy5ncmlkLm5vdEJ1c3lDZWxsc1tgJHt0aGlzLmdyaWRYfToke3RoaXMuZ3JpZFl9YF07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlbW92ZU93bmVyKCkge1xuICAgICAgICB0aGlzLm93bmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5ncmlkLm5vdEJ1c3lDZWxsc1tgJHt0aGlzLmdyaWRYfToke3RoaXMuZ3JpZFl9YF0gPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiaW1wb3J0IHsgUmVuZGVyZXJFbnRpdHkgfSBmcm9tICcuLi9yZW5kZXJlcic7XG5pbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkRW50aXR5IGV4dGVuZHMgUmVuZGVyZXJFbnRpdHkge1xuICAgIHB1YmxpYyBncmlkOiBHcmlkO1xuXG4gICAgY29uc3RydWN0b3IoZ3JpZCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgIH1cbn1cbiIsImltcG9ydCBHcmlkRW50aXR5IGZyb20gJy4vZ3JpZC1lbnRpdHknO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcblxuaW50ZXJmYWNlIElHcmlkUmVjdCB7XG4gICAgZ3JpZDogR3JpZDtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBncmlkWDogbnVtYmVyO1xuICAgIGdyaWRZOiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkUmVjdCBleHRlbmRzIEdyaWRFbnRpdHkge1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuICAgIHB1YmxpYyBncmlkWDogbnVtYmVyO1xuICAgIHB1YmxpYyBncmlkWTogbnVtYmVyO1xuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgZGVmYXVsdENvbG9yOiBzdHJpbmcgPSAnI2ZmZic7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGdyaWQsIHR5cGUsIHgsIHksIGdyaWRYLCBncmlkWSwgd2lkdGgsIGhlaWdodCwgY29sb3IgfTogSUdyaWRSZWN0KSB7XG4gICAgICAgIHN1cGVyKGdyaWQpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmdyaWRYID0gZ3JpZFg7XG4gICAgICAgIHRoaXMuZ3JpZFkgPSBncmlkWTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yIHx8IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgIH1cblxuICAgIHBhaW50KGNvbG9yKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5yZW5kZXJlci5wYWludCh0aGlzLCBjb2xvcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmdyaWQucmVuZGVyZXIuY2xlYXIodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBSZW5kZXJlciwgUmVuZGVyZXJFbnRpdHkgfSBmcm9tICcuLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2VsbCBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IExpbmUgZnJvbSAnLi9saW5lJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyO1xuICAgIHB1YmxpYyBob3Jpem9udGFsTGluZXM6IExpbmVbXTtcbiAgICBwdWJsaWMgdmVydGljYWxMaW5lczogTGluZVtdO1xuICAgIHB1YmxpYyBjZWxsczogQ2VsbFtdW107XG4gICAgcHVibGljIG5vdEJ1c3lDZWxsczogUmVjb3JkPHN0cmluZywgQ2VsbD4gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlciwgY2VsbHNOdW06IG51bWJlciwgY2VsbFNpemU6IG51bWJlciwgYm9yZGVyQ29sb3I6IHN0cmluZywgYm9yZGVyU2l6ZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGJvcmRlclNpemUgKiAoY2VsbHNOdW0gKyAxKSArIGNlbGxzTnVtICogY2VsbFNpemU7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsTGluZXMgPSB0aGlzLmNyZWF0ZUxpbmVzKCdob3Jpem9udGFsJywgY2VsbHNOdW0gKyAxLCBjZWxsU2l6ZSwgYm9yZGVyQ29sb3IsIGJvcmRlclNpemUsIGxlbmd0aCk7XG4gICAgICAgIHRoaXMudmVydGljYWxMaW5lcyA9IHRoaXMuY3JlYXRlTGluZXMoJ3ZlcnRpY2FsJywgY2VsbHNOdW0gKyAxLCBjZWxsU2l6ZSwgYm9yZGVyQ29sb3IsIGJvcmRlclNpemUsIGxlbmd0aCk7XG4gICAgICAgIHRoaXMuY2VsbHMgPSB0aGlzLmNyZWF0ZUNlbGxzKGNlbGxzTnVtLCBjZWxsU2l6ZSwgYm9yZGVyU2l6ZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlTGluZXMoZGlyZWN0aW9uLCBudW0sIGRpc3RhbmNlLCBjb2xvciwgdGhpY2tuZXNzLCBsZW5ndGgpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcblxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdob3Jpem9udGFsJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobmV3IExpbmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlja25lc3MgKiBpICsgZGlzdGFuY2UgKiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpY2tuZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndmVydGljYWwnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChuZXcgTGluZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpY2tuZXNzICogaSArIGRpc3RhbmNlICogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpY2tuZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBsZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2VsbHMoY2VsbHNOdW0sIGNlbGxTaXplLCBib3JkZXJTaXplKSB7XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHNOdW07IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2VsbHNOdW07IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBuZXcgQ2VsbCh7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgeDogYm9yZGVyU2l6ZSAqIChpICsgMSkgKyBjZWxsU2l6ZSAqIGksXG4gICAgICAgICAgICAgICAgICAgIHk6IGJvcmRlclNpemUgKiAoaiArIDEpICsgY2VsbFNpemUgKiBqLFxuICAgICAgICAgICAgICAgICAgICBncmlkWDogaSxcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFk6IGosXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjZWxsU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjZWxsU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb2x1bW4ucHVzaChjZWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdEJ1c3lDZWxsc1tgJHtpfToke2p9YF0gPSBjZWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRyaXgucHVzaChjb2x1bW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICB9XG5cbiAgICBpc091dHNpZGUoeCwgeSkge1xuICAgICAgICByZXR1cm4gIShcbiAgICAgICAgICAgIHggPj0gMCAmJiB4IDwgdGhpcy5jZWxsc1swXS5sZW5ndGggJiZcbiAgICAgICAgICAgIHkgPj0gMCAmJiB5IDwgdGhpcy5jZWxscy5sZW5ndGhcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjZWxsKHgsIHkpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5jZWxsc1t4XTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdyAmJiByb3dbeV07XG4gICAgICAgIHJldHVybiBjZWxsIHx8IG51bGw7XG4gICAgfVxufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgR3JpZCB9IGZyb20gJy4vZ3JpZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENlbGwgfSBmcm9tICcuL2NlbGwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHcmlkRW50aXR5IH0gZnJvbSAnLi9ncmlkLWVudGl0eSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdyaWRSZWN0IH0gZnJvbSAnLi9ncmlkLXJlY3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5lIH0gZnJvbSAnLi9saW5lJztcbiIsImltcG9ydCBHcmlkUmVjdCBmcm9tICcuL2dyaWQtcmVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUgZXh0ZW5kcyBHcmlkUmVjdCB7XG4gICAgcHVibGljIG93bmVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cbn0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlbmRlcmVyRW50aXR5IH0gZnJvbSAnLi9yZW5kZXJlci1lbnRpdHknO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5IHtcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcblxuICAgIHByaXZhdGUgbGlzdGVuZXJzOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5fX2dlbmVyYXRlSWQoKTtcbiAgICB9XG5cbiAgICBfX2dlbmVyYXRlSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDAwKS50b1N0cmluZygxNik7XG4gICAgfVxufSIsImludGVyZmFjZSBSZW5kZXJlck9iamVjdCB7XG4gICAgZW50aXR5OiBhbnk7XG4gICAgb3JpZ2luWDogbnVtYmVyO1xuICAgIG9yaWdpblk6IG51bWJlcjtcbiAgICB4OiBudW1iZXIgfCBudWxsO1xuICAgIHk6IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBwdWJsaWMgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gICAgcHVibGljIGVudGl0aWVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgcHVibGljIG9iamVjdHM6IFJlY29yZDxzdHJpbmcsIFJlbmRlcmVyT2JqZWN0PiA9IHt9O1xuICAgIFxuICAgIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkKGVudGl0eSwgb3JpZ2luWCA9IDAsIG9yaWdpblkgPSAwKSB7XG4gICAgICAgIHRoaXMub2JqZWN0c1tlbnRpdHkuaWRdID0ge1xuICAgICAgICAgICAgZW50aXR5OiBlbnRpdHksXG4gICAgICAgICAgICBvcmlnaW5YOiBvcmlnaW5YLFxuICAgICAgICAgICAgb3JpZ2luWTogb3JpZ2luWSxcbiAgICAgICAgICAgIHg6IG51bGwsXG4gICAgICAgICAgICB5OiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBwYWludChlbnRpdHksIGNvbG9yID0gZW50aXR5LmRlZmF1bHRDb2xvcikge1xuICAgICAgICBjb25zdCBvYmplY3QgPSB0aGlzLm9iamVjdHNbZW50aXR5LmlkXTtcblxuICAgICAgICBzd2l0Y2goZW50aXR5LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3QnOlxuICAgICAgICAgICAgICAgIG9iamVjdC54ID0gb2JqZWN0Lm9yaWdpblggKyBlbnRpdHkueDtcbiAgICAgICAgICAgICAgICBvYmplY3QueSA9IG9iamVjdC5vcmlnaW5ZICsgZW50aXR5Lnk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KG9iamVjdC54LCBvYmplY3QueSwgZW50aXR5LndpZHRoLCBlbnRpdHkuaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKGVudGl0eSkge1xuICAgICAgICBjb25zdCBvYmplY3QgPSB0aGlzLm9iamVjdHNbZW50aXR5LmlkXTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KG9iamVjdC54LCBvYmplY3QueSwgZW50aXR5LndpZHRoLCBlbnRpdHkuaGVpZ2h0KTtcblxuICAgICAgICBvYmplY3QueCA9IG51bGw7XG4gICAgICAgIG9iamVjdC55ID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlKGVudGl0eSkge1xuICAgICAgICBkZWxldGUgdGhpcy5lbnRpdGllc1tlbnRpdHkuaWRdO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckFsbCgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBkZWxldGVBbGwoKSB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSB7fTtcbiAgICB9XG59IiwiaW50ZXJmYWNlIElBcHBsZSB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBsZSB7XG4gICAgcHVibGljIGtpbmQ6IHN0cmluZyA9ICdhcHBsZSc7XG4gICAgcHVibGljIGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoeyB4LCB5LCBjb2xvciB9OiBJQXBwbGUpIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IFt4LCB5XTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkJpbmRpbmcge1xuICAgIHByaXZhdGUgZWxlbWVudDogR2xvYmFsRXZlbnRIYW5kbGVycztcbiAgICBwcml2YXRlIGV2ZW50TmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgZnVuYzogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEdsb2JhbEV2ZW50SGFuZGxlcnMsIGV2ZW50TmFtZSwgZnVuYzogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcbiAgICB9XG5cbiAgICBwdWJsaWMgYmluZCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMuZnVuYyk7XG4gICAgfVxuXG4gICAgcHVibGljIHVuYmluZCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMuZnVuYyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCBCdXR0b25CaW5kaW5nIGZyb20gJy4uLy4uL2J1dHRvbi1iaW5kaW5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uRXNjUHJlc3NlZCgkZ2FtZTogR2FtZSkge1xuICAgIHJldHVybiBuZXcgQnV0dG9uQmluZGluZyh3aW5kb3csICdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgIT09ICdFc2NhcGUnIHx8ICEkZ2FtZS5pbml0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZiAoJGdhbWUucGF1c2VkKSB7XG4gICAgICAgICAgICAkZ2FtZS5lbmFibGVHYW1lQmluZGluZ3MoKTtcbiAgICAgICAgICAgICRnYW1lLnVpLmN1cnJlbnRXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgICRnYW1lLnJlc3VtZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGdhbWUuZGlzYWJsZUdhbWVCaW5kaW5ncygpO1xuICAgICAgICAgICAgJGdhbWUudWkub3BlbldpbmRvdygncGF1c2UnKTtcbiAgICAgICAgICAgICRnYW1lLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgQnV0dG9uQmluZGluZyBmcm9tICcuLi8uLi9idXR0b24tYmluZGluZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkFycm93UHJlc3NlZCgkZ2FtZTogR2FtZSkge1xuICAgIHJldHVybiBuZXcgQnV0dG9uQmluZGluZyh3aW5kb3csICdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogc3RyaW5nO1xuXG4gICAgICAgIHN3aXRjaChldmVudC5jb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRnYW1lLnNuYWtlLmNhblNldE5leHREaXJlY3Rpb24oZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgJGdhbWUuc25ha2Uuc2V0TmV4dERpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoISRnYW1lLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICRnYW1lLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBTbmFrZSBmcm9tICcuLi9zbmFrZSc7XG5pbXBvcnQgQXBwbGUgZnJvbSAnLi4vYXBwbGUnO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uL2VuZ2luZS9ncmlkJztcbmltcG9ydCBVSUNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vdWkvbGliL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi8uLi9lbmdpbmUvcmVuZGVyZXInO1xuaW1wb3J0IEJ1dHRvbkJpbmRpbmcgZnJvbSAnLi4vYnV0dG9uLWJpbmRpbmcnO1xuaW1wb3J0IHsgb25Fc2NQcmVzc2VkIH0gZnJvbSAnLi9iaW5kaW5ncy9jb21tb24tYmluZGluZ3MnO1xuaW1wb3J0IHsgb25BcnJvd1ByZXNzZWQgfSBmcm9tICcuL2JpbmRpbmdzL2dhbWUtYmluZGluZ3MnO1xuXG5pbnRlcmZhY2UgU2V0dGluZ3Mge1xuICAgIGNlbGxzTnVtOiBudW1iZXI7XG4gICAgY2VsbFdpZHRoOiBudW1iZXI7XG4gICAgYm9yZGVyQ29sb3I6IHN0cmluZztcbiAgICBib3JkZXJXaWR0aDogbnVtYmVyO1xuICAgIGJvYXJkTGVuZ3RoOiBudW1iZXI7XG4gICAgc25ha2U6IHtcbiAgICAgICAgaGVhZENvbG9yOiBzdHJpbmc7XG4gICAgICAgIGJvZHlDb2xvcjogc3RyaW5nO1xuICAgIH07XG59XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1MgPSB7XG4gICAgY2VsbHNOdW06IDIwLFxuICAgIGNlbGxXaWR0aDogMjUsXG4gICAgYm9yZGVyQ29sb3I6ICcjMDAwJyxcbiAgICBib3JkZXJXaWR0aDogMCxcbiAgICBzbmFrZToge1xuICAgICAgICBoZWFkQ29sb3I6ICcjMDA0YTAwJyxcbiAgICAgICAgYm9keUNvbG9yOiAnIzAwODAwMCcsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBwdWJsaWMgc3RhcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBlbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBwYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgaW5pdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHNuYWtlOiBTbmFrZTtcbiAgICBwdWJsaWMgc3RlcEludGVydmFsOiBudW1iZXIgPSAxNTA7XG4gICAgcHVibGljIGdyaWQ6IEdyaWQ7XG4gICAgcHVibGljIGFwcGxlOiBBcHBsZTtcbiAgICBwdWJsaWMgdWk6IFVJQ29udHJvbGxlcjtcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyO1xuICAgIHB1YmxpYyBnYW1lQmluZGluZ3M6IEJ1dHRvbkJpbmRpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzZXR0aW5nczogU2V0dGluZ3M7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hcHBseURlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgICB0aGlzLnVpID0gbmV3IFVJQ29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLmdhbWVCaW5kaW5ncy5wdXNoKG9uQXJyb3dQcmVzc2VkKHRoaXMpKTtcblxuICAgICAgICBvbkVzY1ByZXNzZWQodGhpcykuYmluZCgpO1xuICAgIH1cblxuICAgIHByZXBhcmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnVpbGRXb3JsZCgpO1xuICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc25ha2UuaGFuZGxlTW92ZSgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKCk7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICB9XG5cbiAgICBzY2hlZHVsZSgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnRlZCB8fCB0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zbmFrZS5oYW5kbGVNb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCk7XG4gICAgICAgIH0sIHRoaXMuc3RlcEludGVydmFsKTtcbiAgICB9XG5cbiAgICBzcGF3bkFwcGxlKCkge1xuICAgICAgICBjb25zdCBub3RCdXN5Q2VsbHMgPSBPYmplY3Qua2V5cyh0aGlzLmdyaWQubm90QnVzeUNlbGxzKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBub3RCdXN5Q2VsbHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3Qga2V5ID0gbm90QnVzeUNlbGxzW2luZGV4XTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ3JpZC5ub3RCdXN5Q2VsbHNba2V5XTtcbiAgICAgICAgdGhpcy5hcHBsZSA9IG5ldyBBcHBsZSh7IHg6IGNlbGwuZ3JpZFgsIHk6IGNlbGwuZ3JpZFksIGNvbG9yOiAncmVkJyB9KTtcbiAgICAgICAgY2VsbC5zZXRPd25lcih0aGlzLmFwcGxlKVxuICAgICAgICAgICAgLnBhaW50KHRoaXMuYXBwbGUuY29sb3IpO1xuICAgIH1cblxuICAgIGVhdEFwcGxlKCkge1xuICAgICAgICB0aGlzLmFwcGxlID0gbnVsbDtcbiAgICB9XG5cbiAgICBlbmQoKSB7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbml0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlR2FtZUJpbmRpbmdzKCk7XG4gICAgICAgIHRoaXMudWkub3BlbldpbmRvdygnZ2FtZV9vdmVyJyk7XG4gICAgfVxuXG4gICAgcmVzdG9yZSgpIHtcbiAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmRlbGV0ZUFsbCgpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyQWxsKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmdyaWQ7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNuYWtlO1xuICAgICAgICBkZWxldGUgdGhpcy5hcHBsZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFwcGx5U2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgICAgICAgZnVuY3Rpb24gY29weWluZ1dhbGsoZGljdEZyb206IFNldHRpbmdzLCBkaWN0VG86IFNldHRpbmdzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkaWN0RnJvbSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGljdEZyb21ba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29weWluZ1dhbGsoZGljdEZyb21ba2V5XSwgZGljdFRvW2tleV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpY3RUb1trZXldID0gZGljdEZyb21ba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb3B5aW5nV2FsayhzZXR0aW5ncywgdGhpcy5zZXR0aW5ncyk7XG5cbiAgICAgICAgY29uc3QgeyBjZWxsc051bSwgY2VsbFdpZHRoLCBib3JkZXJXaWR0aCB9ID0gdGhpcy5zZXR0aW5ncztcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5ib2FyZExlbmd0aCA9IHRoaXMuY2FsY0JvYXJkTGVuZ3RoKGNlbGxzTnVtLCBjZWxsV2lkdGgsIGJvcmRlcldpZHRoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXBwbHlEZWZhdWx0U2V0dGluZ3MoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBjZWxsc051bTogREVGQVVMVF9TRVRUSU5HUy5jZWxsc051bSxcbiAgICAgICAgICAgIGNlbGxXaWR0aDogREVGQVVMVF9TRVRUSU5HUy5jZWxsV2lkdGgsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogREVGQVVMVF9TRVRUSU5HUy5ib3JkZXJDb2xvcixcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBERUZBVUxUX1NFVFRJTkdTLmJvcmRlcldpZHRoLFxuICAgICAgICAgICAgYm9hcmRMZW5ndGg6IERFRkFVTFRfU0VUVElOR1MuY2VsbHNOdW0gKiBERUZBVUxUX1NFVFRJTkdTLmNlbGxXaWR0aCArIChERUZBVUxUX1NFVFRJTkdTLmNlbGxzTnVtICsgMSkgKiBERUZBVUxUX1NFVFRJTkdTLmJvcmRlcldpZHRoLFxuICAgICAgICAgICAgc25ha2U6IHtcbiAgICAgICAgICAgICAgICBoZWFkQ29sb3I6IERFRkFVTFRfU0VUVElOR1Muc25ha2UuaGVhZENvbG9yLFxuICAgICAgICAgICAgICAgIGJvZHlDb2xvcjogREVGQVVMVF9TRVRUSU5HUy5zbmFrZS5ib2R5Q29sb3IsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRXb3JsZCgpIHtcbiAgICAgICAgdGhpcy5idWlsZEdyaWQoKTtcbiAgICAgICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSh7XG4gICAgICAgICAgICBncmlkOiB0aGlzLmdyaWQsXG4gICAgICAgICAgICB4OiA0LFxuICAgICAgICAgICAgeTogNCxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnNldHRpbmdzLnNuYWtlLmJvZHlDb2xvcixcbiAgICAgICAgICAgIGhlYWRDb2xvcjogdGhpcy5zZXR0aW5ncy5zbmFrZS5oZWFkQ29sb3IsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGFpbnRXb3JsZCgpO1xuICAgICAgICB0aGlzLnNuYWtlLnBsYWNlKCk7XG4gICAgICAgIHRoaXMuc3Bhd25BcHBsZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBidWlsZEdyaWQoKSB7XG4gICAgICAgIGNvbnN0IHsgY2VsbHNOdW0sIGNlbGxXaWR0aCwgYm9yZGVyQ29sb3IsIGJvcmRlcldpZHRoIH0gPSB0aGlzLnNldHRpbmdzO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYm9hcmRMZW5ndGggPSB0aGlzLmNhbGNCb2FyZExlbmd0aChjZWxsc051bSwgY2VsbFdpZHRoLCBib3JkZXJXaWR0aCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuY2FudmFzLndpZHRoID0gdGhpcy5zZXR0aW5ncy5ib2FyZExlbmd0aDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jYW52YXMuaGVpZ2h0ID0gdGhpcy5zZXR0aW5ncy5ib2FyZExlbmd0aDtcblxuICAgICAgICBjb25zdCBncmlkID0gbmV3IEdyaWQodGhpcy5yZW5kZXJlciwgY2VsbHNOdW0sIGNlbGxXaWR0aCwgYm9yZGVyQ29sb3IsIGJvcmRlcldpZHRoKTtcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZDtcbiAgICAgICAgY29uc3QgZW50aXRpZXMgPSBbXG4gICAgICAgICAgICAuLi5ncmlkLmhvcml6b250YWxMaW5lcyxcbiAgICAgICAgICAgIC4uLmdyaWQudmVydGljYWxMaW5lcyxcbiAgICAgICAgICAgIC4uLmdyaWQuY2VsbHMuZmxhdCgpLFxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAoY29uc3QgZW50aXR5IG9mIGVudGl0aWVzKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZChlbnRpdHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHBhaW50V29ybGQoKSB7XG4gICAgICAgIGZvciAoY29uc3QgeyBlbnRpdHkgfSBvZiBPYmplY3QudmFsdWVzKHRoaXMucmVuZGVyZXIub2JqZWN0cykpIHtcbiAgICAgICAgICAgIGxldCBjb2xvciA9IGVudGl0eS5jb2xvcjtcblxuICAgICAgICAgICAgaWYgKGVudGl0eS5vd25lcikge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gZW50aXR5Lm93bmVyLmNvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnBhaW50KGVudGl0eSwgY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZUdhbWVCaW5kaW5ncygpIHtcbiAgICAgICAgZm9yIChjb25zdCBiaW5kaW5nIG9mIHRoaXMuZ2FtZUJpbmRpbmdzKSB7XG4gICAgICAgICAgICBiaW5kaW5nLmJpbmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNhYmxlR2FtZUJpbmRpbmdzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGJpbmRpbmcgb2YgdGhpcy5nYW1lQmluZGluZ3MpIHtcbiAgICAgICAgICAgIGJpbmRpbmcudW5iaW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsY0JvYXJkTGVuZ3RoKGNlbGxzTnVtOiBudW1iZXIsIGNlbGxXaWR0aDogbnVtYmVyLCBib3JkZXJXaWR0aDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBjZWxsc051bSAqIGNlbGxXaWR0aCArIChjZWxsc051bSArIDEpICogYm9yZGVyV2lkdGg7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgJGdhbWUgPSBuZXcgR2FtZSgpO1xuIiwiaW1wb3J0IHsgJGdhbWUgfSBmcm9tICcuLi9nYW1lJztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi9lbmdpbmUvZ3JpZCc7XG5cbmludGVyZmFjZSBJU25ha2Uge1xuICAgIGdyaWQ6IEdyaWQ7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGhlYWRDb2xvcjogc3RyaW5nO1xuICAgIGxlbmd0aD86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEdhbWVSZWN0RW50aXR5IHtcbiAgICBraW5kOiBzdHJpbmc7XG4gICAgY29vcmRpbmF0ZXM6IFtudW1iZXIsIG51bWJlcl07XG4gICAgY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25ha2Uge1xuICAgIHB1YmxpYyBncmlkOiBHcmlkO1xuICAgIHB1YmxpYyBib2R5OiBHYW1lUmVjdEVudGl0eVtdO1xuICAgIHB1YmxpYyBkaXJlY3Rpb246IHN0cmluZyA9ICdyaWdodCc7XG4gICAgcHVibGljIGJvZHlDb2xvcjogc3RyaW5nO1xuICAgIHB1YmxpYyBuZXh0RGlyZWN0aW9uPzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoeyBncmlkLCB4LCB5LCBjb2xvciwgaGVhZENvbG9yLCBsZW5ndGggPSAzIH06IElTbmFrZSkge1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgICAgICB0aGlzLmJvZHkgPSB0aGlzLmNyZWF0ZUJvZHkoeCwgeSwgY29sb3IsIGhlYWRDb2xvciwgbGVuZ3RoKTtcbiAgICAgICAgdGhpcy5ib2R5Q29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBjcmVhdGVCb2R5KHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBoZWFkQ29sb3I6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IFt7XG4gICAgICAgICAgICBraW5kOiAnc25ha2VfaGVhZCcsXG4gICAgICAgICAgICBjb29yZGluYXRlczogW3gsIHldLFxuICAgICAgICAgICAgY29sb3I6IGhlYWRDb2xvcixcbiAgICAgICAgfV0gYXMgR2FtZVJlY3RFbnRpdHlbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5LnB1c2goe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdzbmFrZV9ib2R5JyxcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogW3ggLSBpLCB5XSxcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2R5O1xuICAgIH1cblxuICAgIHBsYWNlKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5ib2R5KSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuY2VsbChwYXJ0LmNvb3JkaW5hdGVzWzBdLCBwYXJ0LmNvb3JkaW5hdGVzWzFdKVxuICAgICAgICAgICAgICAgIC5zZXRPd25lcihwYXJ0KVxuICAgICAgICAgICAgICAgIC5wYWludChwYXJ0LmNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbk1vdmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IFtoZWFkLCBwcmV2XSA9IHRoaXMuYm9keTtcbiAgICAgICAgY29uc3QgeyBkeCwgZHkgfSA9IHRoaXMuZ2V0U3RlcChkaXJlY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBoZWFkLmNvb3JkaW5hdGVzWzBdICsgZHggPT09IHByZXYuY29vcmRpbmF0ZXNbMF0gJiZcbiAgICAgICAgICAgIGhlYWQuY29vcmRpbmF0ZXNbMV0gKyBkeSA9PT0gcHJldi5jb29yZGluYXRlc1sxXTtcbiAgICB9XG5cbiAgICBzZXREaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIHNldE5leHREaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubmV4dERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBnZXRTdGVwKGRpcmVjdGlvbikge1xuICAgICAgICBsZXQgZHgsIGR5O1xuXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGR4ID0gLTE7XG4gICAgICAgICAgICAgICAgZHkgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGR4ID0gMTtcbiAgICAgICAgICAgICAgICBkeSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgICAgICAgZHggPSAwO1xuICAgICAgICAgICAgICAgIGR5ID0gLTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgICAgICBkeCA9IDA7XG4gICAgICAgICAgICAgICAgZHkgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgZHgsIGR5IH07XG4gICAgfVxuXG4gICAgaGFuZGxlTW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubmV4dERpcmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb24odGhpcy5uZXh0RGlyZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgZHgsIGR5IH0gPSB0aGlzLmdldFN0ZXAodGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICBjb25zdCBoZWFkID0gdGhpcy5ib2R5WzBdO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBoZWFkLmNvb3JkaW5hdGVzO1xuICAgICAgICBjb25zdCBuZXh0Q2VsbCA9IHRoaXMuZ3JpZC5jZWxsKHggKyBkeCwgeSArIGR5KTtcbiAgICAgICAgY29uc3QgZW50aXR5S2luZCA9IG5leHRDZWxsICYmIG5leHRDZWxsLm93bmVyICYmIG5leHRDZWxsLm93bmVyLmtpbmQ7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5ncmlkLmlzT3V0c2lkZSh4ICsgZHgsIHkgKyBkeSkgfHxcbiAgICAgICAgICAgIFsnb2JzdGFjbGUnLCAnc25ha2VfYm9keSddLmluZGV4T2YoZW50aXR5S2luZCkgPiAtMVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmtpbGwoKTsgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFt0cmFpbFgsIHRyYWlsWV0gPSB0aGlzLm1vdmUobmV4dENlbGwsIHggKyBkeCwgeSArIGR5KTtcbiAgICAgICAgXG4gICAgICAgIGlmIChlbnRpdHlLaW5kID09PSAnYXBwbGUnKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3codHJhaWxYLCB0cmFpbFkpO1xuICAgICAgICAgICAgJGdhbWUuZWF0QXBwbGUoKTtcbiAgICAgICAgICAgICRnYW1lLnNwYXduQXBwbGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmUodG8sIHgsIHkpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgbGV0IG5leHRDZWxsID0gdG87XG4gICAgICAgIGxldCBuZXh0WCA9IHg7XG4gICAgICAgIGxldCBuZXh0WSA9IHk7XG5cbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuYm9keSkge1xuICAgICAgICAgICAgY29uc3QgW3ByZXZYLCBwcmV2WV0gPSBwYXJ0LmNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgZ3JpZC5jZWxsKHByZXZYLCBwcmV2WSlcbiAgICAgICAgICAgICAgICAucmVtb3ZlT3duZXIoKVxuICAgICAgICAgICAgICAgIC5jbGVhcigpO1xuICAgICAgICAgICAgcGFydC5jb29yZGluYXRlcyA9IFtuZXh0WCwgbmV4dFldO1xuICAgICAgICAgICAgbmV4dENlbGxcbiAgICAgICAgICAgICAgICAuc2V0T3duZXIocGFydClcbiAgICAgICAgICAgICAgICAucGFpbnQocGFydC5jb2xvcik7XG4gICAgICAgICAgICBuZXh0Q2VsbCA9IGdyaWQuY2VsbChwcmV2WCwgcHJldlkpO1xuICAgICAgICAgICAgbmV4dFggPSBwcmV2WDtcbiAgICAgICAgICAgIG5leHRZID0gcHJldlk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW25leHRYLCBuZXh0WV07XG4gICAgfVxuXG4gICAga2lsbCgpIHtcbiAgICAgICAgJGdhbWUuZW5kKCk7XG4gICAgfVxuXG4gICAgYXhpcyhkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgYXhpc1ggPSBbJ2xlZnQnLCAncmlnaHQnXTtcbiAgICAgICAgY29uc3QgYXhpc1kgPSBbJ3VwJywgJ2Rvd24nXTtcblxuICAgICAgICBpZiAoWy4uLmF4aXNYLCAuLi5heGlzWV0uaW5kZXhPZihkaXJlY3Rpb24pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXhpc1guaW5kZXhPZihkaXJlY3Rpb24pID4gLTEgPyAnaG9yJyA6ICd2ZXInO1xuICAgIH1cblxuICAgIGNhblNldE5leHREaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHByZXZEaXIgPSB0aGlzLmF4aXModGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICBjb25zdCBuZXh0RGlyID0gdGhpcy5heGlzKGRpcmVjdGlvbik7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcHJldkRpciA9PT0gJ2hvcicgJiYgbmV4dERpciA9PT0gJ2hvcicgfHxcbiAgICAgICAgICAgIHByZXZEaXIgPT09ICd2ZXInICYmIG5leHREaXIgPT09ICd2ZXInXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ3Jvdyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICBjb25zdCBwYXJ0ID0ge1xuICAgICAgICAgICAga2luZDogJ3NuYWtlX2JvZHknLFxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFt4LCB5XSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmJvZHlDb2xvcixcbiAgICAgICAgfSBhcyBHYW1lUmVjdEVudGl0eTtcbiAgICAgICAgdGhpcy5ib2R5LnB1c2gocGFydCk7XG4gICAgICAgIHRoaXMuZ3JpZC5jZWxsKHgsIHkpXG4gICAgICAgICAgICAuc2V0T3duZXIocGFydClcbiAgICAgICAgICAgIC5wYWludChwYXJ0LmNvbG9yKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgJGdhbWUgfSBmcm9tICcuL2dhbWUvZ2FtZSc7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vZW5naW5lL3JlbmRlcmVyJztcblxuaW1wb3J0IG1haW5XaW5kb3cgZnJvbSAnLi91aS93aW5kb3dzL21haW4nO1xuaW1wb3J0IHBsYXlXaW5kb3cgZnJvbSAnLi91aS93aW5kb3dzL3BsYXknO1xuaW1wb3J0IGdhbWVvdmVyV2luZG93IGZyb20gJy4vdWkvd2luZG93cy9nYW1lLW92ZXInO1xuaW1wb3J0IHBhdXNlV2luZG93IGZyb20gJy4vdWkvd2luZG93cy9wYXVzZSc7XG5pbXBvcnQgc2V0dGluZ3NXaW5kb3cgZnJvbSAnLi91aS93aW5kb3dzL3NldHRpbmdzJztcblxuZnVuY3Rpb24gaW5pdFVJKCkge1xuICAgICRnYW1lLnVpLmFkZFdpbmRvdyhtYWluV2luZG93KTtcbiAgICAkZ2FtZS51aS5hZGRXaW5kb3cocGxheVdpbmRvdyk7XG4gICAgJGdhbWUudWkuYWRkV2luZG93KGdhbWVvdmVyV2luZG93KTtcbiAgICAkZ2FtZS51aS5hZGRXaW5kb3cocGF1c2VXaW5kb3cpO1xuICAgICRnYW1lLnVpLmFkZFdpbmRvdyhzZXR0aW5nc1dpbmRvdyk7XG5cbiAgICAkZ2FtZS51aS5vcGVuV2luZG93KCdtYWluJyk7XG59XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgY29uc3QgY2VsbHNOdW0gPSAyMDtcbiAgICBjb25zdCBjZWxsV2lkdGggPSAyNTtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IDA7XG4gICAgY29uc3QgYm9hcmRMZW5ndGggPSBjZWxsc051bSAqIGNlbGxXaWR0aCArIChjZWxsc051bSArIDEpICogYm9yZGVyV2lkdGg7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcihib2FyZExlbmd0aCwgYm9hcmRMZW5ndGgpO1xuICAgICRnYW1lLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICBpbml0VUkoKTtcblxuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdHYW1lQ29udGFpbmVyJztcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmNhbnZhcyk7XG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCgkZ2FtZS51aS5lbGVtZW50KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVDb250YWluZXIpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIG1haW4oKTtcbn0pO1xuIiwidHlwZSBFdmVudEhhbmRsZXIgPSAoYXJnOiBhbnkpID0+IHZvaWQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWxDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIGxpc3RlbmVyczogUmVjb3JkPHN0cmluZywgRXZlbnRIYW5kbGVyW10+ID0ge307XG5cbiAgICBwdWJsaWMgc3Vic2NyaWJlKGV2ZW50TmFtZTogc3RyaW5nLCBmdW5jOiBFdmVudEhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnM7XG4gICAgICAgIFxuICAgICAgICBpZiAobGlzdGVuZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tldmVudE5hbWVdLnB1c2goZnVuYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtmdW5jXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwYXRjaChldmVudE5hbWU6IHN0cmluZywgZXZlbnREYXRhOiBhbnkpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyc1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgbGlzdGVuZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgICAgICBmdW5jKGV2ZW50RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgV2luZG93VUkgZnJvbSAnLi4vd2luZG93JztcbmltcG9ydCBDaGFubmVsQ29udHJvbGxlciBmcm9tICcuLi9jaGFubmVsLWNvbnRyb2xsZXInO1xuXG5pbnRlcmZhY2UgV2luZG93RGF0YSB7XG4gICAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlDb250cm9sbGVyIHtcbiAgICBwdWJsaWMgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHVibGljIGNoYW5uZWw6IENoYW5uZWxDb250cm9sbGVyO1xuICAgIFxuICAgIHByaXZhdGUgd2luZG93czogUmVjb3JkPHN0cmluZywgV2luZG93VUk+ID0ge307XG4gICAgcHJpdmF0ZSB3aW5kb3dzU3RhY2s6IFdpbmRvd1VJW10gPSBbXTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5idWlsZCgpO1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSBuZXcgQ2hhbm5lbENvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAnV2luZG93cyc7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFdpbmRvdyh3aW5kb3c6IFdpbmRvd1VJKSB7XG4gICAgICAgIHRoaXMud2luZG93c1t3aW5kb3cuaWRdID0gd2luZG93O1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQod2luZG93LmVsZW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5jaGFubmVsLnN1YnNjcmliZSgndWk6OndpbmRvdzpvcGVuJywgdGhpcy5vbldpbmRvd09wZW4uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2hhbm5lbC5zdWJzY3JpYmUoJ3VpOjp3aW5kb3c6Y2xvc2UnLCB0aGlzLm9uV2luZG93Q2xvc2UuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbldpbmRvd09wZW4oZGF0YTogV2luZG93RGF0YSkge1xuICAgICAgICBjb25zdCBuZXh0V2luZG93ID0gdGhpcy53aW5kb3dzW2RhdGEuaWRdO1xuICAgICAgICBuZXh0V2luZG93LnNob3coKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFdpbmRvdykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50V2luZG93LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndpbmRvd3NTdGFjay5wdXNoKG5leHRXaW5kb3cpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25XaW5kb3dDbG9zZShkYXRhOiBXaW5kb3dEYXRhKSB7XG4gICAgICAgIHRoaXMud2luZG93c1tkYXRhLmlkXS5oaWRlKCk7XG4gICAgICAgIHRoaXMuY2xlYXJXaW5kb3dzSGlzdG9yeSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93VUkoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdXaW5kb3dzX2hpZGRlbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlVUkoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdXaW5kb3dzX2hpZGRlbicpO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50V2luZG93KCk6IFdpbmRvd1VJIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2luZG93c1N0YWNrW3RoaXMud2luZG93c1N0YWNrLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIHB1YmxpYyBiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy53aW5kb3dzU3RhY2subGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMZXNzIHRoYW4gMiB3aW5kb3dzIGluIHRoZSBzdGFjayEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFdpbmRvdy5oaWRlKCk7XG4gICAgICAgIHRoaXMud2luZG93c1N0YWNrLnBvcCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRXaW5kb3cuc2hvdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuV2luZG93KGlkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMud2luZG93c1tpZF0pIHtcbiAgICAgICAgICAgIHRoaXMud2luZG93c1tpZF0ub3BlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyV2luZG93c0hpc3RvcnkoKSB7XG4gICAgICAgIHRoaXMud2luZG93c1N0YWNrID0gW107XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgJGdhbWUgfSBmcm9tICcuLi8uLi8uLi9nYW1lL2dhbWUvJztcblxudHlwZSBDb250cm9sc0RpY3QgPSBSZWNvcmQ8c3RyaW5nLCB7XG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgaGFuZGxlcjogKGNvbnRyb2xzOiBSZWNvcmQ8c3RyaW5nLCBIVE1MRWxlbWVudD4sIGV2ZW50OiBFdmVudCkgPT4gdm9pZFxufVtdPjtcblxuaW50ZXJmYWNlIElXaW5kb3dVSSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBtYXJrdXA/OiBzdHJpbmc7XG4gICAgY29udHJvbHM/OiBDb250cm9sc0RpY3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvd1VJIHtcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiAgICBwdWJsaWMgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHVibGljIGNvbnRyb2xzOiBSZWNvcmQ8c3RyaW5nLCBIVE1MRWxlbWVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGlkLCB0aXRsZSwgbWFya3VwLCBjb250cm9scyB9OiBJV2luZG93VUkpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmJ1aWxkKHRpdGxlLCBtYXJrdXApO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gQXJyYXlcbiAgICAgICAgICAgIC5mcm9tKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignW2RhdGEtaWRdJykpXG4gICAgICAgICAgICAucmVkdWNlKChkaWN0LCBjb250cm9sKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLmRpY3QsXG4gICAgICAgICAgICAgICAgW2NvbnRyb2wuZGF0YXNldC5pZF06IGNvbnRyb2wsXG4gICAgICAgICAgICB9KSwge30pO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoY29udHJvbHMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGQodGl0bGU6IHN0cmluZywgbWFya3VwOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdXaW5kb3cgV2luZG93X2hpZGRlbic7XG5cbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiV2luZG93LVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIldpbmRvdy1UaXRsZVRleHRcIj4ke3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiV2luZG93LUJvZHlcIj4ke21hcmt1cH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJXaW5kb3ctSGludFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJXaW5kb3ctSGludFRleHRcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgYmluZEV2ZW50cyhjb250cm9sczogQ29udHJvbHNEaWN0KSB7XG4gICAgICAgIGZvciAoY29uc3QgaWQgaW4gY29udHJvbHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JHtpZH1dYCk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB7IGV2ZW50TmFtZSwgaGFuZGxlciB9IG9mIGNvbnRyb2xzW2lkXSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLmJpbmQodGhpcywgdGhpcy5jb250cm9scykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCkge1xuICAgICAgICAkZ2FtZS51aS5jaGFubmVsLmRpc3BhdGNoKCd1aTo6d2luZG93Om9wZW4nLCB7IGlkOiB0aGlzLmlkIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpIHtcbiAgICAgICAgJGdhbWUudWkuY2hhbm5lbC5kaXNwYXRjaCgndWk6OndpbmRvdzpjbG9zZScsIHsgaWQ6IHRoaXMuaWQgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdXaW5kb3dfaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdXaW5kb3dfaGlkZGVuJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFdpbmRvdyBmcm9tICcuLi8uLi9saWIvd2luZG93JztcbmltcG9ydCB7ICRnYW1lIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9nYW1lJztcblxuY29uc3QgbWFpbldpbmRvdyA9IG5ldyBXaW5kb3coe1xuICAgIGlkOiAnZ2FtZV9vdmVyJyxcbiAgICB0aXRsZTogJ0dhbWUgb3ZlcicsXG4gICAgbWFya3VwOiBgXG4gICAgICAgIDxidXR0b24gZGF0YS1pZD1cInF1aXRcIj5NYWluIG1lbnU8L2J1dHRvbj5cbiAgICBgLFxuICAgIGNvbnRyb2xzOiB7XG4gICAgICAgIHF1aXQ6IFt7XG4gICAgICAgICAgICBldmVudE5hbWU6ICdjbGljaycsXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJGdhbWUudWkub3BlbldpbmRvdygnbWFpbicpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfV0sXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtYWluV2luZG93O1xuIiwiaW1wb3J0IFdpbmRvdyBmcm9tICcuLi8uLi9saWIvd2luZG93JztcbmltcG9ydCB7ICRnYW1lIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9nYW1lJztcblxuY29uc3QgbWFpbldpbmRvdyA9IG5ldyBXaW5kb3coe1xuICAgIGlkOiAnbWFpbicsXG4gICAgdGl0bGU6ICdUaGUgU25ha2UgZ2FtZScsXG4gICAgbWFya3VwOiBgXG4gICAgICAgIDxidXR0b24gZGF0YS1pZD1cInBsYXlcIj5QbGF5PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gZGF0YS1pZD1cInNjb3Jlc1wiPlNjb3JlczwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGRhdGEtaWQ9XCJzZXR0aW5nc1wiPlNldHRpbmdzPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gZGF0YS1pZD1cImFib3V0XCI+QWJvdXQ8L2J1dHRvbj5cbiAgICBgLFxuICAgIGNvbnRyb2xzOiB7XG4gICAgICAgIHBsYXk6IFt7XG4gICAgICAgICAgICBldmVudE5hbWU6ICdjbGljaycsXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJGdhbWUudWkub3BlbldpbmRvdygncGxheScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfV0sXG4gICAgICAgIHNjb3JlczogW3tcbiAgICAgICAgICAgIGV2ZW50TmFtZTogJ2NsaWNrJyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkZ2FtZS51aS5vcGVuV2luZG93KCdzY29yZXMnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1dLFxuICAgICAgICBzZXR0aW5nczogW3tcbiAgICAgICAgICAgIGV2ZW50TmFtZTogJ2NsaWNrJyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkZ2FtZS51aS5vcGVuV2luZG93KCdzZXR0aW5ncycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfV0sXG4gICAgICAgIGFib3V0OiBbe1xuICAgICAgICAgICAgZXZlbnROYW1lOiAnY2xpY2snLFxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICRnYW1lLnVpLm9wZW5XaW5kb3coJ2Fib3V0Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XSxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5XaW5kb3c7XG4iLCJpbXBvcnQgV2luZG93IGZyb20gJy4uLy4uL2xpYi93aW5kb3cnO1xuaW1wb3J0IHsgJGdhbWUgfSBmcm9tICcuLi8uLi8uLi9nYW1lL2dhbWUnO1xuXG5jb25zdCBtYWluV2luZG93ID0gbmV3IFdpbmRvdyh7XG4gICAgaWQ6ICdwYXVzZScsXG4gICAgdGl0bGU6ICdQYXVzZScsXG4gICAgbWFya3VwOiBgXG4gICAgICAgIDxidXR0b24gZGF0YS1pZD1cInJlc3VtZVwiPlJlc3VtZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGRhdGEtaWQ9XCJlbmRcIj5FbmQgZ2FtZTwvYnV0dG9uPlxuICAgIGAsXG4gICAgY29udHJvbHM6IHtcbiAgICAgICAgcmVzdW1lOiBbe1xuICAgICAgICAgICAgZXZlbnROYW1lOiAnY2xpY2snLFxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICRnYW1lLnVpLmN1cnJlbnRXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAkZ2FtZS5lbmFibGVHYW1lQmluZGluZ3MoKTtcbiAgICAgICAgICAgICAgICAkZ2FtZS5yZXN1bWUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1dLFxuICAgICAgICBlbmQ6IFt7XG4gICAgICAgICAgICBldmVudE5hbWU6ICdjbGljaycsXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJGdhbWUuZW5kKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XSxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5XaW5kb3c7XG4iLCJpbXBvcnQgV2luZG93IGZyb20gJy4uLy4uL2xpYi93aW5kb3cnO1xuaW1wb3J0IHsgJGdhbWUgfSBmcm9tICcuLi8uLi8uLi9nYW1lL2dhbWUnO1xuXG5jb25zdCBwbGF5V2luZG93ID0gbmV3IFdpbmRvdyh7XG4gICAgaWQ6ICdwbGF5JyxcbiAgICB0aXRsZTogJ1BsYXknLFxuICAgIG1hcmt1cDogYFxuICAgICAgICA8YnV0dG9uIGRhdGEtaWQ9XCJjbGFzc2ljXCI+Q2xhc3NpYyBnYW1lPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gZGF0YS1pZD1cImN1c3RvbVwiPkN1c3RvbSBnYW1lPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gZGF0YS1pZD1cImJhY2tcIj5CYWNrPC9idXR0b24+XG4gICAgYCxcbiAgICBjb250cm9sczoge1xuICAgICAgICBjbGFzc2ljOiBbe1xuICAgICAgICAgICAgZXZlbnROYW1lOiAnY2xpY2snLFxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICRnYW1lLnVpLm9wZW5XaW5kb3coJ2NsYXNzaWNfZ2FtZScpO1xuICAgICAgICAgICAgICAgICRnYW1lLnByZXBhcmUoKTtcbiAgICAgICAgICAgICAgICAkZ2FtZS5lbmFibGVHYW1lQmluZGluZ3MoKTtcbiAgICAgICAgICAgICAgICAkZ2FtZS51aS5jdXJyZW50V2luZG93LmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XSxcbiAgICAgICAgY3VzdG9tOiBbe1xuICAgICAgICAgICAgZXZlbnROYW1lOiAnY2xpY2snLFxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICRnYW1lLnVpLm9wZW5XaW5kb3coJ2N1c3RvbV9nYW1lJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XSxcbiAgICAgICAgYmFjazogW3tcbiAgICAgICAgICAgIGV2ZW50TmFtZTogJ2NsaWNrJyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkZ2FtZS51aS5iYWNrKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XSxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXlXaW5kb3c7XG4iLCJpbXBvcnQgV2luZG93IGZyb20gJy4uLy4uL2xpYi93aW5kb3cnO1xuaW1wb3J0IHsgJGdhbWUgfSBmcm9tICcuLi8uLi8uLi9nYW1lL2dhbWUnO1xuXG5jb25zdCBwbGF5V2luZG93ID0gbmV3IFdpbmRvdyh7XG4gICAgaWQ6ICdzZXR0aW5ncycsXG4gICAgdGl0bGU6ICdTZXR0aW5ncycsXG4gICAgbWFya3VwOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJTZXR0aW5ncy1JdGVtXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwid2luZG93OjpzZXR0aW5nczp0aWxlc19udW1iZXJcIj5UaWxlcyBudW1iZXIgKGluIGEgcm93IG9yIGNvbHVtbiwgc28gdGhlcmUnbGwgYmUgTnhOIGdyaWQpPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBkYXRhLWlkPVwidGlsZXNfbnVtYmVyXCIgaWQ9XCJ3aW5kb3c6OnNldHRpbmdzOnRpbGVzX251bWJlclwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCIzXCIgbWF4PVwiMzBcIiB2YWx1ZT1cIiR7JGdhbWUuc2V0dGluZ3MuY2VsbHNOdW19XCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIlNldHRpbmdzLUl0ZW1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ3aW5kb3c6OnNldHRpbmdzOnRpbGVfc2l6ZVwiPlRpbGUgc2l6ZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgZGF0YS1pZD1cInRpbGVfc2l6ZVwiIGlkPVwid2luZG93OjpzZXR0aW5nczp0aWxlX3NpemVcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiNVwiIG1heD1cIjUwXCIgdmFsdWU9XCIkeyRnYW1lLnNldHRpbmdzLmNlbGxXaWR0aH1cIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiU2V0dGluZ3MtSXRlbVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIndpbmRvdzo6c2V0dGluZ3M6Ym9yZGVyX2NvbG9yXCI+Qm9yZGVyIGNvbG9yPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBkYXRhLWlkPVwiYm9yZGVyX2NvbG9yXCIgaWQ9XCJ3aW5kb3c6OnNldHRpbmdzOmJvcmRlcl9jb2xvclwiIHR5cGU9XCJjb2xvclwiIHZhbHVlPVwiJHskZ2FtZS5zZXR0aW5ncy5ib3JkZXJDb2xvcn1cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJTZXR0aW5ncy1JdGVtXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwid2luZG93OjpzZXR0aW5nczpib3JkZXJfd2lkdGhcIj5Cb3JkZXIgd2lkdGg8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGRhdGEtaWQ9XCJib3JkZXJfd2lkdGhcIiBpZD1cIndpbmRvdzo6c2V0dGluZ3M6Ym9yZGVyX3dpZHRoXCIgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBtYXg9XCIyMFwiIHZhbHVlPVwiJHskZ2FtZS5zZXR0aW5ncy5ib3JkZXJXaWR0aH1cIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiU2V0dGluZ3MtSXRlbVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIndpbmRvdzo6c2V0dGluZ3M6c25ha2VfaGVhZF9jb2xvclwiPlNuYWtlJ3MgaGVhZCBjb2xvcjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgZGF0YS1pZD1cInNuYWtlX2hlYWRfY29sb3JcIiBpZD1cIndpbmRvdzo6c2V0dGluZ3M6c25ha2VfaGVhZF9jb2xvclwiIHR5cGU9XCJjb2xvclwiIHZhbHVlPVwiJHskZ2FtZS5zZXR0aW5ncy5zbmFrZS5oZWFkQ29sb3J9XCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIlNldHRpbmdzLUl0ZW1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ3aW5kb3c6OnNldHRpbmdzOnNuYWtlX2JvZHlfY29sb3JcIj5TbmFrZSdzIGJvZHkgY29sb3I8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGRhdGEtaWQ9XCJzbmFrZV9ib2R5X2NvbG9yXCIgaWQ9XCJ3aW5kb3c6OnNldHRpbmdzOnNuYWtlX2JvZHlfY29sb3JcIiB0eXBlPVwiY29sb3JcIiB2YWx1ZT1cIiR7JGdhbWUuc2V0dGluZ3Muc25ha2UuYm9keUNvbG9yfVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJTZXR0aW5ncy1BY3Rpb25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtaWQ9XCJkZWZhdWx0c1wiPkFwcGx5IGRlZmF1bHQgc2V0dGluZ3M8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1pZD1cImNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWlkPVwiYXBwbHlcIj5BcHBseTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNvbnRyb2xzOiB7XG4gICAgICAgIGRlZmF1bHRzOiBbe1xuICAgICAgICAgICAgZXZlbnROYW1lOiAnY2xpY2snLFxuICAgICAgICAgICAgaGFuZGxlcjogKGNvbnRyb2xzOiBSZWNvcmQ8c3RyaW5nLCBIVE1MRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgICAkZ2FtZS5hcHBseURlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICRnYW1lLnJlbmRlcmVyLmNsZWFyQWxsKCk7XG4gICAgICAgICAgICAgICAgJGdhbWUucmVuZGVyZXIuZGVsZXRlQWxsKCk7XG4gICAgICAgICAgICAgICAgJGdhbWUuYnVpbGRHcmlkKCk7XG4gICAgICAgICAgICAgICAgJGdhbWUucGFpbnRXb3JsZCgpO1xuXG4gICAgICAgICAgICAgICAgKGNvbnRyb2xzWyd0aWxlc19udW1iZXInXSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFN0cmluZygkZ2FtZS5zZXR0aW5ncy5jZWxsc051bSk7XG4gICAgICAgICAgICAgICAgKGNvbnRyb2xzWyd0aWxlX3NpemUnXSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFN0cmluZygkZ2FtZS5zZXR0aW5ncy5jZWxsV2lkdGgpO1xuICAgICAgICAgICAgICAgIChjb250cm9sc1snYm9yZGVyX2NvbG9yJ10gYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSBTdHJpbmcoJGdhbWUuc2V0dGluZ3MuYm9yZGVyQ29sb3IpO1xuICAgICAgICAgICAgICAgIChjb250cm9sc1snYm9yZGVyX3dpZHRoJ10gYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSBTdHJpbmcoJGdhbWUuc2V0dGluZ3MuYm9yZGVyV2lkdGgpO1xuICAgICAgICAgICAgICAgIChjb250cm9sc1snc25ha2VfaGVhZF9jb2xvciddIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gJGdhbWUuc2V0dGluZ3Muc25ha2UuaGVhZENvbG9yO1xuICAgICAgICAgICAgICAgIChjb250cm9sc1snc25ha2VfYm9keV9jb2xvciddIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gJGdhbWUuc2V0dGluZ3Muc25ha2UuYm9keUNvbG9yO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfV0sXG4gICAgICAgIGFwcGx5OiBbe1xuICAgICAgICAgICAgZXZlbnROYW1lOiAnY2xpY2snLFxuICAgICAgICAgICAgaGFuZGxlcjogKGNvbnRyb2xzOiBSZWNvcmQ8c3RyaW5nLCBIVE1MRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlc051bSA9IE51bWJlcigoY29udHJvbHNbJ3RpbGVzX251bWJlciddIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlU2l6ZSA9IE51bWJlcigoY29udHJvbHNbJ3RpbGVfc2l6ZSddIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBib3JkZXJDb2xvciA9IChjb250cm9sc1snYm9yZGVyX2NvbG9yJ10gYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSBOdW1iZXIoKGNvbnRyb2xzWydib3JkZXJfd2lkdGgnXSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc25ha2VIZWFkQ29sb3IgPSAoY29udHJvbHNbJ3NuYWtlX2hlYWRfY29sb3InXSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzbmFrZUJvZHlDb2xvciA9IChjb250cm9sc1snc25ha2VfYm9keV9jb2xvciddIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgJGdhbWUuYXBwbHlTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxzTnVtOiB0aWxlc051bSxcbiAgICAgICAgICAgICAgICAgICAgY2VsbFdpZHRoOiB0aWxlU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogYm9yZGVyV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHNuYWtlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkQ29sb3I6IHNuYWtlSGVhZENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUNvbG9yOiBzbmFrZUJvZHlDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkZ2FtZS5yZW5kZXJlci5jbGVhckFsbCgpO1xuICAgICAgICAgICAgICAgICRnYW1lLnJlbmRlcmVyLmRlbGV0ZUFsbCgpO1xuICAgICAgICAgICAgICAgICRnYW1lLmJ1aWxkR3JpZCgpO1xuICAgICAgICAgICAgICAgICRnYW1lLnBhaW50V29ybGQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1dLFxuICAgICAgICBjYW5jZWw6IFt7XG4gICAgICAgICAgICBldmVudE5hbWU6ICdjbGljaycsXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJGdhbWUudWkuYmFjaygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfV0sXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBwbGF5V2luZG93O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==