# Remove Exclamation Marks

# Description
# Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

# My solution
def remove_exclamation_marks(s)
  s.gsub('!','')
end

# Refactoring


# Top solutions
#1
def remove_exclamation_marks(s)
  s.delete('!')
end

#2
def remove_exclamation_marks(s)
  s.gsub(/!/, '')
end

#3
def remove_exclamation_marks(s) s.gsub("!","") end
