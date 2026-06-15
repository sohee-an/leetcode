/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let start =0
    let end = s.length-1
 

    while(start<end){
        if(s[start]==s[end]){
            start++
            end--
        }else{
            return false
        }
    }
    return true
    
};