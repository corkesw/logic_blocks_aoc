const { number } = require("./data");

exports.captcha = (num) => {
  if (num < 10) return 0;
  let total = 0;
  const numberArray = num.split("");

  // to deal with checking that the first and latch match, add the first number onto the end of the array
  numberArray.push(numberArray[0]);
  for (let i = 0; i < numberArray.length; i++) {
    // at each index, if there is a match with the next index, add that number to the total
    if (numberArray[i] === numberArray[i + 1]) {
      total += +numberArray[i];
    }
  }
  return total;
};

console.log(exports.captcha(number));
