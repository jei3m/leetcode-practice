/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let reverse = s.split(" ").join("").split("").reverse().join("").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let string = s.split(" ").join("").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (reverse === string) {
        return true;
    } else {
        return false;
    }

};

// to remove all non-alphanumeric characters: .replace(/[^a-zA-Z0-9]/g