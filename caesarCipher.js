function caesarCipher(str) {
  str = str.split('');
  newStr = '';
  let arry = [];
  str.forEach((letter) => {
    if (letter.charCodeAt() === 32) {
      arry.push(letter);
    } else {
      arry.push(letter.charCodeAt() + 1);
    }
  });
  arry.forEach((num) => {
    if (typeof num === 'number') {
      num = String.fromCharCode(num);
    }
    newStr += num;
  });
  return newStr;
}
module.exports = caesarCipher;
