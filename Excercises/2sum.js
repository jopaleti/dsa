// Finding the Two Sum algorithm given an array of integers num and target

/**
QUESTION:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 

Solution & method:
Note: you can use hash table to solve this problem.
Since an array of integers is given and we are to return the indices of the summation of two numbers therefore "HASHMAP" will be the most effective
**/

// Solution
/**
 * Algorithm
 * let y be numIndices
 * complement + y = target
 * x = target - complement
 * @param {*} num
 * @param {*} target
 **/

var twoSum = function (nums, target) {
  // Create a map variable to store complement as a KEY and number indices as a VALUE
  const numIndices = new Map();

  // Loop through the entire numIndices first
  for (let i=0; i < nums.length; i++) {
    // Get the two numbers that when added together will give the TARGET
    // Call the numbers "COMPLEMENT" and "NUM[i]"
    const complement = target - nums[i];
    // Check if numIndices contain the complement as key
    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    }
    // Store num[i] in the map as KEY and i as VALUE
    numIndices.set(nums[i], i);
  }

  return [];
};

console.log(twoSum([1, 2, 3, 4, 5, 6, 0, 2], 3));
