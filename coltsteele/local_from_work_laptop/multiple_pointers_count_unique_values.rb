# Udemy
# JavaScript Algorithms and Data Structures Masterclass
# Multiple Pointers - count_unique_values
# Implement a function called count_unique_values, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.


# Time Complexity - O(n)

# Space Complexity - O(n)

# Bonus

# You must do this with constant or O(1) space and O(n) time.

# function count_unique_values(array) {
#     let count = 0;
#     let prevElement = array[0];
#     if(array.length == 0){
#         return count;
#     }
#     for(let index = 0; index < array.length; index++) {
#         const currentElement = array[index];
#         if(prevElement != currentElement){
#             count++;
#         }
#         prevElement = currentElement;
#     }
#     return count + 1;
# }

def count_unique_values(array)
    return 0 if array.length == 0

    count = 0
    prev_element = array[0]
    array.each do |current_element|
        count += 1 if prev_element != current_element
        prev_element = current_element
    end
        
    return count + 1
end


def test
    puts (count_unique_values([1,1,1,1,1,2]) == 2) # 2
    puts (count_unique_values([1,2,3,4,4,4,7,7,12,12,13]) == 7) # 7
    puts (count_unique_values([]) == 0) # 0
    puts (count_unique_values([-2,-1,-1,0,1]) == 4) # 4
end

test
