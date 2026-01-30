/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if(nums.length <k) return 0
    
    let max_sum =0
    let cur_sum=0

    for (let i=0; i< k; i++){
        max_sum= (max_sum+nums[i])
        
    }
     cur_sum=max_sum

    for (let j=k; j<nums.length; j++){
        cur_sum = cur_sum - nums[j-k]+nums[j]

        max_sum= Math.max(max_sum,cur_sum)


    }

    return max_sum    /k
};