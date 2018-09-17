function isPromise(val) {
  return Promise.resolve(val) === val;
}

module.exports = isPromise;
