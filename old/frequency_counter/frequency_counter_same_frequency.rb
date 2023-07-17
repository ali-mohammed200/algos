# Udemy
# JavaScript Algorithms and Data Structures Masterclass
# Frequency Counter - same_frequency
# Write a function called same_frequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

# Your solution MUST have the following complexities:

# Time: O(N)

# Sample Input:

# same_frequency(182,281) # true
# same_frequency(34,14) # false
# same_frequency(3589578, 5879385) # true
# same_frequency(22,222) # false

# Not efficient but works
def same_frequency(num1, num2)
    return num1.to_s.split("").sort.join == num2.to_s.split("").sort.join
end

def same_frequency(num1, num2)
    #Does not take in account decimals or beginning zeros
    # ex: same_frequency(181, 8.11);
    # ex: same_frequency(080, 800);
    counter_obj = {}
    num1 = num1.to_s.split('')
    num2 = num2.to_s.split('')

    num1.each do |digit|
        counter_obj[digit] ||= 0
        counter_obj[digit] += 1
    end

    num2.each do |digit|
        return false if !counter_obj[digit]
        return false if counter_obj[digit] < 0
        counter_obj[digit] -= 1
    end

    counter_obj.each_value do |count|
        return false if count != 0
    end

    return true
end

#O(n) each loop loops for n amount of times. O(3n)