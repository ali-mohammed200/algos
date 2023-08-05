// # 1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/
// # For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// # Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// # Example 1:

// # Input: str1 = "ABCABC", str2 = "ABC"
// # Output: "ABC"
// # Example 2:

// # Input: str1 = "ABABAB", str2 = "ABAB"
// # Output: "AB"
// # Example 3:

// # Input: str1 = "LEET", str2 = "CODE"
// # Output: ""
 

// # Constraints:

// # 1 <= str1.length, str2.length <= 1000
// # str1 and str2 consist of English uppercase letters.


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let greatest = '';
    let current = '';
    for(let i = 0; i < str1.length; i++){
        current += str1[i]

        let current_length = current.length
        let s1_length = str1.length
        let s2_length = str2.length

        let s1_multiplier = s1_length / current_length
        let s2_multiplier = s2_length / current_length

        if((current.repeat(s1_multiplier) == str1) && (current.repeat(s2_multiplier) == str2)){
            greatest = current;
        }
    }
    
    return greatest;
};

//I am not thinking about edge cases

// if(str1 + str2 != str2 + str1) return '';
// If they are different words

// The Euclidean algorithm is implemented using the gcds function, which takes two input numbers and returns their GCD.