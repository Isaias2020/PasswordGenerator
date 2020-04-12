// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordLength = Number(prompt("Please enter the number of characters you would like your password to have."));
    while (passwordLength < 8 || passwordLength > 128) passwordLength = Number(prompt("Length must be at at least 8 characters and no more than 128."));

    var useNumbers = confirm("Do you want numbers in your password?");
    var useUpperCases = confirm("Do you want uppercases in your password?");
    var useLowerCases = confirm("Do you want lowercases in your password?");
    var useSpecial = confirm("Do you want special characters in your password?");

    while (!useNumbers && !useUpperCases && !useLowerCases && !useSpecial) {
        alert("You have to select at least one character type!");
        useNumbers = confirm("Do you want numbers in your password?");
        useUpperCases = confirm("Do you want uppercases in your password?");
        useLowerCases = confirm("Do you want lowercases in your password?");
        useSpecial = confirm("Do you want special characters in your password?");
    }

    function generatePassword() {
        var numbers = "0123456789";
        var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lowerCases = "abcdefghijklmnopqrstuvwxyz";
        var special = "!@#$%^&*()_+";
        var allChars = "";
        if (useNumbers) allChars += numbers;
        if (useUpperCases) allChars += upperCases;
        if (useLowerCases) allChars += lowerCases;
        if (useSpecial) allChars += special;

        var shuffled = allChars.split('').sort(function () { return 0.5 - Math.random() }).join('');

        return shuffled.substring(0, passwordLength)
    }
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);