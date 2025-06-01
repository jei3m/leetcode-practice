/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (!nums.length) return init;

    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i]);
    }
    return init;
};

// result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ...
// meaning we have to loop over nums, set init per item to fn(val, nums[i])