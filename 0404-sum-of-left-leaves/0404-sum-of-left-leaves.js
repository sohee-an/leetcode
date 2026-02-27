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


var sumOfLeftLeaves = function (root) {
  
   let queue=[root]
   let result =0

  
   while (queue.length>0){
      let node =queue.shift()

 
      if(node.left && !node.left.left && !node.left.right){
         result =result +node.left.val
      }


      if(node.left)queue.push(node.left)
      if(node.right)queue.push(node.right)

   }
   return result
}