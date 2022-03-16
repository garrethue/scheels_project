function* range(min, max) {
  //use a generator function for performance (ie, not creating a huge array of numbers at one time)
  for (let i = min; i <= max; i++) {
    yield i;
  }
}

export default range;
