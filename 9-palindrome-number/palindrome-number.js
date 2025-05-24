/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reverseString = x.toString().split("").reverse().join("");
    const xString = x.toString().split("").join("");

    if (reverseString === xString) {
        return true;
    } else {
        return false;
    }

};