document.getElementById("convert-btn").addEventListener("click", function () {
  convertToRoman();
});

function convertToRoman() {
  var inputNumber = document.getElementById("number").value;
  var outputElement = document.getElementById("output");

  if (inputNumber === "") {
    outputElement.textContent = "Please enter a valid number";
  } else {
    var num = parseInt(inputNumber, 10);

    if (isNaN(num) || num < 1) {
      outputElement.textContent = "Please enter a number greater than or equal to 1";
    } else if (num >= 4000) {
      outputElement.textContent = "Please enter a number less than or equal to 3999";
    } else {
      outputElement.textContent = intToRoman(num);
    }
  }
}

function intToRoman(num) {
  var romanNumeral = "";
  var romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  var romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  for (var i = 0; i < romanValues.length; i++) {
    while (num >= romanValues[i]) {
      romanNumeral += romanSymbols[i];
      num -= romanValues[i];
    }
  }

  return romanNumeral;
}
