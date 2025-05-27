/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    sWord = s.trim().split(" ");
    return sWord[sWord.length - 1].length;
};