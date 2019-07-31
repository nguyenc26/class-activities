function firstDup(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i === j) {
                //if you are checking with yourself dont do anyhting, and move on to the next number.
                continue;
            } if (arr[i] === arr[j]) {
                return arr[i]
            }
        }
    }
}

// much more efficient answer 
//this is called indexing
function firstDup(arr) {
    //creates an object 
    var dups = {};
    //loops through
    for (var i=0; i < arr.length; i++) {
        //if the object exists then it will return true. if they are not in the array then the value that is the duplicate is returned. 
        var currentValue = arr[i];
        if (dups[currentValue]) {
            return currentValue;
        } else {
            dups[currentValue] = true; 
        }
    }
}