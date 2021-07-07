module.exports = function reverse (n) {
  let array = n.toString().split("");
  let ArrReversed = array.reverse().join("");
  if (n < 0){
      ArrReversed = ArrReversed * (-1);
  }
  return ArrReversed
}
