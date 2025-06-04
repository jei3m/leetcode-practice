/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let n = init;
    
    function increment() {
        return ++n;
    };

    function reset() {
        return n = init;
    }

    function decrement() {
        return --n;
    }

    return {
        increment,
        reset,
        decrement
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

 // initialize variable for initial value
 // make 3 function(){}
 // return object of those 3 functions