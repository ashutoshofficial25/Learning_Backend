function performOperation() {}

function square(item) {
  return item * item;
}

function divideby5(item) {
  return item / 5;
}

function squareRoot(item) {
  return Math.sqrt(item);
}

let array = [2, 4, 8, 5, 1];

let arr = [5, 25, 65, 45, 55, 10];

//Square
console.log(array.map(square));
//Divide
console.log(arr.map(divideby5));
//sQuare
console.log(array.map(squareRoot));
