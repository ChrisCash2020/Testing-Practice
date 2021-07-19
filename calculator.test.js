const calculator = require('./calculator');
test('add 2 and 5 return 7', () => {
  expect(calculator.add(2, 5)).toBe(7);
});
test('subtact 5 and 2 return 3', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});
test('divide 10 and 5 returns 2', () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
