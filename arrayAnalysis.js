function analyze(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let length = arr.length;
  let average = arr.reduce((a, c) => a + c) / length;
  return { average, min, max, length };
}
module.exports = analyze;
console.log(analyze([1, 8, 3, 4, 2, 6]));
