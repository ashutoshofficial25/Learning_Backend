function* powerOfThree() {
  yield 3;

  yield Math.pow(3, 3);

  let count = 1;
  while (true) {
    yield Math.pow(3, count);
    count++;
  }
}

let it = powerOfThree();

for (let i = 0; i < 11; i++) {
  console.log(it.next().value);
}
