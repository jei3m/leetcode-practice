/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = s.split(" ").join("").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reverse = string.split("").reverse().join("");

    if (reverse === string) {
        return true;
    } else {
        return false;
    }

};

// to remove all non-alphanumeric characters: .replace(/[^a-zA-Z0-9]/g