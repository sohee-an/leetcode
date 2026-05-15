/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  
    if(!root) return 0
  
    let maxDepth =0
    const queue = [[root,1]]
    while(queue.length >0){
        const [node,depth]=queue.shift()

        maxDepth=Math.max(maxDepth,depth)

     if (node.children) {
    for (const child of node.children) {
        queue.push([child, depth + 1]);
    }
}
        
        
    }
    return maxDepth
    
};