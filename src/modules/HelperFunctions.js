/*
- build a program that prints the numberbers from 1 to 100 on separate lines. 
DONE    - For numberbers that are a multiple of 3 instead print "SCHEELS". 
DONE    - For numbers that are multiples of 5 print ".COM". 
DONE    - For numbers that are multiples of both 3 and 5, print "SCHEELS.COM"

NOT DONE: Assume that the text may need to be changed. For example ".COM" could be changed to ".ORG" at some point 
- and we wouldn't want to change every instance of the text. 

ALMOST DONE??? - It's also possible that the range of numbers (both min and max) could need to be changed at some point as well.

DONE - The program should run by clicking a button labeled "Run", and the results cleared when the user clicks a button labeled "Reset".
*/
function fizzBuzz(number, name = "SCHEELS", domain = ".COM") {
  if (number % 5 === 0 && number % 3 === 0) {
    return name + domain;
  } else if (number % 5 === 0) {
    return domain;
  } else if (number % 3 === 0) {
    return name;
  } else {
    return number;
  }
}

function* range(min, max) {
  //use a generator function for performance (ie, not creating a huge array of numbers at one time)
  for (let i = min; i <= max; i++) {
    yield i;
  }
}

module.exports.fizzBuzz = fizzBuzz;
module.exports.range = range;
