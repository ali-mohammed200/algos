# Udemy
# JavaScript Algorithms and Data Structures Masterclass
# Multiple Pointers - is_subsequence
# Write a function called is_subsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

# Examples:

# is_subsequence('hello', 'hello world'); # true
# is_subsequence('sing', 'sting'); # true
# is_subsequence('abc', 'abracadabra'); # true
# is_subsequence('abc', 'acb'); # false (order matters)
# Your solution MUST have AT LEAST the following complexities:

# Time Complexity - O(N + M)

# Space Complexity - O(1)

def is_subsequence(word1, word2) 
    count, index2 = 0, 0
    while index2 < word2.length && count < word1.length
        letter1, letter2 = word1[count], word2[index2]
        if (letter1 == letter2)
            count += 1; index2 += 1 #Can't do single line if because the ; breaks the line
        end
        index2 += 1 if(letter1 != letter2)
    end
    return true if (count == word1.length)
    false
end

def is_subsequence(word1, word2) 
    count = 0
    for i in 0...word2.length
        puts "#{word1[count]} - #{word2[i]}"
        count += 1 if word1[count] == word2[i]
        return true if count == word1.length
    end
    false
end

# for i in 0..5
#     if i == 2
#         i = 4
#         redo
#     end
#     puts "Value of local variable is #{i}"
# end

# Value of local variable is 0
# Value of local variable is 1
# Value of local variable is 4
# Value of local variable is 3
# Value of local variable is 4
# Value of local variable is 5

def test
    puts("#{is_subsequence('hello', 'hello world') == true}")
    puts("#{is_subsequence('sing', 'sting') == true}")
    puts("#{is_subsequence('abc', 'abracadabra') == true}")
    puts("#{is_subsequence('abc', 'acb') == false }")
end 

#Colt Steele Solution
def is_subsequence(str1, str2)
    i = 0
    j = 0
    if (!str1) return true;
    while (j < str2.length) do
      if (str2[j] == str1[i]) i += 1
      if (i == str1.length) return true
      j += 1
    end
    return false
end

  # This solution is similar to mine but smarter. 
  # It uses the count as the index. smart smart