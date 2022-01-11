// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// define generate password by creating a function 
function generatePassword() {
  console.log("Button is working")

  // #1 prompt user for password criteria


    //  password length 8 <128


    //  lowercase, uppercase, special characters


  // #2 Validate the input


  //  #3 Generate password based on criteria


  //  #4 Display password to the page
    return "Generated password will go here!"
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
