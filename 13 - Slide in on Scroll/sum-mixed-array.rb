# Sum mixed array

# Description
# Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

# Return your answer as a number.



# My solution
def sum_mix(x)
  x.map{|n| n.to_i}.reduce(:+)
end

# Refactoring


# Top solutions
#1
def sum_mix(x)
  x.sum(&:to_i)
end

#2
def sum_mix(x)
  x.map(&:to_i).inject(:+)
end


#3
def sum_mix(x)
  x.reduce(0) { |sum, item| sum + item.to_i }
end
