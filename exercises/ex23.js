/*
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

Write a loop under each comment in the file.
Under the first, write a while loop that prints out each item of ingredients.
Under the second, write a for loop that does the same thing.
And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
*/
const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];
const len = ingredients.length;
let i = 0;
console.log("----------while----------");
while (i < len) {
  console.log(ingredients[i]);
  i++;
}

console.log("----------for----------");
for (let j = 0; j < len; j++) {
  console.log(ingredients[j]);
}

let k = len - 1;
console.log("----------reverse while----------");
while (k >= 0) {
  console.log(ingredients[k]);
  k--;
}
