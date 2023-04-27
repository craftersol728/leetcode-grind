/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    
    let startRow = 0;
    let endRow = numRows - 1;
    let targetRow = -1;

        while (startRow <= endRow){
            const middleRow = Math.floor((startRow + endRow)/2);

            if (matrix[middleRow][0] <= target && matrix[middleRow][numCols - 1] >= target){
                targetRow = middleRow;
                break;
            }

            if (matrix[middleRow][0] > target){
                endRow = middleRow -1;
            } else {
                startRow = middleRow+1
            }
        }

        if (targetRow === -1){
            return false;
        }

        return binarySearch(matrix[targetRow], target, 0, numCols - 1);
};

function binarySearch(nums, target, start, end) {
    if (start > end) {
        return false;
    }

    const middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
        return true;
    }

    if (nums[middle] > target) {
        return binarySearch(nums, target, start, middle - 1);
    }

    if (nums[middle] < target) {
        return binarySearch(nums, target, middle + 1, end);
    }
}