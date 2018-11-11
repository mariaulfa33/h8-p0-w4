function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(angka < 10){
        return angka
    } else{
        var angka = String(angka)
        return kaliTerusRekursif(Number(angka[0]) * Number(kaliTerusRekursif(angka.slice(1))))
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6