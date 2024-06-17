//Promises!
/*
Promises were introduced to address the problems of callback hell and to provide a better way to handle asynchronous operations in JavaScript. They allow us to write cleaner, more readable code by chaining operations together and handling errors more effectively.
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states:
Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
Implementing promises in JS:
By pasing an executor function (it has 2 params resolve, reject) to the Promise constructor
If operation is successful call resolve else reject
*/

//sample promise
function sample(resolve, reject) {
  let success = false;
  if (success) {
    resolve("Dummy operation successful");
  } else {
    reject("Dummy operation failed");
  }
}
const samplePromise = new Promise(sample);

// console.log(samplePromise);

samplePromise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (result) {
    console.log(result);
  });

//Creating a simple promise

let helloPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Namaskaram using Promise in js");
  }, 2000);
});
helloPromise
  .then(function (result) {
    console.log("Promise Successful")
    console.log(result);
  })
  .catch(function (result) {
    console.log("Promise Rejected")
    console.log(result);
  });


// Chain Promises
