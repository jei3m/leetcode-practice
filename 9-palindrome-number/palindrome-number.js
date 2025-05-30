/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversed = x.toString().split("").reverse().join("");
    let string = x.toString().split("").join("");

    if (reversed === string) {
        return true;
    } else {
        return false;
    }
};