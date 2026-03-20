const reverseString = function(string) {
    let originalArr = string.split("");
    let newArr = originalArr.reverse();
    let newString = newArr.join("");

    return newString;
};

reverseString("");

// Do not edit below this line
module.exports = reverseString;
