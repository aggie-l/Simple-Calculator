const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2");
const warning = document.querySelector("span");
const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const divideBtn = document.querySelector(".divide-btn");
const multiplyBtn = document.querySelector(".multiply-btn");
const result = document.querySelector(".result");
let resultValue;

const validateNumber1 = () => {
  if (isNaN(input1.value)) {
    input1.classList.add("invalid");
    warning.innerText = "Please enter a valid number";
    warning.style.color = "#dc143c";
    return;
  } else if (!isNaN(input1.value)) {
    input1.classList.remove("invalid");
    warning.innerText = "";
  }
};

const validateNumber2 = () => {
  if (isNaN(input2.value)) {
    input2.classList.add("invalid");
    warning.innerText = "Please enter a valid number";
    warning.style.color = "#dc143c";
  } else if (!isNaN(input2.value)) {
    input2.classList.remove("invalid");
    warning.innerText = "";
  }
};

const calculateResult = (e) => {
  const number1 = parseFloat(input1.value);
  const number2 = parseFloat(input2.value);

  if (e.target === plusBtn) {
    resultValue = number1 + number2;
  } else if (e.target === minusBtn) {
    resultValue = number1 - number2;
  } else if (e.target === divideBtn) {
    resultValue = number1 / number2;
  } else if (e.target === multiplyBtn) {
    resultValue = number1 * number2;
  }
  result.innerText = resultValue;
};

input1.addEventListener("keyup", validateNumber1);
input2.addEventListener("keyup", validateNumber2);

plusBtn.addEventListener("click", calculateResult);
minusBtn.addEventListener("click", calculateResult);
divideBtn.addEventListener("click", calculateResult);
multiplyBtn.addEventListener("click", calculateResult);