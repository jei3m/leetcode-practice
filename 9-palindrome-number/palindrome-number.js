/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = x.toString();
    let split = string.split("");
    let xString = split.join("");
    let reverse = split.reverse().join("")
    if (reverse === xString) {
        return true
    } else {
        return false
    }
};