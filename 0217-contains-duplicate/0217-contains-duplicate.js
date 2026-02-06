/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        
     
        if (hash[cur] !== undefined) {
            return true; // 발견하는 즉시 종료
        }
        

        hash[cur] = true;
    }

  
    return false;
};