/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // Check if the length of the strings are the same
    if (s.length !== t.length) {
        return false; // Anagram must have the same length
    }
    const charCount = {};
    // Count characters in the first string
    for (char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    // Decreement the count of characters in the second string
    for (char of t) {
        if (!charCount[char]) {
            return false; // If the character is not in the first string
        }
        charCount[char]--;
    }

    // Check if all the characters count are zero
    return Object.values(charCount).every((count)=>count === 0)
};

// Example usage:
const s = "listen";
const t = "silent";
const result = isAnagram(s, t);
console.log(result); // Output: true