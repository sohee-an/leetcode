/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    const map_s=new Map()
    for (const str of s){
    
            map_s.set(str, (map_s.get(str)||0)+1)
        
    }
   for (let i = 0; i < s.length; i++) {
        if (map_s.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
    
};