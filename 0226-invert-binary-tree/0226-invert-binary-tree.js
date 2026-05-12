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
 * @return {TreeNode}
 */
var invertTree = function(root) {
if (!root) return null;
//왼쪽이랑 오른쪽 바꾸기 
   
    const queue=[root]

    while (queue.length>0){
        const node =queue.shift()

        if(node==null)continue;

        const temp = node.left       
        node.left = node.right      
        node.right = temp   

        queue.push(node.left)
        queue.push(node.right)
        
    }
   return root
};