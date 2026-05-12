/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root)return true

    const queue= [[root.left,root.right]]

    while (queue.length>0){
        const [left,right] =queue.shift()

        if (left === null && right === null) continue

        if(left==null || right===null) return false
        // if(left.left && !right.right) return false
        // if(left.right && !right.left) return false
        
      
        if(left.val != right.val){
            return false
        }
      

        queue.push([left.left,right.right]) 
       queue.push([left.right,right.left]) 

       
        
    }
     
    return true
};