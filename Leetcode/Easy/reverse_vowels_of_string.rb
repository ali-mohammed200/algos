# 345. Reverse Vowels of a String
# Easy
# Companies
# Given a string s, reverse only all the vowels in the string and return it.

# The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

# Example 1:

# Input: s = "hello"
# Output: "holle"
# Example 2:

# Input: s = "leetcode"
# Output: "leotcede"
 

# Constraints:

# 1 <= s.length <= 3 * 105
# s consist of printable ASCII characters.


# @param {String} s
# @return {String}
def reverse_vowels(s)
    vowels_hash = { 
        'a' => 1,
        'e' => 1,
        'i' => 1,
        'o' => 1,
        'u' => 1,
        'A' => 1,
        'E' => 1,
        'I' => 1,
        'O' => 1,
        'U' => 1
    }

    vowels = []
    s_arr = s.split('')

    s_arr.each_with_index do |letter, idx|
        if vowels_hash[letter]
            vowels.unshift(letter)
            s_arr[idx] = '*'
        end
    end

    s_arr.each_with_index do |letter, idx|
        if letter == '*'
            s_arr[idx] = vowels.shift
        end
    end
    
    s_arr.join('')
end

# I didn't think of edge cases with strings that use * or some other symbol which I switched out for
# Time complexity 2(n)
# Space complexity n

# I am modifying a copy

# We can make the solution faster to O(n) by spliting the string in half and hitting both the front and back
# at the same time

# or using 2 pointers, one for the beginning and other for the end

