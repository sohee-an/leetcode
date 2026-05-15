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
var isUnivalTree = function(root) {
    if(!root) return true

    const queue= [root]
    const val =root.val
    while(queue.length>0){
        const node= queue.shift()

        if(val !==node.val) return false

        if(node.left) queue.push(node.left)
        if(node.right)queue.push(node.right)
        
    }



    return true
    
};