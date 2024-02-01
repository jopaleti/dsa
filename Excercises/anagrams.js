var groupAnagrams = function (strs) {
    // Defining the hashmap
    const anagramsGroup = {};

    // Looping through the list
    for (const str of strs) {
        // Sort the character of the word to create a key
        const sortedKey = str.split("").sort().join("");

        // Check if the key already exist in the hash table
        if (anagramsGroup[sortedKey]) {
            // If the key existed
            anagramsGroup[sortedKey].push(str);
        } else {
            // Create a new group with current key
            anagramsGroup[sortedKey] = [str];
        }
    }

    // Converting the values of the hash table to array of arrays
    const result = Object.values(anagramsGroup);
    return result;
};


// Example usage:
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(words);
console.log(groupedAnagrams);