// Write a function called invertCase that expects a string as a parameter. This function should return a new string with all the same characters as the string that was passed in but with the cases of the alphabetic characters switched. Uppercase characters should become lowercase and lowercase letters should become uppercase. Characters that are not alphabetic should not change. The toUpperCase and toLowerCase methods that all strings have will come in handy here.

function invertCase(str) {
    //new String the converted character will be added to
    var newStr = '';
    //loop through all the characters in the strings, check if original character is equal to uppercased character, and apply either uppercase or lowercase
    for (i in str) {
        var char = str[i]; // current character
        if (char === char.toUpperCase()) {
            newStr += char.toLowerCase();
        } else {
            newStr += char = char.toUpperCase();
        }
    }
    return newStr;
}
