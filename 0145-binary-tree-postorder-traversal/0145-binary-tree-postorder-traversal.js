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
var postorderTraversal = function(root) {
    if(!root)return []
    let result=[]

    function bfs(r){
        if(!r){
            return 
        }
        if(r.left) bfs(r.left)
        if(r.right) bfs(r.right)
        result.push(r.val)


        
    }
    bfs(root)
    return result


    



    
};