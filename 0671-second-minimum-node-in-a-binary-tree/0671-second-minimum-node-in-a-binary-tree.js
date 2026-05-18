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
var findSecondMinimumValue = function(root) {
    if(!root)return -1
    const s= new Set()
    const queue = [root]

    while (queue.length>0){
        const node=queue.shift()
        s.add(node.val)

        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)

    }

    const sArr= [...s].sort((a,b)=>a-b)
    console.log(s)

    if(sArr.length <=1) {
        return -1
    }else{
        return sArr[1]
    }
};