/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    const stackTemp = [];
    let result = Array(temperatures.length).fill(0);

    for (let i = 0; i<temperatures.length;i++){
        while(stackTemp.length > 0 && temperatures[i] > temperatures[stackTemp[stackTemp.length-1]]){        
            let poppedIndex = stackTemp.pop();
            result[poppedIndex] = i - poppedIndex;
        }
        stackTemp.push(i);
    }
    return result
};