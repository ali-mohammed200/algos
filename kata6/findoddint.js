// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let obj = {};
    let odd;
    
    A.forEach(elem => { typeof(obj[elem]) != "undefined" ? obj[elem]++ : (obj[elem] = 1) });
    Object.entries(obj).forEach(elem => {
      if(elem[1] % 2 == 1) {
        odd = parseInt(elem[0])
      }
    })
    return odd;
  }