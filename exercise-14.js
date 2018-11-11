function changeVocals (str) {
    //code di sini
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var result = ''

    for(var i=0; i<str.length; i++){
        if(str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'u' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'o'){
            for(var j=0; j<kamus.length; j++){
                if(str[i] === kamus[j]){
                    result += kamus[j+1]
                }else if (str[i] === kamus[j].toUpperCase()){
                    result += kamus[j+1].toUpperCase()
                }
            }
        }else{
            result += str[i]
        }     
    }
    return result
  }
  

  function reverseWord (str) {
    //code di sini
    var result = ''
    for(var i=str.length-1; i>=0; i--){
        result += str[i]
    }
    return result
  }

 
  
  function setLowerUpperCase (str) {
    //code di sini
    var result = ''
    for(var i=0; i<str.length; i++){
        if(str[i]=== str[i].toLowerCase()){
            result += str[i].toUpperCase()
        }else if (str[i] === str[i].toUpperCase()){
            result += str[i].toLowerCase()
        }else{
            result += str[i]
        }
    }
    return result
  }
  
  function removeSpaces (str) {
    //code di sini
    var result = ''
    for(var i=0; i<str.length; i++){
        if(str[i] !== ' '){
            result += str[i]
        }
    }
    return result
  }

  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5){
        return'Minimal karakter yang diinputkan adalah 5 karakter'
    }else{
        return(changeVocals(reverseWord(setLowerUpperCase(removeSpaces(name)))))
    }
    
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'