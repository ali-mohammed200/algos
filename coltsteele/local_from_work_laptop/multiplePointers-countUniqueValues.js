// Udemy
// JavaScript Algorithms and Data Structures Masterclass
// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)

// Space Complexity - O(n)

// Bonus

// You must do this with constant or O(1) space and O(n) time.

function countUniqueValues(arr) {
    const mySet1 = new Set(arr)
    return mySet1.size
}

// Set might be like array.includes

function countUniqueValues(array) {
    let count = 0;
    let prevElement = array[0];
    if(array.length == 0){
        return count;
    }
    for(let index = 0; index < array.length; index++) {
        const currentElement = array[index];
        if(prevElement != currentElement){
            count++;
        }
        prevElement = currentElement;
    }
    return count + 1;
}



