function cariModus(arr) {
    // you can only write your code here!
    var objList = {}
    for(var i=0; i<arr.length; i++){
        if(objList[arr[i]] === undefined){
            objList[arr[i]] = 0
        }
        objList[arr[i]]++
    }

    var keys = 0
    var values = 0
    for(var i=0; i<Object.keys(objList).length; i++){
        if(values < Object.values(objList)[i]){
            values = Object.values(objList)[i]
            keys = Object.keys(objList)[i]
        }
    }
    if(values === 1 || values === arr.length){
        return -1
    }else{
        return keys
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1