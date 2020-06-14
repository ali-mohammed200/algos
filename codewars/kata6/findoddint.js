// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let obj = {};
  let odd;
  //Go through each array and create an key:value of number:occurence
  //If the object key exists, increment. Otherwise, create
  A.forEach(elem => { typeof(obj[elem]) != "undefined" ? obj[elem]++ : (obj[elem] = 1) });
  
  //Make an array of [num, occurrence]
  //Find the odd occurrence and save it's number
  Object.entries(obj).forEach(elem => {
    if(elem[1] % 2 == 1) {
      //Take the string value and turn it into a number
      odd = parseInt(elem[0])
    }
  })
  return odd;
}

//Interesting Variation:
//Perhaps more efficient

function findOdd2(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}