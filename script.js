// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  prompt('Enter your password (between 8 and 128 characters):');


if ( length < 8 || length > 128) {
  alert('Please enter a valid number between 8 and 128.');
  return;
}
var includeLower = confirm('Include lowercase characters?');
var includeUpper = confirm('Include uppercase characters?');
var includeNumeric = confirm('Include numeric characters?');
var includeSpecial = confirm('Include special characters?');

if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
  alert('At least one character type must be selected.');
  return;
}

return {
  length: length,
  includeLower: includeLower,
  includeUpper: includeUpper,
  includeNumeric: includeNumeric,
  includeSpecial: includeSpecial
};
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
    return;
  }

 

  if (options.includeLower) {
    allCharacters = allCharacters+lowerCasedCharacters;
  }
  if (options.includeUpper) {
    allCharacters = allCharacters+upperCasedCharacters;
  }
  if (options.includeNumeric) {
    allCharacters = allCharacters+numericCharacters;
  }
  if (options.includeSpecial) {
    allCharacters = allCharacters+specialCharacters;
  }

  for (var i = 0; i < options.length; i++) {
    password;
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);