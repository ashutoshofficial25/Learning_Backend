let filter = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    callback();
  }
};

let arr = [2, 4, 5, 7, null];
let onlyNull = (filter = (arr, callback) => {
  if (item == null) {
    return item != null;
  }
});
