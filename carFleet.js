/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const n = position.length
    const sortedIndexes = Array.from({length: n}, (_, i) => i).sort((a, b) => position[b] - position[a]);


    let fleets = 0;
    let maxTime = 0;

    for (const i of sortedIndexes) {
        const timeToDestination = (target - position[i]) / speed[i];
        if (timeToDestination > maxTime) {
          maxTime = timeToDestination;
          fleets++;
        }
      }
    
      return fleets;
    };
