/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let s_stack=[]
    let t_stack=[]

    for (char of s){
        if(char=="#"){
            s_stack.pop()
        }else{
               s_stack.push(char)
        }
     
    }
        for (char of t){
            console.log(char)
        if(char=="#"){
            t_stack.pop()
        }else{
        t_stack.push(char)
        }
       
    }

    const s_str = s_stack.join("");
      const t_str = t_stack.join("");


      return s_str==t_str

    
};