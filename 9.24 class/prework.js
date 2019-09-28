
function myFunc(arr, funcParam) {
    for (var i =0; i <arr.length; i++){
        if (funcParam(arr[i])){
            return true;
        }
    }

    return false;
}

myFunc([1,2,3], function(num){return num === 2});


// using this function to create an arbotrary callback so that this is a tool to use. 
// this is not to hard code something in a function