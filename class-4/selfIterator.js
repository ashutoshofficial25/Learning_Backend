const multipleOfTen = (start = 0, end = 100, steps = 1) => {
  let multiples = 1;
  let nextIndex = 0;
  let result = 0;
  return {
    next: function () {
      if (nextIndex < 1) {
        result = result + multiples * 10;
        nextIndex += steps;

        return {
          value: result,
          done: false,
        };
      } else {
        return {
          value: result,
          done: false,
        };
      }
    },
  };
};

const multiple = multipleOfTen(0, 5, 1);
console.log(multiple.next());
