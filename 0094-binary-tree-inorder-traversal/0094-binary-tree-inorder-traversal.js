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
var inorderTraversal = function(root) {
    //중위 왼쪽- 현재 -오른쪽

  const result = [];

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  };

  dfs(root);
  return result;
    
};