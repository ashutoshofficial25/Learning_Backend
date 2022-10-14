const { basename } = require("path");

function Car(brandName, variant, manufactror) {
  this.brandName = basename;
  this.variant = variant;
  this.manufactror = manufactror;
}

let altroz = new Car("TATA", "Petrol", "2021");
let swift = new Car("Maruti", "Desel", "2020");
