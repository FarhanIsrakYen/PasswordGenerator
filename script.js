
function generatePassword() {
    const length = document.getElementById("length").value;
    const includeLowercase = document.getElementById("includeLowercase").checked? true : false;
    const includeUppercase = document.getElementById("includeUppercase").checked? true : false;
    const includeNumbers = document.getElementById("includeNumbers").checked? true : false;
    const includeSymbols = document.getElementById("includeSymbols").checked? true : false;
    const result = document.getElementById("result");
    
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase? lowerCaseChars : "";
    allowedChars += includeUppercase? upperCaseChars : "";
    allowedChars += includeNumbers? numberChars : "";
    allowedChars += includeSymbols? symbolChars : "";

    if (length <= 0) {
        result.textContent = `(Password length needs to be at least 1)`;
    }
    if (allowedChars.length === 0) {
        result.textContent = `(At least 1 set of characters needs to be selected)`;
    }

    for (let index = 0; index < length; index++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];        
    }

    result.textContent = `Generated Password: ${password}`
}


