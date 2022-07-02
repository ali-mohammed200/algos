# Udemy
# JavaScript Algorithms and Data Structures Masterclass
# Frequency Counter - valid_anagram
# Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.



# Note: You may assume the string contains only lowercase alphabets.

def valid_anagram(word1, word2)
    counter_obj = {}

    if (word1.length != word2.length)
        return false
    end

    word1.each_char do |letter|
        counter_obj[letter] ||= 0
        counter_obj[letter] += 1
    end

    word2.each_char do |letter|
        return false if counter_obj[letter].nil?
        counter_obj[letter] -= 1
        return false if counter_obj[letter] < 0
    end

    return true
end

#If I sorted the two words, I would only need one loop! Perhaps


# Examples:

def test
    puts "Start"
    puts(valid_anagram('', '') == true) # true
    puts(valid_anagram('anagram', 'nagaram') == true) # true
    puts(valid_anagram('aaz', 'zza') == false) # false
    puts(valid_anagram("rat", "car") == false) # false
    puts(valid_anagram('awesome', 'awesom') == false) # false
    puts(valid_anagram('amanaplanacanalpanama', 'acanalmanplanpamana') == false) # false
    puts(valid_anagram('qwerty', 'qeywrt') == true) # true
    puts(valid_anagram('texttwisttime', 'timetwisttext') == true) # true
    puts "End"
end

test

=begin
Lessons learned:
Don't take js code and try to replace with ruby code. 
You will get many errors and you sort of forget ruby

method definitions do not have do end and if statements do
no have do end. Only blocks have do end.
also testing if obj[key] == 'nil' does not work
you must test if it equals nilclass because everything is an object in ruby
=end