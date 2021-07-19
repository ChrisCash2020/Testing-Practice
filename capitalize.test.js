const capitalize = require('./capitalize');
test('capitalize shawn to Shawn', () => {
  expect(capitalize('shawn')).toBe('Shawn');
});
