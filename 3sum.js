var threeSum = function(nums) {
    let sortedNums =  nums.sort((a, b) => a - b);
    let results = [];

    for (let i = 0; i < nums.length - 2 ; i++) {
        if (sortedNums[i] > 0){ 
            break;
        }
        if (i > 0 && sortedNums[i] === sortedNums[i-1]){ 
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let currentSum = sortedNums[i] + sortedNums[left] + sortedNums[right];

            if (currentSum === 0) {
                results.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                left++;
                right--;

                while (left < right && sortedNums[left] === sortedNums[left - 1]) {
                    left++;
                }
                while (left < right && sortedNums[right] === sortedNums[right + 1]) {
                    right--;
                }
            } else if (currentSum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return results;
};
