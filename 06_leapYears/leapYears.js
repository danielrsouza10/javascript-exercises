const leapYears = function (year) {

    //if the year IS NOT divisible by 4 so return false
    if (year % 4 != 0) {
        return false;
    }
    //if the year is divisible by 100 and IS NOT divisible by 400 so return false
    else if (year % 100 === 0 && year % 400 !=0){
        return false;
    }
    else{
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
