// Like Promise.all but for object properties instead of iterated values. Returns a promise that
// is fulfilled when all the properties of the object are fulfilled. The promise's fulfillment
// value is an object with fulfilled values at respective keys to the original object. If any
// promise in the object rejects, the returned promise is rejected.

// promiseAllProps({
//     foo: Promise.resolve('foo'),
//     bar: Promise.resolve('bar')
// }).then(function(result) {
//     console.log(result.foo, result.bar);
// });

function promiseAllProps(obj) {
  const arr = [];
  const objKeys = Object.keys(obj);
  objKeys.forEach(key => arr.push(obj[key]));

  Promise.all(arr)
    .then(values => values.reduce((acc, val, index) => {
      acc[objKeys[index]] = val;
      return acc;
    }));
}

module.exports = promiseAllProps;
