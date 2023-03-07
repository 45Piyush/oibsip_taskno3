
function fConvert() {
    // Taking Input From User
    var temperature = document.getElementById("temperature").value;
    var from = document.getElementById("from").value;
    console.log(temperature);
  
    // Converting Input Temperature to Kelvin
    if (from == "celsius") {
      var kelvin = temperature / 1 + 273.15;
    } else if (from == "fahrenheit") {
      var kelvin = (temperature - 32) * (5 / 9) + 273.15;
    } else {
      var kelvin = temperature;
    }
  
    // Convert Kelvin to Celsius & Fahrenheit
    var ansFar = (kelvin * 9) / 5 - 459.67;
    ansFar = ansFar.toFixed(2) + " °F";
  
    var ansCel = kelvin - 273.15;
    ansCel = ansCel.toFixed(2) + " °C";
  
    var ansKel = kelvin;
    ansKel = ansKel + " K";
  
    console.log(ansCel);
    console.log(ansFar);
    console.log(ansKel);
  
    // Displaying Result
    document.getElementById("resultC").value = ansCel;
    document.getElementById("resultF").value = ansFar;
    document.getElementById("resultK").value = ansKel;
  }