/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    function dfs(p, q) {
        // 둘 다 null이면 같음
        if (p == null && q == null) {
            return true;
        }
        
        // 하나만 null이면 다름
        if (p == null || q == null) {
            return false;
        }
        
        // 값이 다르면 다름
        if (p.val !== q.val) {
            return false;
        }
        
        // 왼쪽과 오른쪽 서브트리 모두 같아야 함
        return dfs(p.left, q.left) && dfs(p.right, q.right);
    }
    
    return dfs(p, q);
};

