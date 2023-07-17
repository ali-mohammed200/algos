// Udemy
// JavaScript Algorithms and Data Structures Masterclass
// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)




// The difference between rest parameters and the arguments object
// There are three main differences between rest parameters and the arguments object:

// The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly.
// The arguments object has additional functionality specific to itself (like the callee property).
// The ...restParam bundles all the extra parameters into a single array, therefore it does not contain any named argument defined before the ...restParam. Whereas the arguments object contains all of the parameters — including the parameters in the ...restParam array — bundled into one array-like object.


// [8, 2, 3, 1, 4, 1]
// 8              1
//    2           1
//        3       1
// 8           4
//    2        4
//        3    4
// 8          1
//    2      1
//        3  1

// https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment

function areThereDuplicates(...args){
    let counterObj = {}
    for (const num of args) {
        counterObj[num] ||= 0;
        counterObj[num]++;
        if(counterObj[num] > 1) return true;
    }
    return false;
}

// If Not the latest JS version
function areThereDuplicates(...args){
    let counterObj = {};
    for (const num of args) {
        counterObj[num] || (counterObj[num] = 0);
        counterObj[num]++;
        if(counterObj[num] > 1) return true;
    }
    return false;
}


// Colte Steele's solution
// areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
}

// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
}
//   Interesting solution above. Definitely
//   adds time by initial sorting
//   because he sorts, all he has to check
//   is the 2 consecutive values to see if they match

// areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// Forgot about set!!!