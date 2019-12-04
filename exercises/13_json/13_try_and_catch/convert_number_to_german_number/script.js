//Write a function called translateNumberToGerman that tries to get a number between 1 and 10 by calling another function called askForNumber. If askForNumber returns a number between 1 and 10, translateNumberToGerman should return the German translation of that number as a string. If askForNumber does not return a number between 1 and 10 and instead throws an exception, translateNumberToGerman should log the error message to the console and restart the whole process. The user should keep being prompted to input a number between 1 and 10 until she does so.

function askForNumber() {
    var num = prompt('Please enter a number between 1 and 10');
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    }
    throw new Error('Bad number');
}

function translateNumberToGerman() {
    let num = askForNumber(),
        germanNums = [
            'Null',
            'Eins',
            'Zwei',
            'Drei',
            'Vier',
            'Fünf',
            'Sechs',
            'Sieben',
            'Acht',
            'Neun',
            'Zehn'
        ];
    alert(germanNums[num]);
}

try {
    translateNumberToGerman();
} catch (err) {
    alert(err);
}
