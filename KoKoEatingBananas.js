/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    function canEatAll(speed) {
        let hoursNeeded = 0;
        for (let pile of piles) {
            hoursNeeded += Math.ceil(pile / speed);
        }
        return hoursNeeded <= h;
    }

    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canEatAll(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
