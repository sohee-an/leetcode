/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    let sPoint=0
    let tPoint=0
    let count=0

    while(tPoint<t.length){
        if(s[sPoint]!==t[tPoint]){
            tPoint++
        }else{
            sPoint++
            tPoint++
            count++
        }
    }

    if(count==s.length){
        return true
    }
    return false


};