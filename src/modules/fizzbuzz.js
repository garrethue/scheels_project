/*
- build a program that prints the numbers from 1 to 100 on separate lines. 
- For numbers that are a multiple of 3 instead print "SCHEELS". 
- For numbers that are multiples of 5 print ".COM". 
- For numbers that are multiples of both 3 and 5, print "SCHEELS.COM"
Assume that the text may need to be changed. For example ".COM" could be changed to ".ORG" at some point 
- and we wouldn't want to change every instance of the text. 

- It's also possible that the range of numbers (both min and max) could need to be changed at some point as well.

The program should run by clicking a button labeled "Run", and the results cleared when the user clicks a button labeled "Reset".
*/
const fizzBuzz = (num) => {
  if (num % 5 === 0 && num % 3 === 0) {
    return "SCHEELS.COM";
  } else if (num % 5 === 0) {
    return ".COM";
  } else if (num % 3 === 0) {
    return "SCHEELS";
  } else {
    return num;
  }
};

module.exports = fizzBuzz;
