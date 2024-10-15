const leapYears = function(year) {
    if (isNaN(year)) {
        return "ERROR"
    };
    if (year % 4 === 0 && (year % 400 === 0 || year % 100 != 0)) {
        return "This is a leap year"
    } else {
        return "This is not a leap year"
    }

};

// Do not edit below this line
module.exports = leapYears;
