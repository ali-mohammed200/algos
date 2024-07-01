class Solution:
  def maxProductSubarray(self, List[int]) -> List[int]:
    # we have to keep track of the high and low because of the negative values
    # Dynamic Programming problem
    # The edge case is 0 and we reset to max and min to 1
    res = max(nums)
    curMin, curMax = 1, 1

    for n in nums:
        if n == 0:
          curmin, curMax = 1, 1
          continue

        temp = curMax
        curMax = max(n * temp, n * curMin, n) # The max could be current_number times max or min or itself
        curMin = min(n * temp, n * curMin, n) # The min could be current_number times max or min or itself
        res = max(res, curMax)
    return res

    # memory O(1)
    # time O(n)