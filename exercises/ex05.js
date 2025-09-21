/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/

let size = "N/A";

const width = 23;
const length = 30;
const sleeve = 8.71;

if (
  18 <= width &&
  width < 20 &&
  28 <= length &&
  length < 29 &&
  8.13 <= sleeve &&
  sleeve < 8.38
) {
  size = "S";
} else if (
  20 <= width &&
  width < 22 &&
  29 <= length &&
  length < 30 &&
  8.38 <= sleeve &&
  sleeve < 8.63
) {
  size = "M";
} else if (
  22 <= width &&
  width < 24 &&
  30 <= length &&
  length < 31 &&
  8.63 <= sleeve &&
  sleeve < 8.88
) {
  size = "L";
} else if (
  24 <= width &&
  width < 26 &&
  31 <= length &&
  length < 33 &&
  8.88 <= sleeve &&
  sleeve < 9.63
) {
  size = "XL";
} else if (
  26 <= width &&
  width < 28 &&
  33 <= length &&
  length < 34 &&
  9.63 <= sleeve &&
  sleeve < 10.13
) {
  size = "2XL";
} else if (28 <= width && 34 <= length && 10.13 <= sleeve) {
  size = "3XL";
}

console.log(size);
