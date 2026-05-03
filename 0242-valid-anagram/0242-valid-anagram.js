/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map=new Map()
     const map2=new Map()
    for ( s_st of s){
        if(map.has(s_st)){
            const count = map.get(s_st)
            map.set(s_st,count+1)
        }else{
            map.set(s_st,1)
        }
        

    }
    for ( t_st of t){
        if(map2.has(t_st)){
            const count = map2.get(t_st)
            map2.set(t_st,count+1)
        }else{
            map2.set(t_st,1)
        }
        

    }
   if (map.size !== map2.size) return false;


    for (let [key, count] of map) {
    if (map2.get(key) !== count) {
        return false;
    }
}
    return true
    
};