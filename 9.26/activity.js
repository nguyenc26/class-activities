function myFunc(arr, funcParam) {
    var newArr =[];

    for (var i =0; i <arr.length; i++){
        if (funcParam(arr[i])){
            newArr.push(arr[i]);
        }

    }
    return newArr;    

}

myFunc([1,2,3], function(num){return num === 2});