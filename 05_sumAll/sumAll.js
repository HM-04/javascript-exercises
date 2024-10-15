const sumAll = function(number1, number2) {
   if (number1 || number2 <= 0) {
    return ERROR
   } 
   let number3 = ""
   for (let i = number1; i <= number2; i++){
   number3 += i
   
   };
   return number3
};

// Do not edit below this line
module.exports = sumAll;
