module.exports = function reverse (n) {
  let ReversedNum = (n + "").split("");;
  if (ReversedNum[0] === '-'){
    return ReversedNum.slice(1).reverse().join("") * 1;
  }
  else{
    return n.toString().split("").reverse().join("");
  }
}
