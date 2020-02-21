function doMath(number1,number2,callback) {
    var result = callback(number1,number2);
    document.write (“The result is":+ result);
   }
   doMath(5,2,function(number1,number2){
    var calculation = number1 * number2 / 6;
    return calculation;
   });
   