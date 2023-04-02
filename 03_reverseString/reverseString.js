const reverseString = function (text) {
    let myArray = text.split("");
    let reverseString = [];

    for (i = myArray.length; i > 0; i--) {
        reverseString = reverseString + myArray[i - 1];
    }

    reverseString = reverseString.toString();

    return reverseString;

};

// Do not edit below this line
module.exports = reverseString;
