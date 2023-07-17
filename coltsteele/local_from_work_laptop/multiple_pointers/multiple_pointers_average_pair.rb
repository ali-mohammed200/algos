# Udemy
# JavaScript Algorithms and Data Structures Masterclass
# Multiple Pointers - averagePair
# Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

# Bonus Constraints:

# Time: O(N)

# Space: O(1)

# Sample Input:

# averagePair([1,2,3],2.5) # true
# averagePair([1,3,3,5,6,7,10,12,19],8) # true
# averagePair([-1,0,3,4,5,6], 4.1) # false
# averagePair([],4) # false

def averagePair(arr, avg) 
    return false if (arr.empty?)

    arr.each_with_index do |first_element, i|
        for j in i...(arr.length)
            second_element = arr[j]
            return true if (average(first_element, second_element) == avg) 
        end
    end

    return false
end

def average(a, b)
    return (a + b) / 2
end

#My solution is O(n^2) :(