// document.addEventListener("DOMContentLoaded", () => {
//   const convertButton = document.querySelector('.convert');
//   const resetButton = document.querySelector('.reset');
//   const swapButton = document.querySelector('.swap');
//   const decimalInput = document.querySelector('.decimal-input');
//   const fromClass = document.getElementById('from-class');
//   const toClass = document.getElementById('to-class');
//   const resultInput = document.querySelector('.result-input');
//   const calculationInput = document.querySelector('.calculation-input');

//   // Conversion rates to kilograms
//   const conversionRates = {
//       kilograms: 1,
//       pounds: 2.20462,
//       grams: 1000,
//       ounces: 35.274,
//   };

//   // Function to convert weight from one unit to another
//   function convertWeight(value, fromUnit, toUnit) {
//       // Convert the input value to kilograms
//       const valueInKilograms = value / conversionRates[fromUnit];
//       // Convert kilograms to the desired output unit
//       return valueInKilograms * conversionRates[toUnit];
//   }

//   // Event listener for the convert button
//   convertButton.addEventListener('click', () => {
//       const value = parseFloat(decimalInput.value);
//       const fromUnitText = fromClass.options[fromClass.selectedIndex].text;
//       const toUnitText = toClass.options[toClass.selectedIndex].text;
      
//       // Map dropdown texts to conversion rates
//       const fromUnit = fromUnitText.toLowerCase();
//       const toUnit = toUnitText.toLowerCase();

//       // Validate input and selected units
//       if (isNaN(value) || value < 0) {
//           alert('Please enter a valid positive number for the weight.');
//           return;
//       }

//       if (!conversionRates[fromUnit] || !conversionRates[toUnit]) {
//           alert('Please select valid units for conversion.');
//           return;
//       }

//       // Perform the conversion
//       const result = convertWeight(value, fromUnit, toUnit);
//       const calculation = `${value} ${fromUnitText} = ${result.toFixed(6)} ${toUnitText}`;

//       // Update the result inputs
//       resultInput.value = result.toFixed(6);
//       calculationInput.value = calculation;
//   });

//   // Event listener for the reset button
//   resetButton.addEventListener('click', () => {
//       decimalInput.value = '';
//       fromClass.selectedIndex = 0; // Reset the dropdown
//       toClass.selectedIndex = 0; // Reset the dropdown
//       resultInput.value = ''; // Clear result input
//       calculationInput.value = ''; // Clear calculation input
//   });

//   // Event listener for the swap button
//   swapButton.addEventListener('click', () => {
//       const fromIndex = fromClass.selectedIndex;
//       fromClass.selectedIndex = toClass.selectedIndex;
//       toClass.selectedIndex = fromIndex;
//   });
// });


// JavaScript Code: js.2ps.js

function convert() {
    // Get input value
    const decimalInput = parseFloat(document.getElementById('decimal-input').value);
    if (isNaN(decimalInput)) {
        alert('Please enter a valid number.');
        return;
    }

    // Get selected units
    const fromClass = parseInt(document.getElementById('from-class').value);
    const toClass = parseInt(document.getElementById('to-class').value);

    // Conversion factors
    const conversionRates = {
        kg: 1,
        lb: 2.20462,
        g: 1000,
        oz: 35.274
    };

    let valueInKg;

    // Convert input value to kilograms
    switch (fromClass) {
        case 1: // kilograms
            valueInKg = decimalInput;
            break;
        case 2: // pounds
            valueInKg = decimalInput / conversionRates.lb;
            break;
        case 3: // grams
            valueInKg = decimalInput / conversionRates.g;
            break;
        case 4: // ounces
            valueInKg = decimalInput / conversionRates.oz;
            break;
        default:
            alert('Invalid "from" unit selected.');
            return;
    }

    let result;

    // Convert kilograms to the target unit
    switch (toClass) {
        case 1: // kilograms
            result = valueInKg;
            break;
        case 2: // pounds
            result = valueInKg * conversionRates.lb;
            break;
        case 3: // grams
            result = valueInKg * conversionRates.g;
            break;
        case 4: // ounces
            result = valueInKg * conversionRates.oz;
            break;
        default:
            alert('Invalid "to" unit selected.');
            return;
    }

    // Display result
    document.getElementById('calculation-output').value = result.toFixed(2);
}

function reset() {
    document.getElementById('decimal-input').value = '';
    document.getElementById('calculation-output').value = '';
    document.getElementById('octal-output').value = '';
}

function swap() {
    // Swap "from" and "to" select options
    const fromSelect = document.getElementById('from-class');
    const toSelect = document.getElementById('to-class');

    const fromValue = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = fromValue;

    // Optionally, clear the input and output fields
    reset();
}
