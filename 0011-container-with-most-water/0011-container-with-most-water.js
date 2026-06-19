/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start =0
    let end =height.length-1
    let sum=0
    while(start<end){
        
        if(height[start]>height[end]){
            let curSum =(end-start)*height[end]
             sum= Math.max(sum,curSum)
            end--
        }else{
             let curSum =(end-start)*height[start]
              sum= Math.max(sum,curSum)
            start++
        }

       

    }
    return sum
    
};