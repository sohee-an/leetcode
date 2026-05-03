/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const s=new Set([...nums])
  
    console.log(nums.length)
    if(s.size===nums.length){
        return false
    }else{
        return true
    }
};