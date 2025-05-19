/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const string = x.toString();
    const splitted = string.split("")
    const reverse = splitted.reverse()
    const join = reverse.join("")
    if (string === join ) {
        return true;
    } 
    return false;
};