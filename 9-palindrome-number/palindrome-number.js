/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverseNumber = x.toString().split("").reverse().join("");
    let stringNumber = x.toString().split("").join("");

    if (reverseNumber === stringNumber) {
        return true;
    } else {
        return false;
    }
};