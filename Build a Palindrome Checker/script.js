function checkPalindrome() {
  const inputElement = document.getElementById("text-input");
  const resultElement = document.getElementById("result");

  const inputValue = inputElement.value.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (!inputValue) {
    alert("Please input a value");
    return;
  }

  const reversedValue = inputValue.split("").reverse().join("");

  if (inputValue === reversedValue) {
    resultElement.textContent = `${inputElement.value} is a palindrome`;
  } else {
    resultElement.textContent = `${inputElement.value} is not a palindrome`;
  }
}
