const analyze = require('./arrayAnalysis');
let object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};
test('the array should return object with fields', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toMatchObject(object);
});
