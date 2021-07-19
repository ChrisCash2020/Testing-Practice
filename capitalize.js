function capitalize(str) {
  str = str.split('');
  let cap = str.shift().toUpperCase();
  str.unshift(cap);
  return str.join('');
}
module.exports = capitalize;
