/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            array.push(arr[i])
        }
    }
    return array;
};

// start by declaring and empty array
// loop over each element in the array
// if fn(arr[i], i), push arr[i]