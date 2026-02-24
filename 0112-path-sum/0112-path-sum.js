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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root){
        return false
    }

   let que=[[root,root.val]]

   while(que.length>0){
    let [node,sum]=que.shift()

    if(!node.left &&!node.right){
        if(sum ==targetSum){
            return true
        }
    }
if (node.left) que.push([node.left, sum + node.left.val]);
    if (node.right) que.push([node.right, sum + node.right.val]);
   }
   
   return false
   
    
};