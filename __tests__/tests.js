const {
  tripleAndFilter,
  doubleOddNumbers,
  mapFilterAndReduce,
  instructor,
  printFullName,
  createStudent,
  placeInMiddle,
  joinArrays,
  sumEvenArgs,
  bind,
  blockScoping,
  constImmutable,
  templateLiterals,
  callTemplateTagFunction,
} = require('../src');

// arrow functions
describe('tripleAndFilter', () => {
  test('triples an array of numbers and returns an array of all those numbers divisible by 5', () => {
    expect(tripleAndFilter([1, 2, 3, 4, 5])).toEqual([15]);
  });
});

describe('doubleOddNumbers', () => {
  test('returns a new array of all odd numbers doubled', () => {
    expect(doubleOddNumbers([1, 2, 3, 4, 5])).toEqual([2, 6, 10]);
  });
});

describe('mapFilterAndReduce', () => {
  it(`maps over an array and filters for a length less than 5 and reduces
    into an object with the key as the name and value as the length`, () => {
    const arr = mapFilterAndReduce([{
      firstName: 'Tony',
    }, {
      firstName: 'Steve',
    }, {
      firstName: 'Tchala',
    }, {
      firstName: 'Thor',
    }]);
    expect(arr).toEqual({
      Tony: 4,
      Thor: 4,
    });
  });
});

describe('instructor', () => {
  test('should change this.firstname to Ram', () => {
    instructor.sayHi();
    setTimeout(() => {
      expect(instructor.firstName).toBe('Ram');
    });
  });
});

describe('printFullName', () => {
  test('returns a string with the first value and last value of an object with a destructured parameter', () => {
    const obj = {
      first: 'Tony',
      last: 'Stark',
    };
    expect(printFullName(obj)).toBe('My name is Tony Stark');
  });
});

describe('createStudent', () => {
  test('returns a string with the first value and last value of an object with a destructured parameter', () => {
    expect(createStudent()).toBe('The student likes JavaScript and ES2015');
    expect(createStudent({
      likesES2015: false,
    })).toBe('The student likes JavaScript!');
    expect(createStudent({
      likesJavaScript: false,
    })).toBe('The student likes ES2015!');
    expect(createStudent({
      likesJavaScript: false,
      likesES2015: false,
    })).toBe('The student does not like much...');
  });
});

describe('placeInMiddle', () => {
  test('places a list of values in the middle of an array', () => {
    expect(placeInMiddle([1, 2, 6, 7], [3, 4, 5])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(placeInMiddle([1], [3, 4, 5])).toEqual([3, 4, 5, 1]);
    expect(placeInMiddle([1, 6], [2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(placeInMiddle([], [2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
  });
});

describe('joinArrays', () => {
  test('returns a single array of all the parameters concatenated together', () => {
    expect(joinArrays([1], [2], [3])).toEqual([1, 2, 3]);
    expect(joinArrays([1], [2], [3], [1], [2], [3])).toEqual([1, 2, 3, 1, 2, 3]);
    expect(joinArrays([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(joinArrays([1], [3], [0], [7])).toEqual([1, 3, 0, 7]);
  });
});

describe('sumEvenArgs', () => {
  test('returns the sum of even arguments passed to the function', () => {
    expect(sumEvenArgs(1, 2, 3, 4, 5)).toBe(6);
    expect(sumEvenArgs(1, 2, 3, 4, 5, 6)).toBe(12);
    expect(sumEvenArgs(1, 3, 5, 7, 9)).toBe(10);
  });
});

describe('bind', () => {
  function addFourNumbers(a, b, c, d) {
    return a + b + c + d;
  }

  function firstNameFavoriteColor(favoriteColor) {
    return `${this.firstName}'s favorite color is ${favoriteColor}`;
  }
  const person = {
    firstName: 'Goku',
  };
  test('returns a function', () => {
    expect(typeof bind(firstNameFavoriteColor, person)).toBe('function');
  });
  test('is invoked with the value of the keyword this passed to the function', () => {
    let bindFn = bind(firstNameFavoriteColor, person);
    expect(bindFn('green')).toBe('Goku\'s favorite color is green');
    bindFn = bind(firstNameFavoriteColor, person, 'blue');
    expect(bindFn('green')).toBe('Goku\'s favorite color is blue');
  });
  test('is invoked with the remaining arguments from the outer function and inner function', () => {
    expect(bind(addFourNumbers, this, 1)(2, 3, 4)).toBe(10);
    expect(bind(addFourNumbers, this, 1, 2)(3, 4)).toBe(10);
    expect(bind(addFourNumbers, this, 1, 2, 3)(4)).toBe(10);
    expect(bind(addFourNumbers, this, 1, 2, 3, 4)()).toBe(10);
    expect(bind(addFourNumbers, this)(1, 2, 3, 4)).toBe(10);
    expect(bind(addFourNumbers, this)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(10);
  });
});

describe('blockScoping', () => {
  test('should return the number (range: 0 - 10) sent as argument to function', () => {
    expect(blockScoping(5)).toBe(5);
    expect(blockScoping(2)).toBe(2);
    expect(blockScoping(10)).toBe(10);
  });
});

describe('constImmutable', () => {
  test('const object should have immutable properties', () => {
    expect(constImmutable()).toBe('initialPassword');
  });
});

describe('templateLiterals', () => {
  test('should return a string message', () => {
    expect(templateLiterals())
      .toBe('There are 4 people on the football team. Their names are Rooney, Ronaldo, Messi, Pogba.');
  });
});

describe('html', () => {
  test('', () => {
    expect(callTemplateTagFunction()).toBe('The expression  5 &amp;gt; 4  is &amp;quot;true&amp;quot; &amp;  3 &amp;lt; 1  is false');
  });
});
