/*
- build a program that prints the numberbers from 1 to 100 on separate lines. 
DONE    - For numberbers that are a multiple of 3 instead print "SCHEELS". 
DONE    - For numbers that are multiples of 5 print ".COM". 
DONE    - For numbers that are multiples of both 3 and 5, print "SCHEELS.COM"
Assume that the text may need to be changed. For example ".COM" could be changed to ".ORG" at some point 
- and we wouldn't want to change every instance of the text. 

- It's also possible that the range of numbers (both min and max) could need to be changed at some point as well.

The program should run by clicking a button labeled "Run", and the results cleared when the user clicks a button labeled "Reset".
*/
const fizzBuzz = (number, domainName, topLevelDomain) => {
  if (number % 5 === 0 && number % 3 === 0) {
    return domainName + topLevelDomain;
  } else if (number % 5 === 0) {
    return topLevelDomain;
  } else if (number % 3 === 0) {
    return domainName;
  } else {
    return number;
  }
};

module.exports = fizzBuzz;
