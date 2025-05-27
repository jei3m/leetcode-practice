/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    let volume = length * width * height;
    
    const isBulky = 
    length >= 10**4 ||
    width >= 10**4 ||
    height >= 10**4 ||
    mass >= 10**4 ||
    volume >= 10**9;

    const isHeavy = mass >= 100;

    if (isBulky && isHeavy){
        return "Both"
    } else if (isBulky) {
        return "Bulky"
    } else if (isHeavy) {
        return "Heavy"
    } else {
        return "Neither"
    }
};