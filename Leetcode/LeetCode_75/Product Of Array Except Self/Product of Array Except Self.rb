# 238. Product of Array Except Self
# Medium
# Topics
# Companies
# Hint
# Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

# You must write an algorithm that runs in O(n) time and without using the division operation.



# Example 1:

# Input: nums = [1,2,3,4]
# Output: [24,12,8,6]
# Example 2:

# Input: nums = [-1,1,0,-3,3]
# Output: [0,0,9,0,0]


# Constraints:

# 2 <= nums.length <= 105
# -30 <= nums[i] <= 30
# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


# Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

# https://youtu.be/bNvIQI2wAjk?si=yx7aL9-t9p3Qm3SH

# Neetcode

# The algorithm is basically get all the products to the left of num x not including x and all the products
# to the right not including x and then multiply those two together.
# basically skipping x while doing the multiplication

# @param {Integer[]} nums
# @return {Integer[]}
def product_except_self(nums)
  prefix = []
  postfix = []

  total = 1
  nums.each_with_index do |num, i|
      prefix[i] = total
      total *= num
  end

  total = 1
  nums.reverse_each.with_index do |num, i|
      postfix[nums.length - 1 - i] = total
      total *= num
  end

  nums.map.with_index do |num, i|
      num = prefix[i] * postfix[i]
  end
end



# Code that I wrote after taking notes using two arrays
# it is different from the one on top because the postfix and prefix are different
# The difference seems to be that I am storing the prefix and postfix in the same slot instead of
# needing to do and times of prefix[index + 1] and postfix[index -1]

# If done right, you can remove the if statement and even remove the result array and just use the original input

def product_except_self(nums)
    prefix = []
    postfix = []
    res = []
    prefix_product = 1
    nums.each_with_index do |current, i|
        prefix_product = prefix_product * current
        prefix[i] = prefix_product
    end

    postfix_product = 1
    nums.reverse_each.with_index do |current, i|
        postfix_product = postfix_product * current
        postfix[nums.length - 1 - i] = postfix_product
    end

    p prefix
    p postfix

    nums.each_with_index do |current, i|
        pre = i == 0 ? 1 : prefix[i - 1]
        post =  i == nums.length - 1 ? 1 : postfix[i + 1]
        res[i] = pre  * post
    end
    p res
end

# input = [1, 2, 3, 4]
# prefix = [1, 2, 6, 24]
# postfix = [24, 24, 12, 4]
#                               prefix[index - 1] * postfix[index + 1]
# output = [24, 12, 8, 6]


def product_except_self(nums)
    prefix = []
    postfix = []

    prefix_product = 1
    nums.each_with_index do |current, i|
        prefix[i] = prefix_product
        prefix_product = prefix_product * current
    end

    postfix_product = 1
    nums.reverse_each.with_index do |current, i|
        postfix[nums.length - 1 - i] = postfix_product
        postfix_product = postfix_product * current
    end

    p prefix
    p postfix

    nums.map.with_index do |current, i|
        prefix[i]  * postfix[i]
    end
end

# input = [1, 2, 3, 4]
# prefix = [1, 1, 2, 6]
# postfix = [24, 12, 4, 1]
#                               prefix[i] * postfix[i]
# output = [24, 12, 8, 6]


# Basically replacing postfix and prefix with a result array and doing the calculations there
def product_except_self(nums)
    res = []
    prefix_product = 1
    nums.each_with_index do |current, i|
        res[i] = prefix_product
        prefix_product = prefix_product * current
    end

    p res
    postfix_product = 1
    nums.reverse_each.with_index do |current, i|
        res[nums.length - 1 - i] = res[nums.length - 1 - i] * postfix_product
        postfix_product = postfix_product * current
    end

    return res
end


# For ones, who did not understand how prefix-postfix works, lets change 1, 2, 3, 4 positions to symbols like a, b, c, d, so multiplying will be:
# prefix:
# ->
# |       a       |   a*b   | a*b*c | a*b*c*d |
# postfix:
# <-
# | a*b*c*d | b*c*d |   c*d   |      d        |

# the result is a multiply without the symbol in own position (the left value from prefix and the right one from postfix):
# |    b*c*d  | a*c*d | a*b*d |   a*b*c   |
