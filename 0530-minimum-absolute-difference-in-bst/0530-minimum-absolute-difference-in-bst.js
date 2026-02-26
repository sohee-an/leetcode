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

//root이진 탐색 트리(BST)의 노드가 주어졌을 때 
// 트리의 서로 다른 두 노드 값 사이의 최소 절댓값 차이를 반환합니다 .
var getMinimumDifference = function (root) {
    //bst 는 왼쪽이 작은수 오른쪽이 큰수
    let tree_arr=[]

    let queue=[root]
  
    while(queue.length>0){
        let node=queue.shift()

        tree_arr.push(node.val)

        if(node.left)queue.push(node.left)
        if(node.right)queue.push(node.right)



    }


    tree_arr.sort((a, b) => a - b);
    let minDiff = Infinity; // 처음엔 아주 큰 값으로 설정
    for (let i = 1; i < tree_arr.length; i++) {
      let diff = tree_arr[i] - tree_arr[i - 1];
      if (diff < minDiff) {
        minDiff = diff;
      }
    }

    return minDiff;

    
};
