//pausable function.
function* getPrices() {
  yield "65464";
  yield "2000";
}
let it = getPrices();
console.log(it.next());
console.log(it.next());
