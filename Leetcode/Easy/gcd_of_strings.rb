# 1071. Greatest Common Divisor of Strings
# https://leetcode.com/problems/greatest-common-divisor-of-strings/
# For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

# Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

# Example 1:

# Input: str1 = "ABCABC", str2 = "ABC"
# Output: "ABC"
# Example 2:

# Input: str1 = "ABABAB", str2 = "ABAB"
# Output: "AB"
# Example 3:

# Input: str1 = "LEET", str2 = "CODE"
# Output: ""
 

# Constraints:

# 1 <= str1.length, str2.length <= 1000
# str1 and str2 consist of English uppercase letters.


# @param {String} str1
# @param {String} str2
# @return {String}
def gcd_of_strings(str1, str2)
    greatest = ''
    current = ''
    s1_length = str1.length
    s2_length = str2.length

    str1.chars.each_with_index do |letter, idx|
        current += letter
        current_length = current.length
        multiplier_s1 = s1_length / current_length
        multiplier_s2 = s2_length / current_length

        if (current * multiplier_s1 == str1 && current * multiplier_s2 == str2)
            greatest = current
        end
    end
    greatest
end


# I am not thinking about edge cases

# if(str1 + str2 != str2 + str1) return '';
# If they are different words

# The Euclidean algorithm is implemented using the gcds function, which takes two input numbers and returns their GCD.


# /**
#  * @param {string} str1
#  * @param {string} str2
#  * @return {string}
#  */
# Very interesting. using math
var gcdOfStrings = function(str1, str2) {

    if (str1 + str2 !== str2 + str1) {

        return "";

    }

    let n = str1.length;

    let k = str2.length;

    let gcds = function (x, y) {

        if (!y) {

            return x;
        }
        
        return gcds(y, x % y);

    }

    let div = gcds (n, k);

    return str1.slice(0, div);
    
};