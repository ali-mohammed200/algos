// Udemy
// JavaScript Algorithms and Data Structures Masterclass
// sliding_window_maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)

function maxSubarraySum(arr, slide) {
    let current_sum = 0;
    let max_sum = -Infinity;
    if (arr.length < slide) return null;
    for(let i = 0; slide <= arr.length; i++){
        const num = arr[i];
        current_sum += num;
        if (i % slide === slide - 1) {
            if (current_sum > max_sum) max_sum = current_sum;
            current_sum = 0; 
            arr.shift(); 
            i = -1;
        }
    }
    return max_sum;
}



// Finally solved this. Took about an hour and a half.
// The problems I had:
// 1) Figuring out how to loop while coming back 
//     to the correct offset because we want to 
//     have sub array of a given count.
//          -Before I was doing the subarray check
//              on every 0 modulo value.
//              That will cause problems because when
//              i = -1 and turns to 0 in the beginning 
//              of the next loop, it will cut of the subarray extra times.
//          -We are checking slide < than array.length because as we 
//              shift off the beginning of the array everytime, 
//              we want to stop we the subarray is too small
// 2) Moving the max_sum to the correct portion. 
//     Before the max sum was calculating on every iteration.
//     We only want it on the end of each subarray


// v = 2
// [10, 20, 30, 40, 50, 60, 70]
//   0   1   2   3   4   5   6
//   -   -
//       -   -
//           -   -
//               -   -
//                   -   -
//                       -   -     

function test_loop(arr, val) {
    let c = arr;
    for (let index = 0; val <= c.length; index++){
        console.log(`l = ${c.length} - i = ${index} - cur = ${c[index]} - ${c}`);
        if( index % val === val - 1) {
            c.shift();
            index = -1;
        }
    }
}

//Colt Steele Solution

function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}

// Really nice solution, we already have the total, we can just take one off from the back and keep going!