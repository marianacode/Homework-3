// Assignment Code + Event Listener

document.querySelector('#generate').addEventListener('click', writePassword);

// Arrays
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*','(',')', '{', '}','[', ']', '+', '<','>', '?','.'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Variables
var confirmLenght = '';
var confirmNumber;
var confirmSpecialCharacter;
var confirmLowerCase;
var confirmUpperCase;
var writePassword;

// Prompt
function generatePassword() {
  var confirmLenght = (prompt('How many characters would you like your passwird to have?'));

  while(confirmLenght <= 7 || confirmLenght >= 129) {
    alert('Password length must be between 8-128 characters');
    var confirmLenght = (prompt('How many characters would you like your password to have?'));
  }

  alert('Your password will have ${confirmLength} characters');

  // Password Parameters 
  var confirmNumber = confirm('Click OK to confirm if you would like to include numeric characters');
  var confirmSpecialCharacter = confirm('Click OK to confirm if you would like to include special characters');
  var confirmLowerCase = confirm('Click OK to confirm if you would like to include lowercase characters');
  var confirmUpperCase = confirm('Click OK to confirm if you would like to include uppercase characters');
    
    while(confirmNumber === false && confirmSpecialCharacter === false && confirmLowerCase === false && confirmUpperCase === false) {
      alert('You must choose at least one parameter');

      var confirmNumber = confirm('Click OK to confirm if you would like to include a numeric character');
      var confirmSpecialCharacter = confirm('Click OK to confirm if you would like to include a special character');
      var confirmLowerCase = confirm('Click OK to confirm if you would like to include a lowercase character');
      var confirmUpperCase = confirm('Click OK to confirm if you would like to include a uppercase character');
    }

    var passwordCharacters = []

    if (confirmNumber) {
      passwordCharacters = passwordCharacters.concat(number)
    }

    if (confirmSpecialCharacter){
      passwordCharacters = passwordCharacters.concat(specialCharacter)
    }

   
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerCase)
    }

    
    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperCase)
    }

    console.log(passwordCharacters);


    var randomPassword = ''

    for (var i = 0; i < confirmLenght; i++) {
      randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]; 
      console.log(randomPassword);
    }
    return randomPassword;


  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password)');

    passwordText.value = password;
  }
} 
  



