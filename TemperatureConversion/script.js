(function () {
    function ready() {
        var fahrenheitTemperature = document.querySelector(".fahrenheit-temperature");
        var kelvinTemperature = document.querySelector(".kelvin-temperature");
        var convertButton = document.querySelector(".convert-button");

        convertButton.addEventListener("click", function () {
            var celsiusTemperatureValue = document.querySelector(".celsius-temperature").value;

            if (celsiusTemperatureValue === '') {
                alert("The celsius temperature field is empty");

                return;
            }

            if (celsiusTemperatureValue < -273.15) {
                alert("The celsius temperature can't be less than -273.15");

                return;
            }

            fahrenheitTemperature.textContent = convertCelsiusToFahrenheit(celsiusTemperatureValue);
            kelvinTemperature.textContent = convertCelsiusToKelvin(celsiusTemperatureValue);
        });
    }

    function convertCelsiusToFahrenheit(celsius) {
        return Math.round(((celsius * 9 / 5) + 32) * 10) / 10;
    }

    function convertCelsiusToKelvin(celsius) {
        return Math.round((parseFloat(celsius) + 273.15) * 10) / 10;
    }

    document.addEventListener("DOMContentLoaded", ready);
}());