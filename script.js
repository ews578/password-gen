// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var charLength = prompt("how many characters would you like? Must be between 8-128 characters");

  //validate user input
  while ((charLength < 8) || (charLength > 128) || (isNaN(charLength) === true)) {
    alert("Password not accepted. Enter 8-128 in numerical form.")
    charLength = prompt("how many characters would you like? Must be between 8-128 characters");
  }
  //confirm with user types of characters needed
  var choseLowercase = confirm("Do you want to include lower case characters?");

  var choseUppercase = confirm("Do you want to include uppercase characters?");

  var choseNumeric = confirm("Do you want to include a number?");

  var choseSpecial = confirm("Do you want to include a special charater?");

  //create variables to hold choices
  
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "01234566789";
  var special = "!@#$%^&*?";
  var characterBank = "";
  var newPassword = "";
  //create if statements to add or not add types of characters user chose
  if (choseLowercase === true) {
    characterBank = characterBank.concat(lowercase);
  }
  if (choseUppercase === true) {
    characterBank = characterBank.concat(uppercase);
  }

  if (choseNumeric === true) {
    characterBank = characterBank.concat(numbers);
  }

  if (choseSpecial === true) {
    characterBank = characterBank.concat(special);
  }
//create function to randomize the bank
function  randomizeBank(max){
  return[Math.floor(Math.random() * max)]
}
//loop through character bank and pass data to randomize bank function and spit out new password
for(var i = 0; i<charLength; i++){
  newPassword = newPassword.concat(characterBank.charAt(randomizeBank(characterBank.length - 1)))
}
return newPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
