var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
// Array of numeric characters to be included in password
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var finalPassword= [];
var password = generatePassword();
var passwordText = document.querySelector("#password");

function generatePassword() {
  var possibleCharacters = [];
  var passwordLength = parseInt(prompt("Enter length of password"));
  // If the user enters a non-integer
  if (isNaN(passwordLength)) {
    alert("You must enter a number!");
    return;
    // if the user enters a number under 8
  } else if (passwordLength < 8) {
    alert("Your password must have a minimum of 8 characters!");
    return;
    // if the user enters a number over 128
  } else if (passwordLength > 128) {
    alert("Your password must have a maximum of 128 characters!");
    return;
  }
  console.log(passwordLength);

  var containsSpecialCharacters = confirm("Click OK to confirm special characters in your password");
  console.log(containsSpecialCharacters);

  var containsNumberCharacters = confirm("Click OK to confirm including numeric characters");
  console.log(containsNumberCharacters);

  var containsUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters");
  console.log(containsUpperCasedCharacters);

  var containsLowerCasedCharacters = confirm("Click OK to confirm including lower characters");
  console.log(containsLowerCasedCharacters);

  if (containsSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    console.log(possibleCharacters);
  }
  if (containsNumberCharacters) {
    possibleCharacters = possibleCharacters.concat(numberCharacters);
    console.log(possibleCharacters);
  }
  if (containsUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    console.log(possibleCharacters);
  }
  if (containsLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    console.log(possibleCharacters);
  }

  for (let i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * (possibleCharacters.length));
    const element = array[i];
    var chosenkeys = possibleCharacters[random];
    finalPassword.push(chosenkeys);
  }
  console.log(generatePassword)
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page