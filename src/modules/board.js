import { Ship, ShipType } from './ship';

const BoardSpace = {
    empty: "empty",
    hit: "hit",
    miss: "miss"
}

const Board = () => {
    const dim = 10;

    const board = Array(dim).fill(0).map(i => Array(dim).fill(BoardSpace.empty));

    const getBoard = () => board;

    const placeShip = (ship, x, y, direction) => {
        if (isShipPlacementValid(ship, x, y, direction)) {
            const boat = Ship.create(ship);
            switch (direction) {
                case 'horizontal': 
                    for (let i = 0; i <= ship.length; i++) {
                        board[x + i] = boat;
                    }
                case 'vertical':
                    for (let i = 0; i <= ship.length; i++) {
                        board[x + i] = boat;
                    }
            }
            return 1;
        }
        return 0;
    }

    const isShipPlacementValid = (ship, x, y, direction) => {
        switch (direction) {
            case 'horizontal':
                if (x + ship.length >= dim || x < 0 || y < 0) {
                    return false;
                }
                for (let i = 0; i < ship.length; i++) {
                    if (board[x + i] != BoardSpace.empty) {
                        return false;
                    }
                }
                return true;
            case 'veritcal': 
                if (y + ship.length >= dim || x < 0 || y < 0) {
                    return false;
                }
                for (let j = 0; j < ship.length; j++) {
                    if (board[y + i] != BoardSpace.empty) {
                        return false;
                    }
                }
                return true;
            default: 
                return false;
        }
    }

    const attack = (x, y) =>{
        board[x][y] === BoardSpace.empty ? miss(x, y) : hit(board[x][y], x, y);
    }

    const hit = (ship, x, y) => {
        ship.hit();
        board[x][y] = BoardSpace.hit;
    }

    const miss = (x, y) => {
        board[x][y] = BoardSpace.miss;
    }

    return { 
        getBoard, 
        placeShip, 
        isShipPlacementValid, 
        attack, 
        hit, 
        miss 
    };
}

export { Board, BoardSpace };