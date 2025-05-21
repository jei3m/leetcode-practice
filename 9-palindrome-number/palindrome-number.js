/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const xReverse = x.toString().split("").reverse().join("");
    const xString = x.toString().split("").join("");

    if (xReverse === xString) {
        return true;
    } else {
        return false;
    }
};