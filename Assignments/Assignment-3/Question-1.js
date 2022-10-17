//Question-1: Program to demonstrate callback hell..

//Callback hell is essensialy nested callbacks stacks below one another
//forming a pyramid structure. Every callback wait/depend for another callback.

const foo = (cb) => {
  setTimeout(() => {
    cb();
    setTimeout(() => {
      console.log("cb-2");
      setTimeout(() => {
        cb();
      }, 3000);
    }, 2000);
  }, 1000);
};

const cb = () => {
  console.log("call-back hell");
};

foo(cb);
