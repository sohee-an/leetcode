/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length)return false
    let length=s.length-1
    let result =true
    let s_arr=s.split("").sort()
    let t_arr=t.split("").sort()
   
    console.log(s)
    console.log(t)
    for(let i=0;i<s.length;i++){
        if(s_arr[i]!==t_arr[i]){
            result=false
            return false
        }
    }

    return result
    
};