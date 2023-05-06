/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let size = nums.length;
    let indices = [];
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            if(j !== i && nums[i]+nums[j]===target){
                indices = [i,j];
                break;
            }
        }
    }
    return indices;
};
