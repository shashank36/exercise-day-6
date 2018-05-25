// When we call timeout, we need to get the greeting (Hello Pesto) asynchronously
// 1 (*)
// Would the following code work? If not, check out this function's test cases
// and correct the function.
function timeout(name) {
  return setTimeout(() => `Hello ${name}`, 300);
}

// 2 (*)
function sayHi(name) {
  const greeting = `Hey ${name}`;
  return greeting;
}

function getName(value) {
  return value;
}

function greet(name) {
  const result = getName(name).then(sayHi);
  return result;
}

// 3 (*)
// Pass the tests for the following function
function rejectPromise() {
  const promise = new Promise((resolve, reject) => {
    const errorObject = 'Rejected';
    setTimeout(() => reject(errorObject), 300);
  });
  return promise.catch(() => {});
}

// 4 (*)
function allPromises() {

}

// 5 (*)
function sequentialPromise() {

}

// 6 (*)
// Implement a queue using ES6 class. See test cases for Queue
class Queue {

}

// 7 (*)
// Convert the function below to ES6 class (*)
function Person(firstName, lastName, dateOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = dateOfBirth;
}

Person.prototype.addDobDigits = function addDobDigits() {
  return this.dateOfBirth.match(/\d/g).reduce((acc, item) => Number(acc) + Number(item));
};

module.exports = {
  timeout,
  greet,
  rejectPromise,
  allPromises,
  Queue,
  Person,
  sequentialPromise,
};
