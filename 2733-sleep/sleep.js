/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

// return promise
// setTimeout() inside the promise
// resolve(millis) inside the timeout

// Notes from W3Schools:

// const myTimeout = setTimeout(myFunction, 5000);

// let myPromise = new Promise(function(myResolve, myReject) {
//   myResolve(); // when successful
//   myReject();  // when error
// });
