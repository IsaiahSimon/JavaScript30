# Sum without highest and lowest number

# Description
# Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

# The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

# Mind the input validation.

# Example
# { 6, 2, 1, 8, 10 } => 16
# { 1, 1, 11, 2, 3 } => 6
# Input validation
# If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

# My solution
def sum_array(arr)
  if arr == nil
    0
  elsif arr.empty?
    0
  elsif arr.length == 1
    0
  else
    arr.reduce(:+) - arr.max - arr.min
  end
end

# Refactoring
def sum_array(arr)
  (arr == nil || arr.empty? || arr.length == 1) ? 0 : arr.reduce(:+) - arr.max - arr.min
end

# Top solutions
#1
def sum_array(arr)
  if arr.kind_of?(Array) and arr.length > 2
    arr.inject(:+) - arr.min - arr.max
  else
    0
  end
end

#2
def sum_array(arr)
  arr.nil? || arr.empty? ? 0 : arr.sort[1..-2].reduce(0, :+)
end

#3
def sum_array(arr)
  return 0 if arr == nil
  arr.length < 3 ? 0 : arr.sort!.inject(0, :+) - arr[0] - arr[-1]
end
