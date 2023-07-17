/*

CountUniqValues
Implement a function called countUniqValues which accepts a sorted array 
and counts the unique values in the array. There can be negative numbers in the array,
but it will always be sorted.
*/

/*
This solution below 12/14/21
incorporates the pointer and frequency methods from the
colt steel algorithms course.

This is a time complexity of O(n/2) because my loop only 
runs for half the amount of time
which is essentially O(n) efficiency because of dropping of constants.

My previous solution was 0(n^2); terrible.
*/

function countUniqueValues(arr) {
    let count = 0
    let left = 0;
    let right = arr.length - 1;

    let obj = {};
    
    while (left < right){
        // debugger;
        let l_val = arr[left];
        let r_val = arr[right];

        if (obj[l_val]) {
            obj[l_val]++;
        } else { 
            obj[l_val] = 1; 
            count++;
        }

        if (obj[r_val]) {
            obj[r_val]++;
        } else {
            obj[r_val] = 1;
            count++;
        }
           

       left++;
       right--;

    }

    return count;
}

/*
Colt Steeles' approach is to modify the original array. Basically,
we have two pointers i and j. j is like a scout who moves up while it is the same as i,
then i moves up 1 position and the current value of j is replaced the with current i value.
[1,1,2,3,4,4,4,5]
 i   
     j

[1,2,2,3,4,4,4,5]
   i
       j
[1,2,3,3,4,4,4,5]
     i
         j

Then when j hits the end of the array, i is the count of the unique values
because all uniq values were overwriting the old copy values.

This only works if we are allowed to alter the array.

O(n)
Space wise, it uses less space than my code

This code only works with a sorted array
   */

function countUniqueValuesColt(arr){
    if (!arr.length) {return 0;} //This if clause is nice which uses the truthy falsey values. 0 is falsey
    let i = 0;
    for(let j = i; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}


console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2,-1,-1,0,1])); //4
console.log(countUniqueValues([1, 1, 1, 1, 2])); //2