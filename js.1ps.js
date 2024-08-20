document.addEventListener("DOMContentLoaded", () => {
    const convertButton = document.querySelector('.convert');
    const resetButton = document.querySelector('.reset');
    const swapButton = document.querySelector('.swap');
    const decimalInput = document.querySelector('.decimal-input');
    const fromClass = document.getElementById('from-class');
    const toClass = document.getElementById('to-class');
    const resultInput = document.querySelector('.result-input');
    const calculationInput = document.querySelector('.calculation-input');

    // Conversion rates to meters
    const conversionRates = {
        meters: 1,
        kilometers: 0.001,
        miles: 0.000621371,
        feet: 3.28084,
        inches: 39.3701,
    };

    // Function to convert length from one unit to another
    function convertLength(value, fromUnit, toUnit) {
        // Convert the input value to meters
        const valueInMeters = value / conversionRates[fromUnit];
        // Convert meters to the desired output unit
        return valueInMeters * conversionRates[toUnit];
    }

    // Event listener for the convert button
    convertButton.addEventListener('click', () => {
        const value = parseFloat(decimalInput.value);
        const fromUnit = fromClass.options[fromClass.selectedIndex].text.toLowerCase();
        const toUnit = toClass.options[toClass.selectedIndex].text.toLowerCase();

        // Check if input is valid
        if (isNaN(value) || value < 0) {
            alert('Please enter a valid positive number for the length.');
            return;
        }

        if (!conversionRates[fromUnit] || !conversionRates[toUnit]) {
            alert('Please select valid units for conversion.');
            return;
        }

        // Perform the conversion
        const result = convertLength(value, fromUnit, toUnit);
        const calculation = `${value} ${fromUnit} = ${result.toFixed(6)} ${toUnit}`;

        // Update the result inputs
        resultInput.value = result.toFixed(6);
        calculationInput.value = calculation;
    });

    // Event listener for the reset button
    resetButton.addEventListener('click', () => {
        decimalInput.value = '';
        fromClass.selectedIndex = 0; // Reset the dropdown
        toClass.selectedIndex = 0; // Reset the dropdown
        resultInput.value = ''; // Clear result input
        calculationInput.value = ''; // Clear calculation input
    });

    // Event listener for the swap button
    swapButton.addEventListener('click', () => {
        const fromIndex = fromClass.selectedIndex;
        fromClass.selectedIndex = toClass.selectedIndex;
        toClass.selectedIndex = fromIndex;
    });
});
