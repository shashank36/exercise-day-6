const plugin = require('../src/promiseAllProps');

test('wait for fulfilled object properties ', () => {
  plugin({
    foo: Promise.resolve('foo'),
    bar: Promise.resolve('bar'),
  }).then((result) => {
    expect(result).toEqual({ foo: 'foo', bar: 'bar' });
  });
});
