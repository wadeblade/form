
const block = document.querySelector(".block");
const btnSubmit = document.querySelector("#submit");

const input = document.querySelector("#input");
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");

btnSubmit.addEventListener("click", () => {
    mainFuction();
});

let value = []; 

function displayValueFromInput(block, myFunc) {
  value.push(myFunc(input.value));

  block.innerHTML = value;
}

function displayValueFromInputEmail(block, myFunc) {
  value.push(myFunc(inputEmail.value));

  block.innerHTML = value;
}

function displayValueFromInputPassword(block, myFunc) {
  value.push(myFunc(inputPassword.value));

  block.innerHTML = value;
}

function fixedValue(string) {
  return string.trim().toLowerCase();
}

function mainFuction () {
    displayValueFromInput(block, fixedValue);
    displayValueFromInputEmail(block, fixedValue);
    displayValueFromInputPassword(block, fixedValue);
}