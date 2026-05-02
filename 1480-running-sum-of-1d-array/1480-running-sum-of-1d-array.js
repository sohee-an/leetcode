/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
   const res =nums.reduce((acc,curr)=>{ 
        if(acc.length ==0){
            acc.push(curr)
        }else{
            acc.push(acc[acc.length-1]+curr)
        }
        

   return acc
   },[])
    return res
};