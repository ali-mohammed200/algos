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

// Sun West Mortage Interview Question
// create an html table
// rate,price,rate,price,rate,price:lock;rate,price,rate,price,rate,price:lock;rate,price,rate,price,rate,price:lock

// 5.0,100,5.5,101,6.0,102:L1;5.0,90,5.5,91,6.0,92:L2;5.0,200,5.5,201,6.0,202:L3
// Table would look like this
//          L1      L2      L3
//  5.0     100     90      200
//  5.5     101     91      201
//  6.0     102     92      202

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>

// Attempt 1. Failure
// I had the wrong approach
// Needed to split and then organize the data
function sun_west_tabler(str){
    let rows = str.split(":");
    let table = document.createElement("table");

    // creating table rows
    for(let i = 0; i < rows.length; i++){
        let table_row = document.createElement("tr");
        table_row.id = i === 0 ? "lock_row": `rate_row`;

        for (let index = 0; index < rows.length; index++) {
            let table_cell = document.createElement("td");
            table_row.appendChild(table_cell);
        }

        table.appendChild(table_row);
    }

    for(let i = 0; i < rows.length; i++){
        let row = rows[i];
        let values = row.split(/[,;]/);
        let lock = "";

        if (i !== 0) {
            lock = values.pop();
        }

        console.log(values);
    }

    console.log(table);
}

let str = "5.0,100,5.5,101,6.0,102:L1;5.0,90,5.5,91,6.0,92:L2;5.0,200,5.5,201,6.0,202:L3"
// console.log(sun_west_tabler(str));
sun_west_tabler(str);


// {
//     L1: {
//         5.0: [],
//         5.5: [],
//         6.0: []
//     }
// }
// // OR
// {
//     5.0: {
//         L1: 100,
//         L2: 90,
//         L3: 200
//     }
// }
// // OR
// [
//     [L1, [5.0, [100, 90, 200]]]
// ]

// Attempt 2. Failure
// Trying to organize data
// building an object initially to organize the data
function sun_west_tabler(str){
    let rows = str.split(";");
    let table = document.createElement("table");

    let organized_object = {}
    for(let i = 0; i < rows.length; i++){
        let row = rows[i];
        let values = row.split(/[,:]/);
        let lock = values.pop();

        organized_object[lock] = {};

        for (let index = 0; index < values.length; index += 2) {
            const element = values[index];
                // rate is current value[even index]
                // since we are going +2 in the loop, we are only hitting evens
                // index + 1 is going to be the price
                organized_object[lock][element] = values[index + 1];
        }
    }

    console.log(organized_object);
    console.log(table);
}


// [
//     [5.0, 100, 90, 200], 
//     [5.5, 101, 91, 201], 
//     [6.0, 102, 92, 202]
// ]

// {
//     5.0: [100, 90, 200],
//     5.5: [101, 91, 201],
//     6.0: [102, 92, 202]
// }

// Attempt 3. Pass
// Organized the data and then made the table
// building an array matrix
function sun_west_tabler(str){
    let rows = str.split(";");
    let table = document.createElement("table");

    let locks = [" "];
    let organized_matrix = {};

    for(let i = 0; i < rows.length; i++){
        let row = rows[i];
        let values = row.split(/[,:]/);

        const lock = values.pop();
        locks.push(lock);

        for (let index = 0; index < values.length; index += 2) {
            const rate = values[index];
            const price = values[index + 1];
            // rate is current value[even index]
            // since we are going +2 in the loop, we are only hitting evens
            // index + 1 is going to be the price
            organized_matrix[rate] ||= [];
            organized_matrix[rate].push(price);
        }
    }

    // Create header row for locks
    let lock_row = document.createElement('tr');
    lock_row.id = 'header_locks';
    for(const lock of locks){
        let header = document.createElement('th');
        header.innerText = lock;
        lock_row.appendChild(header);
    }
    table.appendChild(lock_row);


    // Create rate-prices row
    for (const key in organized_matrix) {
        let prices = organized_matrix[key];
        let rate_row = document.createElement('tr');
        let rate_cell = document.createElement('td');
        rate_cell.innerText = key;

        rate_row.appendChild(rate_cell);

        for (const price of prices) {
            let price_cell = document.createElement('td');
            price_cell.innerText = price;
            rate_row.appendChild(price_cell);
        }
        table.appendChild(rate_row);
    }

    console.log(organized_matrix);
    console.log(table);
}


let str2 = "5.0,100,5.5,101,6.0,102:L1;5.0,90,5.5,91,6.0,92:L2;5.0,200,5.5,201,6.0,202:L3"
// console.log(sun_west_tabler(str));
sun_west_tabler(str2);




// HARDER Recursion problems;

// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    
    if(str.length === 0){
        return '';
    }
    
    return str.at(-1) + reverse(str.substring(0, str.length - 1))
  }

// console.log(reverse('awesome')); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// .at might be for recent js versions
function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    
    if(str.length === 0){
        return '';
    }
    
    return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
  }






//   isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

  function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    if(str.length < 2){
        return true;
    }
    
    let sub = str.substring(1, str.length - 1);
    
    return str[0] === str.charAt(str.length - 1) && isPalindrome(sub);
  }




//   someRecursive
//   Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.


  // SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false

function someRecursive(arr, callback){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return false;
  
  return callback(arr.shift()) || someRecursive(arr, callback);
}