function findCombinations(candidates, target, usedNumbers) {
    const result = [];
  
    function backtrack(remaining, currentCombination, start) {
      if (remaining === 0) {
        result.push([...currentCombination]);
        return;
      }
  
      if (remaining < 0) {
        return;
      }
  
      for (let i = start; i < candidates.length; i++) {
        if (usedNumbers.has(candidates[i])) continue;
        currentCombination.push(candidates[i]);
        usedNumbers.add(candidates[i]);
        backtrack(remaining - candidates[i], currentCombination, i + 1);
        usedNumbers.delete(candidates[i]);
        currentCombination.pop();
      }
    }
  
    backtrack(target, [], 0);
    return result;
  }
  
  function findCombinationsWithMultipleTargets(targets, numbersArray) {
    const result = {};
    const usedNumbers = new Set();
  
    targets.forEach(target => {
      const combinations = findCombinations(numbersArray, target, usedNumbers);
      if (combinations.length) {
        result[target] = combinations;
        combinations[0].forEach(number => usedNumbers.add(number));
      }
    });
  
    return result;
  }
  
  // Example usage:
  const targets = [1519, 3259, 1044.66, 1128.9, 1406, 1895, 1235, 4324.18, 390, 568, 5315, 829, 2104, 1572];
  const numbersArray = [400, 1175, 344, 706, 740, 260, 1250, 657, 387.66, 798.9, 336, 701, 227, 705, 452, 227, 580, 655, 1800, 475, 952, 587, 309, 568, 1124, 1026, 300, 868, 365, 352, 1280, 829, 589, 850, 665, 785, 787, 866, 737, 2600, 342, 864];
  const result = findCombinationsWithMultipleTargets(targets, numbersArray);
  console.log(result);
  