const { number } = require("./data");
//comment
exports.captcha = (num) => {
  if (num < 10) return 0;
  let total = 0;
  const numberArray = num.split("");
  // to deal with checking that the first and latch match, add the first number onto the end of the array
  numberArray.push(numberArray[0]);
  // compare each number with the next and add to total if they are the same
  numberArray.forEach((number, index) => {
    if (number === numberArray[index + 1]) total += +number;
  });

  return total;
};

console.log(exports.captcha(number));
