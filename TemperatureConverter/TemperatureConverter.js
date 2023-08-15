document.addEventListener("DOMContentLoaded", function() {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const convertBtn = document.getElementById("convertBtn");
    const resultCard = document.getElementById("resultCard");

    convertBtn.addEventListener("click", function() {
        const temperature = parseFloat(temperatureInput.value);
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;
        const convertedTemperature = convertTemperature(temperature, fromUnit, toUnit);

        resultCard.innerHTML = `
            <h2>Converted Temperature</h2>
            <p>${convertedTemperature.toFixed(2)} ${toUnit}</p>
        `;
    });

    function convertTemperature(temp, fromUnit, toUnit) {
        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            return (temp * 9/5) + 32;
        } else if (fromUnit === "celsius" && toUnit === "kelvin") {
            return temp + 273.15;
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            return (temp - 32) * 5/9;
        } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
            return (temp - 32) * 5/9 + 273.15;
        } else if (fromUnit === "kelvin" && toUnit === "celsius") {
            return temp - 273.15;
        } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
            return (temp - 273.15) * 9/5 + 32;
        }
        return temp; // No conversion needed
    }
});
