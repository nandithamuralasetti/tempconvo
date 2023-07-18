function convertCelsius() {
    var celsiusInput = document.getElementById("celsius").value;
    if (celsiusInput === "") {
      alert("Please enter a temperature in Celsius");
      return;
    }
    
    var celsius = parseFloat(celsiusInput);
    var fahrenheit = celsius * 9/5 + 32;
    var kelvin = celsius + 273.15;
    
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("kelvin").value = kelvin.toFixed(2);
    document.getElementById("result").innerText = celsius + " Celsius = " + fahrenheit.toFixed(2) + " Fahrenheit = " + kelvin.toFixed(2) + " Kelvin";
  }
  
  function convertFahrenheit() {
    var fahrenheitInput = document.getElementById("fahrenheit").value;
    if (fahrenheitInput === "") {
      alert("Please enter a temperature in Fahrenheit");
      return;
    }
    
    var fahrenheit = parseFloat(fahrenheitInput);
    var celsius = (fahrenheit - 32) * 5/9;
    var kelvin = (fahrenheit + 459.67) * 5/9;
    
    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("kelvin").value = kelvin.toFixed(2);
    document.getElementById("result").innerText = fahrenheit + " Fahrenheit = " + celsius.toFixed(2) + " Celsius = " + kelvin.toFixed(2) + " Kelvin";
  }
  
  function convertKelvin() {
    var kelvinInput = document.getElementById("kelvin").value;
    if (kelvinInput === "") {
      alert("Please enter a temperature in Kelvin");
      return;
    }
    
    var kelvin = parseFloat(kelvinInput);
    var celsius = kelvin - 273.15;
    var fahrenheit = kelvin * 9/5 - 459.67;
    
    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("result").innerText = kelvin + " Kelvin = " + celsius.toFixed(2) + " Celsius = " + fahrenheit.toFixed(2) + " Fahrenheit";
  }
  