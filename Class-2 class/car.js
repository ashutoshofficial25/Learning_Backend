//way of creating objects
const altroz = {};

altroz.brandName = "tata";
altroz.variant = "petrol";
altroz["manufactror"] = "2021";

// 2nd way

let swift = new Object();
swift.brandName = "suzuki";
swift.variant = "petrol";
swift["manufactror"] = "2021";

let tesla = {
  brandName: "tesla",
  variant: "electric",
  manufactror: "2023",
  start: function () {
    console.log("Engine Started");
  },
};
