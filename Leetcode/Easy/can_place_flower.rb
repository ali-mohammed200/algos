# 605. Can Place Flowers
# Easy

# Companies
# You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

# Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

# Example 1:

# Input: flowerbed = [1,0,0,0,1], n = 1
# Output: true
# Example 2:

# Input: flowerbed = [1,0,0,0,1], n = 2
# Output: false
 

# Constraints:

# 1 <= flowerbed.length <= 2 * 104
# flowerbed[i] is 0 or 1.
# There are no two adjacent flowers in flowerbed.
# 0 <= n <= flowerbed.length



# @param {Integer[]} flowerbed
# @param {Integer} n
# @return {Boolean}
def can_place_flowers(flowerbed, n)
    if n > flowerbed.length || n < 0
        return false
    end

    flowerbed.each_with_index do |flower, idx|
        if (n == 0)
            break
        end
        if (flower == 1)
            next
        end
        if (idx == 0 && flower == 0 && flowerbed[idx + 1] == 0)
            flowerbed[0] = 1
            n -= 1
        elsif (idx == flowerbed.length - 1 && flower == 0 && flowerbed[idx - 1] == 0)
            flowerbed[idx] = 1
            n -= 1
        elsif (flower == 0 && flowerbed[idx - 1] == 0 && flowerbed[idx + 1] == 0)
            flowerbed[idx] = 1
            n -= 1
        end
    end
    n == 0 ? true : false
end

# I am modifying the array and planting
# has to be O(n) time complexity
# n space complexity

# skipping the js of this because its just a bunch of if statements
# perhaps we can do a math way but you'll still need to traverse the array

# Instead of using that super long 'if condition'. Its better to add 0 at the start and end of the list.
# Makes it cleaner and easier to understand!