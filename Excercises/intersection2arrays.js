/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    // Hashmap to store the number of times a number appears in nums1
    const frequencyMap = {};
    const result = [];
    // Looping through nums1 and count the number of times a number appears
    for (const num of nums1) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Looping through nums2 and check if the number is in the hashmap
    for (const num of nums2) {
        // If the number is in the hashmap
        if (frequencyMap[num] > 0) {
            // Push the number to the result array
            result.push(num);
            // Decrement the count
            frequencyMap[num]--;
        }
    }
    return result;
};
/**
 * Explanation:
 * The frequency is decremented to ensure 
 * that each element in the result array 
 * represents the common elements between 
 * nums1 and nums2 according to their frequency of occurrence. 
 * The idea is that if an element occurs multiple times in both arrays, 
 * the intersection should include that element as many times as it occurs in both arrays.
 */

// Example
const nums1 = [1, 2, 2, 1, 8, 9];
const nums2 = [2, 2, 1, 7, 8];
const result = intersect(nums1, nums2);
console.log(result);  // Output: [ 2, 2, 1, 8 ]