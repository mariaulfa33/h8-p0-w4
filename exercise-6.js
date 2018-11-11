function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var result = []
    for(var i=0; i<=angka; i++){
        if(angka % i === 0){
            result.push( angka / i + String(i))
        }
    }
    var digitmin = result[0].length
    for(var i=0; i<result.length; i++){
        if(result[i].length < digitmin){
            digitmin = result[i].length
        }
    }
    return digitmin

  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2