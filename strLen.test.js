
//Arrrange
const strLen = require('./main');


//Assert
test('return the string length', () => {
  expect(strLen('abcd')).toBe(4);
});