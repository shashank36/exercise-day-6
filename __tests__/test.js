const {
  timeout,
  greet,
  rejectPromise,
  allPromises,
  Queue,
  Person,
  sequentialPromise,
} = require('../src');

/* eslint-disable no-unused-vars */

describe('timeout', () => {
  test('works with promises', () => {
    timeout('Pesto').then(data => expect(data).toBe('Hello Pesto'));
  });
});

describe('greet', () => {
  test('The function should return a Promise', () => {
    expect(greet() instanceof Promise).toBe(true);
  });
  test('Promise resolve value', () => expect(greet('Pesto')).resolves.toBe('Hey Pesto'));
});

describe('rejectPromise', () => {
  test('The function should return a Promise', () => {
    expect(rejectPromise() instanceof Promise).toBe(true);
  });

  test('Promise resolve value', () => expect(rejectPromise()).resolves.toBe('REJECTED!'));
});

describe('allPromises', () => {
  test('The function should return a Promise', () => {
    expect(allPromises() instanceof Promise).toBe(true);
  });

  test('Promise call should return an array of values from promises', () => {
    const p1 = new Promise(res => res(1));
    const p2 = 2;
    const p3 = Promise.resolve(3);
    return expect(allPromises([p1, p2, p3])).resolves.toEqual([1, 2, 3]);
  });
});

describe('Queue', () => {
  test('should create an object with an empty items array and count 0', () => {
    const myQueue = new Queue();
    expect(myQueue).toEqual({
      items: [],
      count: 0,
    });
  });

  test('should have a method to queue an item to the end of the queue', () => {
    const myQueue = new Queue();
    myQueue.queue(1);
    myQueue.queue(2);
    myQueue.queue(3);
    myQueue.queue(4);
    expect(myQueue.items[3]).toBe(4);
  });

  test('should increment the property count when item is queued', () => {
    const myQueue = new Queue();
    expect(myQueue.count).toBe(0);
    myQueue.queue(1);
    expect(myQueue.count).toBe(1);
    myQueue.queue(2);
    expect(myQueue.count).toBe(2);
    myQueue.queue(3);
    expect(myQueue.count).toBe(3);
  });

  test('should have a method to dequeue an item from the end of the queue', () => {
    const myQueue = new Queue();
    myQueue.queue(1);
    myQueue.queue(2);
    myQueue.queue(3);
    myQueue.dequeue();
    expect(myQueue.items[1]).toBe(2);
  });

  test('should decrement the property count when item is dequeued', () => {
    const myQueue = new Queue();
    myQueue.queue(1);
    myQueue.queue(2);
    myQueue.queue(3);
    myQueue.dequeue();
    expect(myQueue.count).toBe(2);
  });
});

describe('Person', () => {
  test('should be a class with name = Person', () => {
    expect(/\b\s?class Person\s?{/gm.test(Person.toString())).toBe(true);
  });

  test('should create an object with firstName, lastName, dateOfBirth when called with new keyword', () => {
    const nishant = new Person('Nishant', 'Salhotra', '5/11/1994');
    expect(nishant).toEqual({
      firstName: 'Nishant',
      lastName: 'Salhotra',
      dateOfBirth: '5/11/1994',
    });
  });

  test('should have a method to add the digits in date of birth', () => {
    const nishant = new Person('Nishant', 'Salhotra', '5/11/1994');
    expect(nishant.addDobDigits()).toBe(30);
  });
});

describe('sequentialPromise', () => {
  test('should resolve 3 promises in sequence and return a promise', async () => {
    const p1 = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('dude');
      }, 1000);
    });

    const p2 = dude => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${dude}, wheres my car`);
      }, 300);
    });

    const p3 = movieName => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${movieName} is a terrible movie`);
      }, 0);
    });

    await expect(sequentialPromise([p1, p2, p3]) instanceof Promise).toBe(true);

    await expect(sequentialPromise([p1, p2, p3]))
      .resolves
      .toBe('dude, wheres my car is a terrible movie');
  });

  test('should resolve 2 promises in sequence and return a promise', async () => {
    const p1 = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Godfather');
      }, 1000);
    });

    const p2 = movieName => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${movieName} is an awesome movie`);
      }, 0);
    });

    await expect(sequentialPromise([p1, p2])).resolves.toBe('Godfather is an awesome movie');
  });
});
