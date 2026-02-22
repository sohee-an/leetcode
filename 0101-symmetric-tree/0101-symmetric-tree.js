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
    
    
    function bfs(q,p){

        if(q==null&&p==null){
            return true
        }
        if(q==null | p==null){
            return false
        }
        if(q.val !==p.val){
            return false
        }
        
        return bfs(q.left,p.right)&& bfs(q.right,p.left)

    }

    return bfs(root.left,root.right)
    
};