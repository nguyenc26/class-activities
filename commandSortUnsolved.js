// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var nodeArr = process.argv;

var numArr = [];

for (var i = 2; nodeArr.length; i++) {
    numArr.push(parseFloat(nodeArr[i]));
}

console.log(numArr);
console.log(numArr.sort(sortNums));

function sortNums(a, b) {
    return (a - b);
}

