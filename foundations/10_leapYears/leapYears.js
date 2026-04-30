const leapYears = function(inputYear) {
/*
If year is divisible by 4 = leap year
If year is divisible by 100 != leap year
    Unless it is also divisible by 400
*/
    if (inputYear % 4 == 0 && inputYear % 100 !== 0 || inputYear % 400 == 0) {
        return true;
    } else {
        return false;
    }

    return;
};
leapYears(700); // is a leap year: returns true
//leapYears(1985); // is not a leap year: returns false

// Do not edit below this line
module.exports = leapYears;
