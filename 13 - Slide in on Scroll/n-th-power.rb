# N-th Power

# Description
# This kata is from check py.checkio.org

# You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

# Let's look at a few examples:

# array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
# array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

# My solution
def index(array, n)
  array[n] == nil ? -1 : array[n]**n
end

# Refactoring


# Top solutions
#1
def index(array, n)
  array.length > n ? array[n]**n : -1
end

#2
def index(arr, n)
  arr[n] ** n rescue -1
end

#3
def index(array, n)
  n >= array.length ? -1: array[n] ** n
end
