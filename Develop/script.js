// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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
  var validatorCount = 0;
  var allChosenPasswords = [];
  var finalPassword = [];
  console.log("Button is working")

  // #1 prompt user for password criteria


    //  password length 8 <128
    passwordLength = prompt(
      "How many characters would you like your password to be? \nMinimum: 8 Digits \nMaximum: 128 Digits"
    );

    if(passwordLength > 7 && passwordLength < 129) {
  } else {
    return "Please choose password length between 8 and 128 digits! \nPress the button to try again!";
  }

  


  // #2 Validate the input


  //  #3 Generate password based on criteria


  //  #4 Display password to the page
    return "Generated password will go here!"
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
