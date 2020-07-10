// Assignment Code 
const password = generatePassword();

function randomLowercase() {
  const useLowercase = Math.floor((Math.random() * 26) + 97);
  const character = String.fromCharCode(useLowercase);
  return character;
}

function randomUppercase() {
  const useUppercase = Math.floor((Math.random() * 26) + 65);
  const character = String.fromCharCode(useUppercase);
  return character;
}

function randomSymbol() {
  const symbol = '!@#$%^&*(){}[]+<>,.'
  Math.floor(Math.random() * symbol.length);
  const character = symbol.toString();
  return character;

}

function randomNumericChar() {
  const useNumericChar = Math.floor(Math.random() * 10);
  const character = useNumericChar.toString();
  return character;
}

function generatePassword(lengthValidation, lowercase, uppercase, numeric, symbol) {

  const randomCharacters = [];
  let newPassword = '';
  if (lowercase) {
    randomCharacters.push(randomLowercase);
  }
  if (uppercase) {
    randomCharacters.push(randomUppercase);
  }
  if (numeric) {
    randomCharacters.push(randomNumericChar);
  }
  if (symbol) {
    randomCharacters.push(randomSymbol);
  }
  for (i = 0; i < lengthValidation; i++) {

    newPassword = newPassword + randomCharacters[Math.floor(Math.random() * randomCharacters.length)]();
    console.log(newPassword);
  }
  const randomPassword = (randomCharacters.join(''));
  return newPassword;
}

const button = document.getElementById('generate');
const textarea = document.getElementById('password');
button.addEventListener('click', function () {

  function writePassword() {
    const lengthOfPassword = parseInt(prompt('Password length must be between 8-128 characters. How many characters would you like your password to have?'));
    if (lengthOfPassword < 8 || lengthOfPassword > 128) {
      return writePassword();
    }

    return lengthOfPassword;
  }

  const num = writePassword();
  const lowercase = confirm('Click OK to confirm if you would like to include a lowercase character');
  const uppercase = confirm('Click OK to confirm if you would like to include an uppercase character');
  const numeric = confirm('Click OK to confirm if you would like to include a numeric character');
  const symbol = confirm('Click OK to confirm if you would like to include a symbols');
  const password = generatePassword(num, lowercase, uppercase, numeric, symbol);
  textarea.textContent = password;

}) 
