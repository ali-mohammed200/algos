// Udemy
// JavaScript Algorithms and Data Structures Masterclass
// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(word1, word2) {
    let count = 0
    for (let index1 = 0, index2 = 0; index1 < word1.length && index2 < word2.length; index1) {
        const letter1 = word1[index1];
        let letter2 = word2[index2];
        if(letter1 == letter2) {
            count++;
            index1++;
            index2++;
        }
        if(letter1 != letter2){
            index2++;
        }
    }
    if (count == word1.length) return true;
    return false;
}

//Colt Steele Solution
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

  // This solution is similar to mine but smarter. 
  // It uses the count as the index. smart smart