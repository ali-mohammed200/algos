function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){  
    let cD = new Date(currentDate);
    let eD = new Date(expirationDate);
  
    return (cD <= eD && correctCode === enteredCode)
  }