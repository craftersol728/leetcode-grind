/*Longest Substring Without Repeating Characters

Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    let maxLen = 0;

    let charsInWindow = new Set();

    for (end = 0; end < s.length; end++) {
        // If the current character is in charsInWindow, move 'start' forward
        while (charsInWindow.has(s[end])) {
            charsInWindow.delete(s[start]);
            start += 1;
        } 

        // Add the current character to charsInWindow
        charsInWindow.add(s[end]);

        // Update maxLen
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
};
