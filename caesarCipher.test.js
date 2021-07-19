const caesarCipher = require('./caesarCipher');
test('defend the east wall of the castle converts to efgfoe uif fbtu xbmm pg uif dbtumf', () => {
  expect(caesarCipher('defend the east wall of the castle')).toBe(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  );
});
