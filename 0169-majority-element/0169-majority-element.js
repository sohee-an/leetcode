/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const num_map=new Map()

    for (const num of nums){
        num_map.set(num,(num_map.get(num)||0)+1)
    }
    let maxNum=0
    let res;
    for (const [key,value] of num_map) {
        if(maxNum<value){
            maxNum = value  
            res=key
        }
        
    }

     return res
    
};