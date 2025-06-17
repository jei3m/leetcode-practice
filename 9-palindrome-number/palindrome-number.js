/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    string = x.toString();
    let reverse = string.split("").reverse().join("");
    if (reverse === string) {
        return true;
    } else {
        return false;
    }
};