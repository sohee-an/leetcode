var isBalanced = function(root) {
    if (!root) return true;

    // 1. 위에서부터 depth를 들고 내려가며 최대 깊이를 찾는 함수
    function getMaxDepth(node, currentDepth) {
        if (!node) {
            return currentDepth; // 더 이상 노드가 없으면 지금까지 쌓인 깊이 반환
        }

        // 왼쪽으로 갈 때도 1층 추가, 오른쪽으로 갈 때도 1층 추가
        let left = getMaxDepth(node.left, currentDepth + 1);
        let right = getMaxDepth(node.right, currentDepth + 1);

        // 둘 중 더 깊은 곳의 값을 위로 전달
        return Math.max(left, right);
    }

    let left_depth = getMaxDepth(root.left, 0);
    let right_depth = getMaxDepth(root.right, 0);


    let diff = Math.abs(left_depth - right_depth);
    
    return diff <= 1 && isBalanced(root.left) && isBalanced(root.right);
};