// Variables pour la calculatrice
var operator = '';
var firstNumber = '';
var secondNumber = '';

// Fonction pour ajouter du texte à l'écran de la calculatrice
function addToScreen(text) {
  $('#result').val($('#result').val() + text);
}

// Fonction pour effacer l'écran de la calculatrice
function clearScreen() {
  $('#result').val('');
  operator = '';
  firstNumber = '';
  secondNumber = '';
}

// Fonction pour ajouter un opérateur à la calculatrice
function addOperator(op) {
  if (operator === '') {
    firstNumber = $('#result').val();
    operator = op;
    $('#result').val('');
  } else {
    calculate();
    operator = op;
  }
}

// Fonction pour calculer le résultat
function calculate() {
  secondNumber = $('#result').val();
  var result = 0;

  switch (operator) {
    case '+':
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case '-':
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case '*':
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case '/':
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    default:
      break;
  }

  $('#result').val(result.toFixed(2));
  operator = '';
  firstNumber = result;
  secondNumber = '';
}
