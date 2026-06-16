/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

    

    function solution(str){
        const stack=[]
        for (const s of str){
            if(s=="#"){
                stack.pop()
            }else{
            stack.push(s)
            }
           
        }
        
        return stack.join('')
    }

    if(solution(s)==solution(t)){
        return true
    }
    return false


    
};