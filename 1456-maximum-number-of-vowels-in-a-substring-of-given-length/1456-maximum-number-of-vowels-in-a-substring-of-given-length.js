/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {

    let s_set =new Set(['a','e','i','o','u'])

    let max_sum=0
    for (let i=0;i<k; i++){
        if(s_set.has(s[i])){
            max_sum++
        }
    }
    let temp_sum=max_sum

    for (let i=k;i<s.length;i++){
         if(s_set.has(s[i-k])){
            temp_sum--
        }
        if(s_set.has(s[i])){
            temp_sum++
        }
        max_sum=Math.max(temp_sum,max_sum)
    }

    return max_sum
};