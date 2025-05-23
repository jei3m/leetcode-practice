/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        let result = fn(arr[i], i);
        array.push(result);
    }
    return array;
};