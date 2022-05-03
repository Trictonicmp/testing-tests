
//Arrrange
const {strLen, reverseStr} = require('./main');


//Assert
test('length of: abcd , should return 4', () => {
  expect(strLen('abcd')).toBe(4);
});

test('length of empty should trow error', () => {
  expect(strLen('')).toBeUndefined();
});

test('lenght of string 12345678910 should throw error', () => {
  expect(strLen('12345678910')).toBeUndefined();
});

test('length of string 1234567890 should be 10', () => {
  expect(strLen('1234567890')).toBe(10);
});



//Assert
test('text abcd should return dcba', () => {
  expect(reverseStr('abcd')).toBe('dcba');
});


//Arrange
const Calculator = require('./Calculator.js');
let calculator = new Calculator();

describe('add', () => {
  test('5 + 3 sould be equal to 8', () => {
    expect(calculator.add(5,3)).toBe(8);
  });
  test('-5 + 4 sould be equal to -1', () => {
    expect(calculator.add(-5,4)).toBe(-1);
  });
  test('-5 + 8 sould be equal to 3', () => {
    expect(calculator.add(-5,8)).toBe(3);
  });
});

describe('substract', () => {
  test('5 - 3 sould be equal to 2', () => {
    expect(calculator.substract(5,3)).toBe(2);
  });
  test('-5 - 4 sould be equal to -9', () => {
    expect(calculator.substract(-5,4)).toBe(-9);
  });
  test('5 - 8 sould be equal to -3', () => {
    expect(calculator.substract(5,8)).toBe(-3);
  });
});

describe('divide', () => {
  test('5 / 3 sould be close to 1.66', () => {
    expect(calculator.divide(5,3)).toBeCloseTo(1.6666);
  });
  test('5 / 4 sould be close to 1.25', () => {
    expect(calculator.divide(5,4)).toBeCloseTo(1.25);
  });
  test('5 / -8 sould be close to -0.625', () => {
    expect(calculator.divide(5,-8)).toBe(-0.625);
  });
});


describe('multiply', () => {
  test('5 * 3 sould be equal to 15', () => {
    expect(calculator.multiply(5,3)).toBe(15);
  });
  test('5 * -4 sould be equal to -20', () => {
    expect(calculator.multiply(5,-4)).toBe(-20);
  });
  test('5 * 8 sould be equal to 40', () => {
    expect(calculator.multiply(5,8)).toBe(40);
  });
});