module.exports = function reverse (n) {
  let array = n.toString().split("");
  let ArrReversed = array.reverse().join("");
  return ArrReversed
}
