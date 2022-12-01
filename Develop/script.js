// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)




  function generatePassword() {

    const numberOptions = "0123456789";
    const lowerOptions = "abcdefghijklmnopqrstuvwxyz";
    const upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialOptions = "`~!@$#%^&*()-_=+{}[]\|;:'/?.>,<";
   var lengthPassword = window.prompt("How long do you want your password to be?");
   console.log("This is the length of the pasword: ", lengthPassword)
   if (lengthPassword<8){
    window.alert("Must be greater than 8 characters!")
   }
   if(lengthPassword>128){
    window.alert("must be less than 128 characters")
   }

  }

// write the password here
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
