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

    if(!p&&!q) return true
    if(!p || !q) return false

    const queue=[[p,q]]
    
    while(queue.length>0){
        const [pNode,qNode]=queue.shift()

        if(pNode==null && qNode==null) continue 
        if(pNode ==null || qNode ==null) return false
        if(pNode.val!=qNode.val) return false

        queue.push([pNode.left,qNode.left])
        queue.push([pNode.right,qNode.right])
    }
    
    return true
};