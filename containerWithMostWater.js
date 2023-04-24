/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // Calculate the minimum height
        let minHeight = Math.min(height[left], height[right]);

        // Calculate the distance between the pointers
        let distance = right - left;

        // Calculate the area by multiplying minHeight by distance
        let area = minHeight * distance;

        // Update maxArea if the current area is greater
        maxArea = Math.max(maxArea, area);

        // Move the pointer pointing to the shorter line towards the center
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    // Return the maximum area
    return maxArea;
};
