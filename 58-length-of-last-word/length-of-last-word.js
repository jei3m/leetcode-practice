/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    string = s.trim().split(" ")
    return string[string.length - 1].length;
};