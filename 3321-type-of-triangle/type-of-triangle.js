/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    [a,b,c] = nums;
    const isTriangle = a + b > c && a + c > b && b + c > a;
    if (isTriangle) {
        if (a === b && b === c) {
            return "equilateral";
        } else if (a === b || b === c || a === c) {
            return "isosceles";
        } else {
            return "scalene";
        }
    }
    return "none";
};