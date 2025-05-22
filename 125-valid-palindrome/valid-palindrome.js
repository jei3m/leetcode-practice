/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let reverseString = s.split(" ").join("").split("").reverse().join("").toLowerCase();
    let joinedString = s.split(" ").join("").toLowerCase();

    reverseString = reverseString.replace(/[^a-zA-Z0-9]/g, "");
    joinedString = joinedString.replace(/[^a-zA-Z0-9]/g, "");

    console.log(reverseString)

    if (reverseString === joinedString) {
        return true;
    } else {
        return false;
    }
};