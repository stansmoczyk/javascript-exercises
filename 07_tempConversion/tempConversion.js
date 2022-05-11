const ftoc = function(...arr) {
let celsius = (arr - 32) / 1.8;
return Math.round(celsius * 10) /10; 
};

const ctof = function(...arr) {
let fehrenheit = (arr * 1.8) + 32;
return Math.round(fehrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
