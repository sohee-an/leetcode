/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let s_arr=s.split("")
    console.log(s_arr)

    let str_obj={}
    const map = { ')': '(', '}': '{', ']': '[' };

    const stack=[]
    let result=true
    for(let char of s){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char)
        }else{
     if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

if(stack.length===0){
    result=true
}else{
    result=false
}
    return result
    
};