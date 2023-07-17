/*
Write a function called maxSubarraySum which accepts an 
array of integers and a number called n. The function 
should calculate the maximum sum of of n consecutive
elements in the array.
*/

/*
O(n) time complexity

Double loop solution which was my first thought would be 0(n^2). Too slow

maxSum would need to start at -Infinity instead of 0 to account for negative values

The way this algorithm works is that it builds a sub array as it is looping and 
shifts/removes the first value whenever we hit the n length.
CurrentSum is being totaled as the loop progresses and 
The shifted value is used to subtract from the currentSum.
That way we old add and subtract as the loop is going once rather than
two nested loops.

Colt Steele uses a similar approach but begins by building the total
using the first n digits and having a starting point of n for the for loop.
Then he does the same add/subtract to get the sum
*/
function maxSubarraySum(arr, n) {
    let maxSum = arr.length > 0 ? 0 : null;
    let current = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (current.length == n) {
            let prevVal = current.shift();
            currentSum -= prevVal;
        }
        let val = arr[i];
        current.push(val);
        currentSum += val;
 
        if (maxSum < currentSum){
            maxSum = currentSum;
        }


    }
    return console.log(maxSum);
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1,2,5,2,8,1,5],4); // 17
maxSubarraySum([4,2,1,6],1); // 6
maxSubarraySum([4,2,1,6,2],4); // 13
maxSubarraySum([],4); // null
