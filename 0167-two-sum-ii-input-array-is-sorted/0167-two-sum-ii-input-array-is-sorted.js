/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start=0
    let end=numbers.length-1
    const res=[]
    while(start<end){
        if(numbers[start]+numbers[end]==target){
            res[0]=start+1
            res[1]=end+1
            return res
        }else if(numbers[start]+numbers[end]>target){
            end--
        }else{
            start++
        } 
    }
  
  
    return res
    
};