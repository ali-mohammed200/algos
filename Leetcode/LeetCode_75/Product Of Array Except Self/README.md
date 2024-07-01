Product of Array Except Self
https://youtu.be/bNvIQI2wAjk?si=BnjLzOiLMy1m3dk3
Neetcode Video Tutorial
Input = 
1	2	3	4

Output = 
24	12	8	6

The algorithm is to get the prefix and postfix and multiply those two together:
For ones, who did not understand how prefix-postfix works,
 lets change 1, 2, 3, 4 positions to symbols like a, b, c, d, so multiplying will be: 
input = 
a	b	c	d

prefix: -> | a | a*b | a*b*c | a*b*c*d | 


postfix: <- | a*b*c*d | b*c*d | c*d | d |


 the result is a multiply without the symbol in own position (the left value from prefix and the right one from postfix):
 | b*c*d | a*c*d | a*b*d | a*b*c |



When doing the calculation with a single result array because the output does not count as extra memory the prefix and postfixes will not contain the last value
Calculating prefix and storing in result array (the loop goes for left to right = normal loop)
Result =
1	1	2	6

Now calculating postfix and storing the result to get the final product array except self
The loop goes from right to left (reverse loop now)
current_num = 1
prefix  = 1

res[length – i - 1] (calculated prefix) * postfix.
1 * 24 = 24

end of loop	current_num = 2
prefix  = 1

res[length – i - 1] (calculated prefix) * postfix.
1 * 12 = 12


then postfix is calculated to be postfix *= current input num

postfix is now 12 * 2
24	current_num = 3
prefix  = 2

current result =  res[length – i - 1] (calculated prefix) * postfix.
2 * 4 = 8

then postfix is calculated to be postfix *= current input num

postfix now is calculated 4 * 3
12

	current_num = 4
prefix  = 6

res[length – i - 1] (calculated prefix) * postfix. nothing to the right so postfix is 1.
6 * 1 = 6. then postfix is calculated to be postfix *= current input num

postfix is now 4
1 * 4 = 4

Result
24	12	8	6

#### Ruby Code
```ruby
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
```
 
#### Python Code
```python
class Solution
  def productExceptSelf(self, nums: List[int]) -> List[int]:
    res = [1] * (len(nums))

    prefix = 1
    for i in range(len(nums)):
      res[i] = prefix
      prefix *= nums[i]
    
    postfix = 1
    for i in range(len(nums) - 1, -1, -1):
      res[i] *= postfix
      postfix *= nums[i]
    return res
```
 


 




