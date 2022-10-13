//Assignment-1 Question-2

//
const timer = () => {
  setTimeout(() => {
    console.log("Timeout");
  }, 10000);
};

timer();

const interval = setInterval(() => {
  for (let i = 0; i < 11; i++) {
    console.log(i);
  }
  clearInterval(interval);
}, 5000);
