/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    function isAlphaNumeric(char) {
        return /^[a-z0-9]+$/i.test(char);
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};
