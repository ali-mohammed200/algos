# 152. Maximum Product Subarray
# Solved
# Medium
# Topics
# Companies
# Given an integer array nums, find a
# subarray
#  that has the largest product, and return the product.

# The test cases are generated so that the answer will fit in a 32-bit integer.



# Example 1:

# Input: nums = [2,3,-2,4]
# Output: 6
# Explanation: [2,3] has the largest product 6.
# Example 2:

# Input: nums = [-2,0,-1]
# Output: 0
# Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


# Constraints:

# 1 <= nums.length <= 2 * 104
# -10 <= nums[i] <= 10
# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

# https://www.youtube.com/watch?v=lXVy6YWFcRM&list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf&index=6
# neetcode

# https://www.youtube.com/watch?v=i268ygVolps
# another guy Mayowa Daniel

# @param {Integer[]} nums
# @return {Integer}
def max_product(nums)
  max_product = nums.max
  current_min, current_max = 1, 1

  nums.each_with_index do |num, i|
      if num == 0
          current_min, current_max = 1, 1
          next
      end
      tmp = current_max * num
      current_max = [tmp, num * current_min, num].max
      current_min = [tmp, num * current_min, num].min

      max_product = [current_max, max_product].max
  end
  max_product
end
