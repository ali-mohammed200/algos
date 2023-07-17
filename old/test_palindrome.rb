def palindrome
  large = 0
  999.downto(100) do |num_1|
    999.downto(100) do |num_2|
      result = num_1 * num_2
      puts "#{result} - #{num_1} - #{num_2} - #{large}"
      large = result if is_palindrome?(result.to_s) && result > large
      return large if large > result
    end
  end
end
def is_palindrome?(str)
  str == str.reverse
end

puts palindrome
