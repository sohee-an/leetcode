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
var minDepth = function(root) {
    if(!root)return 0
    let deuqe=[]
    deque=[root]
    let depth=1
 while (deque.length > 0) {
    const size = deque.length; 

    for (let i = 0; i < size; i++) {
      const node = deque.shift();

      
      if (!node.left && !node.right) {
        return depth;
      }

      if (node.left) deque.push(node.left);
      if (node.right) deque.push(node.right);
    }

    depth++;
  }

return depth



    
};