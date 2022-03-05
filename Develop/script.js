// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Created a function that will randomize contents of an array
function shuffle(array) {
  var h = array.length,
  j,
  i;
  while (h) {
    i = Math.floor(Math.random() * h--);
    j = array[h];
    array[i] = j;
  }
  return array;
}

  //  function to create random integar
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  //  lowercase, uppercase, special characters

  var lowerCase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  var upperCase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = [
      '`',
      '~',
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '-',
      '_',
      '+',
      '=',
      '[',
      ']',
      '{',
      '}',
      '|',
      ';',
      ':',
      "'",
      '.',
      '<',
      '>',
      '?',
      '/',

  ];


// define generate password by creating a function 
function generatePassword() {
  var ChosenPasswords = [];
  var finalGeneratedPassword = [];
  var validator = 0;
  
  
  
  // #1 prompt user for password criteria
  //  password length 8 <128
  passwordLength = prompt(
    "How many characters would you like your password to be? \nMinimum: 8 Digits \nMaximum: 128 Digits"
    );
    
    if(passwordLength > 7 && passwordLength < 129) {
    } else {
      return "Please select password length between 8 and 128 digits! \nPress the button to try again!";
    }
 


  // Confirm if lowercase

  confirmLowerCase = confirm(
    "Would you like to have lowercase letters as part of your password?"
  );
  if(confirmLowerCase) {
    ChosenPasswords = ChosenPasswords.concat(lowerCase);
    var random = getRandomInt(lowerCase.length);
    finalGeneratedPassword.push(lowerCase[random]);
    validator++;
  }


  // confirm if uppercase
confirmUpperCase = confirm(
"Would you like to have uppercase letters as part of your password?"
);
if (confirmUpperCase) {
  ChosenPasswords = ChosenPasswords.concat(upperCase);
  var random = getRandomInt(upperCase.length);
  finalGeneratedPassword.push(upperCase[random]);
  validator++;
}
  

  // confirm special characters 
  confirmSpecialCharacters = confirm(
    "Would you like to have special characters as part of your password?"
    );
    if (confirmSpecialCharacters ) {
      ChosenPasswords = ChosenPasswords.concat(specialCharacters);
      var random = getRandomInt(specialCharacters.length);
      finalGeneratedPassword.push(specialCharacters[random]);
      validator++;
    }

  // confirm numbers 
  confirmNumbers = confirm(
    "Would you like to have numbers as part of your password?"
    );
    if (confirmNumbers) {
      ChosenPasswords = ChosenPasswords.concat(numbers);
      var random = getRandomInt(numbers.length);
      finalGeneratedPassword.push(numbers[random]);
      validator++;
    }

    // 
    if (
      confirmLowerCase === false &&
      confirmUpperCase === false &&
      confirmSpecialCharacters === false  &&
      confirmNumbers === false
    ) {
      return "Please select at least one option! \nTry again!";
    }

 // Password generation
 for (i = 0 + validator; i < passwordLength; i++) {
  var random = getRandomInt(ChosenPasswords.length);
  finalGeneratedPassword.push(ChosenPasswords[random]);
};


shuffle(finalGeneratedPassword);
return finalGeneratedPassword.join("");

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
