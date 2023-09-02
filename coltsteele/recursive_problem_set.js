// power
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num, exp){
    if(exp === 0){
        return 1;
    }
    return num * power(num, exp-=1);
}

// -------
// factorial
// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
    if(num <= 1) return 1
    return num * factorial(num-1);
 }
 
//  ------
//  productOfArray
//  Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
    // pure_recursion
    if (arr.length < 1) return 1
    if (arr.length === 1) return arr[0]
    return arr[0] * productOfArray(arr.slice(1));
}

 function productOfArray(arr){
    // helper_recursion
    if (arr.length === 0) return 0;
    let prod = 1;
    
    function helper_product(help_arr) {
        if (help_arr.length < 1) { prod *= 1; return; }
        if (help_arr.length === 1) { prod *= help_arr[0]; return; }
        prod *= help_arr[0];
        helper_product(help_arr.slice(1));
    }
    
    helper_product(arr);
    
    return prod;
}


// recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 



// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
    // pure recursion
   if (num <= 0) return 0
   return num + recursiveRange(num - 1)
}

function recursiveRange(num){
    // helper recursion
    let sum = 0;
    
    function helper_range(h_num){
        if (h_num <= 0) {sum += 0; return;}
        sum += h_num
        return helper_range(h_num - 1);
    }
    
    helper_range(num)
    return sum;
}


// fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(num){
    // add whatever parameters you deem necessary - good luck!  
      let arr = [];
      for(let i = 0; i < num; i++){
          if (i == 0 || i == 1) {
              arr.push(1);
          }
          if (i > 1) {
              arr.push(arr[i - 1] + arr[i - 2])
          }
      }
      
      return arr;
  }
  
  console.log(fib(8));



  function fib(num){
    // add whatever parameters you deem necessary - good luck!  
      let arr = [];
      
      function fib_h(i){
          if (i == num) return;
          if (i == 0 || i == 1) {
              arr.push(1);
          }
          if (i > 1) {
              arr.push(arr[i - 1] + arr[i - 2])
          }
          fib_h(i+1)
      }
      
      fib_h(0);
      
      return arr;
  }
  
  console.log(fib(8));


// for fib, you need to know -1 and -2 from current 



//   SOLUTIONS FOR THIS SECTION
// POWER SOLUTION
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
// FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
// RECURSIVE RANGE SOLUTION
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
// FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}