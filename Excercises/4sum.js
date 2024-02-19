/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const numIndices = new set();
    
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < i + 2; j++) {
            if (
              nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] - target ==
              0
            ) {
                numIndices.add(nums[i], i);
            }
        }
    }
};
