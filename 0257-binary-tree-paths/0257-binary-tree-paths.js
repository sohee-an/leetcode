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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return [];
    
    let result = [];
  
    let stack = [[root, root.val + ""]]; 

    while (stack.length > 0) {
      
        let [node, cur_str] = stack.pop();

      
        if (!node.left && !node.right) {
            result.push(cur_str);
        }

      
        if (node.right) {
            stack.push([node.right, cur_str + "->" + node.right.val]);
        }
        if (node.left) {
            stack.push([node.left, cur_str + "->" + node.left.val]);
        }
    }

    return result;
};