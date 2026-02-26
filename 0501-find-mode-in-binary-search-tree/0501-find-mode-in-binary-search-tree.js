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
var findMode = function (root) {

    //가장 많은 중복값을 
    let hash={}

    let queue=[root]

    while(queue.length > 0){
        let node =queue.shift()

         hash[node.val] = (hash[node.val] || 0) + 1;

      if(node.left)queue.push(node.left)
      if(node.right)queue.push(node.right)
    }

  let values = Object.values(hash);
  const maxCount = Math.max(...values);


  let result = [];
  for (let key in hash) {
    if (hash[key] === maxCount) {
      result.push(Number(key)); 
    }
  }

  return result;


};
