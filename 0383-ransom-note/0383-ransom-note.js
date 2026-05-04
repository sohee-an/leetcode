/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magMap = new Map()
    const ranMap= new Map()
    

    for (const m of magazine){
        magMap.set(m,(magMap.get(m)||0)+1)
    }

     for (const m of ransomNote){
        if(magMap.get(m)>0){
            magMap.set(m,(magMap.get(m))-1)
        }else{
            return false
        }
    }


   return true
    
};