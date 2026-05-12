const convertToCelsius = function(numberC) {
  //Take input of F number
  //Convert to C using formula
  //return
  let celsius = ((numberC - 32) * 5 / 9);
  return Math.ceil(celsius * 10) / 10;
};

const convertToFahrenheit = function(numberF) {
  //Take input of C number
  let farenheit = ((numberF * 9 / 5 + 32));
  return Math.ceil(farenheit * 10) / 10;
};

convertToCelsius(32);
convertToFahrenheit(0);



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
