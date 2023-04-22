const sumAll = function (a, b) {
    //variable to receive the sum of the numbers between the parameters
    let sumResult = 0;

    //verifing if the numbers are positive and if it is numbers
    if (a < 0 || b < 0 || typeof a != 'number' || typeof b != 'number') {
        //return ERROR if the parameters don't pass in all the conditions
        return "ERROR";
    } else {
        //verifing witch of the parameters is bigger
        if (a >= b) {
            //loop for sum the values between the two elements
            while (a >= b) {
                sumResult += a;
                a--;
            }
        } else {
            while (b >= a) {
                sumResult += b;
                b--;
            }
        }
        //return of the sum
        return sumResult;
    }
};

// Do not edit below this line
module.exports = sumAll;
