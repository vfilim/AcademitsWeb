(function (){
    function ready(){
        var fahrenheitTemperature = document.querySelector("span.fahrenheit-temperature");
        var kelvinTemperature = document.querySelector("span.kelvin-temperature");
        var convertButton = document.querySelector("button.convert-button");

        console.log(fahrenheitTemperature);

        convertButton.addEventListener("click", function (e){
            var celsiusTemperatureValue = document.querySelector("input.celsius-temperature").value;

            if (celsiusTemperatureValue < -273.15){
                alert("The celsius temperature can't be less than -273.15");

                return;
            }

            fahrenheitTemperature.textContent = convertCelsiusToFahrenheit(celsiusTemperatureValue);
            kelvinTemperature.textContent = convertCelsiusToKelvin(celsiusTemperatureValue);
        });
    }

    function convertCelsiusToFahrenheit(celsius){
        return (celsius * 9 / 5) + 32;
    }

    function convertCelsiusToKelvin(celsius){
        return celsius + 273.15;
    }

    document.addEventListener("DOMContentLoaded", ready);
}());