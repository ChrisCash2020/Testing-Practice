function reverseString(str) {
  str = str.split('');
  let newStr = [];
  str.forEach((letter) => {
    newStr.unshift(letter);
  });
  return newStr.join('');
}
module.exports = reverseString;
