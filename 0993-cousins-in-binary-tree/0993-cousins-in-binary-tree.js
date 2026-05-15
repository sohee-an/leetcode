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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if (!root) return false;

    let xInfo = null;  
    let yInfo = null;

    const queue = [[root, 1, null]];  

    while (queue.length > 0) {
        const [node, depth, parent] = queue.shift();

  
        if(node.val==x){
            xInfo={
                node,
                depth,
                parent
            }
        }
        if(node.val ===y){
            yInfo={
                node,
                depth,
                parent
            }
        }


        if (node.left)  queue.push([node.left, depth + 1, node]);
        if (node.right) queue.push([node.right, depth + 1, node]);
    }

    
    if(xInfo&&yInfo&& xInfo.depth ===yInfo.depth && xInfo.parent !== yInfo.parent){
        return true
    }
    return false
    
};