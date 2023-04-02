const sumAll = function (num1, num2) {
    let sum = 0;
    if (num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    } else {
        if (num1 > num2) {

            for (i = num1; num1 >= num2; num1--) {

                sum += num1;
            }
        } else {

            for (i = num2; num2 >= num1; num2--) {

                sum += num2;
            }
        }

        //se num1>num2
        //comece com num1 e diminui ate num2
        //para cada num menor que num1 variavel soma receve soma+num
        //senao
        //comece com num2 e diminui ate num1
        //para cada num menor que num2 variavel soma recebe soma+num

        return sum;
    }


};

// Do not edit below this line
module.exports = sumAll;
