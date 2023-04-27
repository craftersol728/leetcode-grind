/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(nums, target, start, end) {
    if (start > end) {
        return -1;
    }

    const middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
        return middle;
    }

    if (nums[middle] > target) {
        return binarySearch(nums, target, start, middle - 1);
    }

    if (nums[middle] < target) {
        return binarySearch(nums, target, middle + 1, end);
    }
}
