function shoppingTime(memberId, money) {
    // you can only write your code here!

    if(!memberId || !money){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'

    }else if (money < 50000){
        return 'Mohon maaf, uang tidak cukup'

    }else{
        var obj = {
            memberId : memberId,
            money: money,
            listPurchased : [],
            changeMoney: money
        }
        
        var listPurchased = [['Sepatu brand Stacattu',1500000],
            ['Baju brand Zoro', 500000],
            ['Baju brand H&N',250000],
            ['Sweater brand Uniklooh', 175000],
            ['Casing Handphone' ,50000]]

        for(i=0; i<listPurchased.length; i++){
            if(obj.changeMoney >= listPurchased[i][1]){
                obj.listPurchased.push(listPurchased[i][0])
                obj.changeMoney -= listPurchased[i][1]
            }
        }
        return obj
    }
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja