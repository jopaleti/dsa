var firstUniqChar = function (s) {
  // Declaring the hashmap
  const charCount = {};
  // Looping through the string
  for (let i = 0; i < s.length; i++) {
    // If the character is not in the hashmap
    if (!charCount[s[i]]) {
      // Add it to the hashmap
      charCount[s[i]] = 1;
    } else {
      // Else increment the count
      charCount[s[i]]++;
    }
  }
  // Looping through the string again to find the first unique character
  for (let i = 0; i < s.length; i++) {
    // If the character count is 1
    if (charCount[s[i]] === 1) {
      // Rerurn the index
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar("leetcode"));
