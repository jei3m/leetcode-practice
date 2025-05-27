/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // create an array from s
    let sArr = s.trim().split(" ");
    let arr = []
    // remove blank values within s array
    for (let i = 0; i < sArr.length; i++){
        if (sArr[i] !== ""){
            arr.push(sArr[i])
        }
    }
    return arr[arr.length - 1].length;
};