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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root){
        return []
    }
    let result=[]
    //루트 왼 오
    function dfs(r){
        if(!r){
            return result
        }

        result.push(r.val)
        if(r.left) dfs(r.left)
        if(r.right) dfs(r.right)

    }
    dfs(root)

    return result
    
};