/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let s_set = new Set(['a','e','i','o','u']);
    let max_sum = 0;

   
    for (let i = 0; i < k; i++) {
        if (s_set.has(s[i])) {
            max_sum++;
        }
    }
    
   
    if (max_sum === k) return k;

    let temp_sum = max_sum;

  
    for (let i = k; i < s.length; i++) {
        if (s_set.has(s[i - k])) {
            temp_sum--;
        }
        if (s_set.has(s[i])) {
            temp_sum++;
        }
        
        
        if (temp_sum > max_sum) {
            max_sum = temp_sum;
            // 여기서 체크! max_sum이 k에 도달하면 더 볼 필요도 없습니다.
            if (max_sum === k) return k;
        }
    }

    return max_sum;
};