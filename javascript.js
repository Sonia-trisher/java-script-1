function checkEvenOdd(int){
  if(isNaN(int)){
    return 'not a valid number'
  }
  else if(int %2 == 0){
    return 'even';
  }
  else{
    return 'odd';
  }
  
  
}
console.log(checkEvenOdd(5))