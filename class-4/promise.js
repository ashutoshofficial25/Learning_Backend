// let promise = new Promise( (function resolve(){

// },function rejected(){} => {

// })
let promise2 = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve(12032);
  // }, 2000);
  setTimeout(() => {
    reject("Error happens");
  }, 2000);
});

promise2
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("I will be prented irrespectiv of resolve and reject");
  });

let add = (x, y) => {
  return new Promise((resolve, reject) => {
    let sum = x + y;
    if (sum) {
      resolve(sum);
    } else {
      reject("Can not add");
    }
  });
};

add(4, 5)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("First Promise");
  });
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Second Promise");
  });
});

let promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Third Promise");
  });
});
//promise.race  for any one to be success
//promise.all everyone should be resolved
Promise.all([promise3, promise4, promise5])
  .then((data) => {
    console.log(data);
  })
  .then((err) => {
    console.log(err);
  });
