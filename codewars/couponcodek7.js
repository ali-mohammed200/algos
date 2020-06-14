function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if(typeof(correctCode) === 'boolean'){
      return false
    }
    
    let cD = new Date(currentDate);
    let eD = new Date(expirationDate);
  
    return (cD <= eD && correctCode === enteredCode)
  }