// document.querySelector('.convert').addEventListener('click', convert);
// document.querySelector('.reset').addEventListener('click', reset);
// document.querySelector('.swap').addEventListener('click', swap);

// function convert() {
//   // Get the input value and unit selections
//   const fromClass = document.getElementById('from-class').value;
//   const toClass = document.getElementById('to-class').value;
//   const input = parseFloat(document.querySelector('.decimal-input').value);
//   const resultInput = document.querySelector('.result-input');
//   const calculationInput = document.querySelector('.calculation-input');

//   if (isNaN(input)) {
//     alert('Please enter a valid number.');
//     return;
//   }

//   let result;

//   // Conversion logic
//   if (fromClass === toClass) {
//     result = input;
//   } else {
//     switch (fromClass) {
//       case '1': // Celsius
//         if (toClass === '2') { // Fahrenheit
//           result = (input * 9/5) + 32;
//         } else if (toClass === '3') { // Kelvin
//           result = input + 273.15;
//         }
//         break;
//       case '2': // Fahrenheit
//         if (toClass === '1') { // Celsius
//           result = (input - 32) * 5/9;
//         } else if (toClass === '3') { // Kelvin
//           result = (input - 32) * 5/9 + 273.15;
//         }
//         break;
//       case '3': // Kelvin
//         if (toClass === '1') { // Celsius
//           result = input - 273.15;
//         } else if (toClass === '2') { // Fahrenheit
//           result = (input - 273.15) * 9/5 + 32;
//         }
//         break;
//       default:
//         result = 'Invalid conversion';
//     }
//   }

//   // Update the result and calculation fields
//   resultInput.value = result.toFixed(2); // Display result with 2 decimal places
//   calculationInput.value = `${input} ${getUnitName(fromClass)} = ${result.toFixed(2)} ${getUnitName(toClass)}`;
// }

// function reset() {
//   document.querySelector('.decimal-input').value = '';
//   document.querySelector('.result-input').value = '';
//   document.querySelector('.calculation-input').value = '';
// }

// function swap() {
//   const fromClass = document.getElementById('from-class');
//   const toClass = document.getElementById('to-class');

//   // Swap values
//   const temp = fromClass.value;
//   fromClass.value = toClass.value;
//   toClass.value = temp;
  
//   // Optionally perform conversion after swapping
//   convert();
// }

// function getUnitName(value) {
//   switch (value) {
//     case '1': return 'Celsius';
//     case '2': return 'Fahrenheit';
//     case '3': return 'Kelvin';
//     default: return '';
//   }
// .{
//   console.log (of) mainly to around getElementById("addtion")
//   console.log mainly (To )
// }


function convert() {
  const fromClass = document.getElementById("from-class").value;
  const toClass = document.getElementById("to-class").value;
  const input = parseFloat(
    document.getElementById("temperature-input").value
  );
  const convertedOutput = document.getElementById("converted-output");
  const calculationOutput = document.getElementById("calculation-output");

  if (isNaN(input)) {
    alert("Please enter a valid temperature.");
    return;
  }

  let convertedTemp;
  let calculationText;

  // Temperature conversion logic
  if (fromClass === "Celsius") {
    if (toClass === "Fahrenheit") {
      convertedTemp = (input * 9) / 5 + 32;
      calculationText = `${input}°C = ${convertedTemp.toFixed(2)}°F`;
    } else if (toClass === "Kelvin") {
      convertedTemp = input + 273.15;
      calculationText = `${input}°C = ${convertedTemp.toFixed(2)}K`;
    } else {
      convertedTemp = input;
      calculationText = `${input}°C = ${convertedTemp.toFixed(2)}°C`;
    }
  } else if (fromClass === "Fahrenheit") {
    if (toClass === "Celsius") {
      convertedTemp = ((input - 32) * 5) / 9;
      calculationText = `${input}°F = ${convertedTemp.toFixed(2)}°C`;
    } else if (toClass === "Kelvin") {
      convertedTemp = ((input - 32) * 5) / 9 + 273.15;
      calculationText = `${input}°F = ${convertedTemp.toFixed(2)}K`;
    } else {
      convertedTemp = input;
      calculationText = `${input}°F = ${convertedTemp.toFixed(2)}°F`;
    }
  } else if (fromClass === "Kelvin") {
    if (toClass === "Celsius") {
      convertedTemp = input - 273.15;
      calculationText = `${input}K = ${convertedTemp.toFixed(2)}°C`;
    } else if (toClass === "Fahrenheit") {
      convertedTemp = ((input - 273.15) * 9) / 5 + 32;
      calculationText = `${input}K = ${convertedTemp.toFixed(2)}°F`;
    } else {
      convertedTemp = input;
      calculationText = `${input}K = ${convertedTemp.toFixed(2)}K`;
    }
  }

  convertedOutput.value = convertedTemp.toFixed(2); // Show converted temperature
  calculationOutput.value = calculationText; // Show calculation result
}

function reset() {
  document.getElementById("temperature-input").value = "";
  document.getElementById("converted-output").value = "";
  document.getElementById("calculation-output").value = "";
  document.getElementById("from-class").selectedIndex = 0;
  document.getElementById("to-class").selectedIndex = 0;
}

function swap() {
  const fromClass = document.getElementById("from-class");
  const toClass = document.getElementById("to-class");

  // Swap the selected options
  const temp = fromClass.value;
  fromClass.value = toClass.value;
  toClass.value = temp;
}
