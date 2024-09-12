const Ship = () => {
    let length,
        hitCount,
        sunk;

    const create = (l) => {
        length = l;
        hitCount = 0;
        sunk = false;
    }

    const getLength = () => {
        return length;
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

    return { create, getLength, getHitCount, hit, getSunk, isSunk };
}

export default Ship;