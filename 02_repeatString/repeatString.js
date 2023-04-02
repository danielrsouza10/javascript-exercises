const repeatString = function (x, y) {
    z = "";
    if (y < 0) {
        return "ERROR";
    } else {
        while (y > 0) {
            z = z + x;
            y--;
        }
    }
    return z;

};

// Do not edit below this line
module.exports = repeatString;
