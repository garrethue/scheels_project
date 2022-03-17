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

export default fizzBuzz;
