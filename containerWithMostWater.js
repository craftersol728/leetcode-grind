/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left = 0; 
    let right = numbers.length - 1;
    let maxArea = 0;

    while (left < right){
        let minHeight = Math.min(height[left],height[right]);

        let distance = right - left;

        let area = minHeight * distance;

        maxArea = Math.max(maxArea, area);

        if(height[left] < height[right]){
            left ++;
        } else {
            right ++;
        }
    }

    return maxArea;
};