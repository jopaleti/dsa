/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    // Defining the data structure direction
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];

        // Centralising the pointer
        left++;
        right--;
    }
};

// Example usage:
let inputString = ["H", "e", "l", "l", "o"];
reverseString(inputString);
console.log(inputString);