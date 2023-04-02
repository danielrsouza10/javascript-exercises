const convertToCelsius = function (farenheit) {

  //Math.round(...*10)/10 to round to 1 decimal case
  let celciusResult = Math.round(5 * ((farenheit - 32) / 9) * 10) / 10;

  //could put all the formula in the return to calculate
  return celciusResult;
};

const convertToFahrenheit = function (celcius) {
 
  let farenheitResult = Math.round((celcius * (9 / 5) + 32) * 10) / 10;

  return farenheitResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
//c/5 = f-32/9