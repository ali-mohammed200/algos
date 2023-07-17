# Udemy
# JavaScript Algorithms and Data Structures Masterclass
# Frequency Counter / Multiple Pointers - are_there_duplicates
# Implement a function called, are_there_duplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

# Examples:

# are_there_duplicates(1, 2, 3) # false
# are_there_duplicates(1, 2, 2) # true 
# are_there_duplicates('a', 'b', 'c', 'a') # true 
# Restrictions:

# Time - O(n)

# Space - O(n)

# Bonus:

# Time - O(n log n)

# Space - O(1)




# The difference between rest parameters and the arguments object
# There are three main differences between rest parameters and the arguments object:

# The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly.
# The arguments object has additional functionality specific to itself (like the callee property).
# The ...restParam bundles all the extra parameters into a single array, therefore it does not contain any named argument defined before the ...restParam. Whereas the arguments object contains all of the parameters — including the parameters in the ...restParam array — bundled into one array-like object.


# def are_there_duplicates(*args)
#     counter_obj = {}
#     args.each do |value|
#         counter_obj[value] = (counter_obj[value] ||= 0) + 1
#         return true if(counter_obj[value] > 1) 
#     end
#     return false
# end

# https://www.xpbytes.com/articles/control-flow-in-reduce-inject-ruby/

# Reduce/Inject will probably work better for me
# instead of creating an empty object and modifying later

# Cleaner and you can exit out of the reduce block
# using return to get out of the function
# next and break to break out of loop or next iteration

# def are_there_duplicates(*args)
#     puts "\n"
#     c = args.reduce({}) do |counter_obj, value|
#         puts counter_obj
#         counter_obj[value] = (counter_obj[value] ||= 0) + 1
#         return true if(counter_obj[value] > 1)
#         counter_obj 
#     end
#     puts "\n"
#     puts c
#     false
# end

def are_there_duplicates(*args)
    args.reduce({}) do |counter_obj, value|
        counter_obj[value] = (counter_obj[value] ||= 0) + 1
        return true if(counter_obj[value] > 1)
        counter_obj 
    end
    false
end

def test()
    puts(are_there_duplicates(1, 2, 3) == false) # false
    puts(are_there_duplicates(1, 2, 2) == true) # true 
    puts(are_there_duplicates('a', 'b', 'c', 'a', 'd') == true) # true 
end

test()