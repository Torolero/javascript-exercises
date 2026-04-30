const sumAll = function(intOne, intTwo) {
    let total = 0;
    if (intOne > intTwo) {
       while (intOne >= intTwo) {
        total += intOne;
        intOne--;
  
    } 
    } else if (intOne < 0 || intOne % 1 !== 0 || typeof intTwo !== 'number' ) {
        return "ERROR";
    }else {
        while (intOne <= intTwo) {
        total += intOne;
        intOne++;
    }
    }
    

    return total;
};
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
