/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function emotions(cnt, str, callback) {
  if (isNaN(cnt)) {
    console.log("Please input number");
    return;
  }
  console.log(`I am ${str}, ${callback(cnt)}`);
}

emotions(5, "happy", (cnt) => {
  let res = "";
  for (let i = 0; i < cnt; i++) {
    res += "ha";
  }
  res += "!";
  return res;
});
