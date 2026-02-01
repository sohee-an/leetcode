/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {

    let min_sum=0
  
    for (let i =0; i<k;i++){
        if(blocks[i]!=="B"){
            min_sum ++
        }
    }
    let temp_sum= min_sum


    for(let i=k; i<blocks.length;i++){
        if(blocks[i-k]=="W"){
            temp_sum--
        }
        if(blocks[i]=="W"){
            temp_sum++
        }
        min_sum=Math.min(temp_sum,min_sum)

    }

    return min_sum

    
};