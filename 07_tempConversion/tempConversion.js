const convertToCelsius = function(f_temperature) {
  if (isNaN(f_temperature)) {
    return "ERROR"
  }
  let celsius = ((f_temperature - 32) * 5) / 9
  celsius = celsius.toFixed(1)
  return celsius

};

const convertToFahrenheit = function(c_temperature) {
  if (isNaN(c_temperature)) {
    return "ERROR"
  }
  let fahrenheit = (c_temperature * 9/5) + 32
  fahrenheit = fahrenheit.toFixed(1)
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
