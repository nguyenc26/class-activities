//how to pass in a number and then return the reverse of the number. 
//if you pass in 1234 and then it returns 4321. 
function reverseNumberNumberNumber (n) {
    var newNum = 0;
    var lastDigit;
    while (n > 0) {
        lastDigit = n % 10;
        newNum = (newNum * 10) + lastDigit;
        n = parseInt(n/10);

    }
    return newNum; 
}

function reverseNum (n) {
    var newNum = '';
    var numString = n.toString();
    for (var i = numString.length - 1; i >=0; i--) {
        newNum += numString[i];
    }
    retunr parseInt(newNum);
}

