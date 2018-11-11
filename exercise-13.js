function sorting(arrNumber) {
    // code di sini
    var n= arrNumber.length
    while(n !== 0){
        var nNew = 0
        for(var i=1; i<arrNumber.length; i++){
            if(arrNumber[i] > arrNumber[i-1]){
                var temp = arrNumber[i]
                arrNumber[i] = arrNumber[i-1]
                arrNumber[i-1] = temp
                nNew = i
            }
        }
        n = nNew
    }
    return arrNumber
  }

  
  function getTotal(arrNumber) {
      if(arrNumber.length === 0){
          return []
      }else{
          var obj = {}
          for(var i=0; i<arrNumber.length; i++){
              if(obj[arrNumber[i]] === undefined){
                  obj[arrNumber[i]] = 0
              }
             obj[arrNumber[i]]++
              
          } 
         return 'angka paling besar adalah ' + arrNumber[0]+ ' dan jumlah kemunculan sebanyak ' + obj[arrNumber[0]] + ' kali'
      }
    // code di sini
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''