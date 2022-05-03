
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