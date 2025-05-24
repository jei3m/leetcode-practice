/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let reversed = s.split(" ").join("").split("").reverse().join("").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let notReversed = s.split(" ").join("").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if (reversed === notReversed) {
        return true;
    } else {
        return false;
    }
};