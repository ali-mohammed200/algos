// Udemy
// JavaScript Algorithms and Data Structures Masterclass
// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// Not efficient but works
function sameFrequency(num1, num2){
    num1 = num1.toString().split("").sort().join(); //[1,2,3]
    num2 = num2.toString().split("").sort().join();

    return num1 == num2;
}

function sameFrequency(num1, num2){
    //Does not take in account decimals or beginning zeros
    // ex: sameFrequency(181, 8.11);
    // ex: sameFrequency(080, 800);
    let counterObj = {};
    num1 = num1.toString();
    num2 = num2.toString();

    for (let index = 0; index < num1.length; index++) {
        const element = num1[index];
        if (typeof counterObj[element] == 'undefined') {
            counterObj[element] = 0;
        }
        counterObj[element]++;
    }

    for (let index = 0; index < num2.length; index++) {
        const element = num2[index];
        if (typeof counterObj[element] == 'undefined') return false;
        if (counterObj[element] < 0) return false;
        counterObj[element]--;
    }

    for (const key in counterObj) {
        const element = counterObj[key];
        if (element !== 0) return false;
    }

    return true;
}

//O(n) each loop loops for n amount of times. O(3n)



// Colt Steele Solution
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }

//   Difference between my solution and Colt's is that
//   he doesn't remove from the object like me.
//   He makes two counter while I make one.
//   Then he enumerates over the original counter
//   and checks if key in obj2 or vice versa