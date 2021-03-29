# Reverse an Array
<!-- Short summary or background information -->


## Challenge
<!-- Description of the challenge -->
* Write a function called arrayShift which takes an array as an argument and a number. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
* make a function that takes in an array and a value, inserts the value into the middle of the array, and returns that array. the function first finds the middle of the array and defines a new array. with two parameters (arr, val) the for loop checks the iteration i against the "middle" variable and when it matches it inserts the val there and returns the new array.
## Solution
<!-- Embedded whiteboard image -->
![whiteboard-image](https://raw.githubusercontent.com/ahmadfrijat/data-structures-and-algorithms/master/img/reverse%20array.png)