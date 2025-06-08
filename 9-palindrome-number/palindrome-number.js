/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    string = x.toString();
    reversed = string.split("").reverse().join("");

    if (reversed === string ) {
        return true;
    } else {
        return false;
    }

};