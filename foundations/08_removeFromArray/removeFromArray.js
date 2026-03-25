const removeFromArray = function(array, input, inputTwo, inputThree, inputFour) {
/*
Function should take an array and another argument.
Function should remove the 'other argument' from the array if present.
Function should return the updated results.
*/
    let newArray = array.filter(num => num !== input && num !== inputTwo && num !== inputThree && num !== inputFour);
    return newArray;

};

removeFromArray([1, 2, 3], "1", 3);


// Do not edit below this line
module.exports = removeFromArray;
