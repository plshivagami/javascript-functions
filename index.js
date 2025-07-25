function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function describedTemperature(celsius) {
  if (celsius < 0) {
    return "Very Cold";
  } else if (celsius < 20) {
    return "Cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "Hot";
  } else if (celsius >= 40) {
    return "Very hot";
  }
}

console.log(
  `Describe Temperate of provided Celcius value: ` + describedTemperature(12)
);
let farenheit = prompt("Enter a temperature value in Farenheit");

var celsius = convertToCelsius(farenheit);
var howItFeels = describedTemperature(celsius);
alert(`Celsius value is ${celsius}. Its is ${howItFeels}`);
