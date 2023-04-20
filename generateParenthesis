/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
  
    function generate(current, open, close, n, result) {
      if (current.length === 2 * n) {
        result.push(current);
        return;
      }
  
      if (open < n) {
        generate(current + '(', open + 1, close, n, result);
      }
  
      if (close < open) {
        generate(current + ')', open, close + 1, n, result);
      }
    }
  
    // Move these two lines outside the `generate` function
    generate('', 0, 0, n, result);
    return result; // Return the result array at the end
  };
  
  console.log(generateParenthesis(3));
  