/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the cleaned string with its reverse
    return cleanedString === cleanedString.split('').reverse().join('');
};

// Example usage:
const input = "A man, a plan, a canal: Panama";
const result = isPalindrome(input);
console.log(result); // Output: true
