/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

const laugh = (cnt) => {
  if (isNaN(cnt)) {
    return "Please input number";
  }
  let res = "";
  for (let i = 0; i < cnt; i++) {
    res += "ha";
  }
  res += "!";
  return res;
};

console.log(laugh(3));
