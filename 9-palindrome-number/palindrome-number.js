/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverseString = x.toString().split("").reverse().join("")
    let xString = x.toString().split("").join("")

    if (reverseString === xString) {
        return true;
    } else {
        return false;
    }
};