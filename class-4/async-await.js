let add = async function (x, y) {
  return new Promise((resolve, reject) => {
    let sum = x + y;
    if (sum) {
      resolve(sum);
    } else {
      reject("Can not add");
    }
  });
};

let sum = await add(5, 4);
console.log(sum);
