/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    const result = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let start=0
    let end =result.length -1

    while (start<end){
        if(result[start]!=result[end]){
       
            return false
        }else{
            start++
            end--
        }
    }
    return true
};