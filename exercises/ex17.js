/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

const laugh = (cnt) => {
  if (isNaN(cnt)) {
    return "Please input number";
  }
  return "ha".repeat(cnt) + "!";
};

console.log(laugh(5));
