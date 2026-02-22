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
 * @return {number}
 */
var maxDepth = function(root) {
 
    function bfs(r,depth){
        if(!r){
            return depth
        }


    return Math.max(bfs(r.left,depth+1),bfs(r.right,depth+1))
    }
    return bfs(root,0)

    
    
};