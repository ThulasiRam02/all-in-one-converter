function convert() {
  const fromClass = document.getElementById('from-class').value;
  const toClass = document.getElementById('to-class').value;
  const input = parseFloat(document.getElementById('volume-input').value);
  const resultInput = document.getElementById('converted-output');
  const calculationInput = document.getElementById('calculation-output');

  let result;

  // Check for valid input
  if (isNaN(input)) {
    alert('Please enter a valid number.');
    return;
  }

  // Conversion logic
  if (fromClass === toClass) {
    result = input; // Same unit
  } else {
    switch (fromClass) {
      case '1': // Liters
        if (toClass === '2') result = input * 1000; // Milliliters
        else if (toClass === '3') result = input * 0.264172; // Gallons
        else if (toClass === '4') result = input * 4.22675; // Cups
        break;
      case '2': // Milliliters
        if (toClass === '1') result = input / 1000; // Liters
        else if (toClass === '3') result = input * 0.000264172; // Gallons
        else if (toClass === '4') result = input * 0.00422675; // Cups
        break;
      case '3': // Gallons
        if (toClass === '1') result = input / 0.264172; // Liters
        else if (toClass === '2') result = input / 0.000264172; // Milliliters
        else if (toClass === '4') result = input * 16; // Cups
        break;
      case '4': // Cups
        if (toClass === '1') result = input / 4.22675; // Liters
        else if (toClass === '2') result = input / 0.00422675; // Milliliters
        else if (toClass === '3') result = input / 16; // Gallons
        break;
      default:
        alert('Invalid conversion selection.');
        return;
    }
  }

  // Update the result and calculation fields
  if (result !== undefined) {
    resultInput.value = result.toFixed(2); // Display result with 2 decimal places
    calculationInput.value = `${input} ${getUnitName(fromClass)} = ${result.toFixed(2)} ${getUnitName(toClass)}`;
  }
}

function reset() {
  document.getElementById('volume-input').value = '';
  document.getElementById('converted-output').value = '';
  document.getElementById('calculation-output').value = '';
}

function swap() {
  const fromClass = document.getElementById('from-class');
  const toClass = document.getElementById('to-class');

  // Swap values
  const temp = fromClass.value;
  fromClass.value = toClass.value;
  toClass.value = temp;

  // Perform conversion after swapping
  convert();
}

function getUnitName(classId) {
  switch (classId) {
    case '1': return 'Liters';
    case '2': return 'Milliliters';
    case '3': return 'Gallons';
    case '4': return 'Cups';
    default: return '';
  }
}
