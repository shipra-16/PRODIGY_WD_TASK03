const resultInput = document.getElementById('result');

// Append a value to the result input field
function appendToResult(value) {
  resultInput.value += value;
}

// Clear the result input field
function clearResult() {
  resultInput.value = '';
}

// Calculate the result
function calculate() {
  try {
    const expression = resultInput.value;
    const result = eval(expression);
    resultInput.value = result;
  } catch (error) {
    resultInput.value = 'Error';
  }
}
