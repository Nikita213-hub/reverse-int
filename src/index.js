module.exports = function reverse (n) {
  let array = n.toString().split("");
  let ArrReversed = array.reverse().join("");
  if (n < 0){
      return ArrReversed * (-1);
  }
  return ArrReversed
}
