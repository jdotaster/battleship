const ShipType = {
    carrier :{
        type: 'carrier',
        length: 5
    },
    battleship :{
        type: 'battleship',
        length: 4
    },
    cruiser :{
        type: 'cruiser',
        length: 3
    },
    submarine :{
        type: 'submarine',
        length: 3
    },
    destroyer :{
        type: 'destroyer',
        length: 2
    }
}

const Ship = () => {
    let length,
        type,
        hitCount,
        sunk;

    const create = (ship) => {
        length = ship.length;
        type = ship.type;
        hitCount = 0;
        sunk = false;
    }

    const getHitCount = () => {
        return hitCount;
    }

    const hit = () => {
        hitCount += 1;
    }

    const getSunk = () => {
        return sunk;
    }

    const isSunk = () => {
        return hitCount === length;
    }

    return { 
        create, 
        getHitCount, 
        hit, 
        getSunk, 
        isSunk 
    };
}

export { Ship, ShipType };