# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        
        if root is None:
            
            return False
        
        q= deque()
        q.append((root,root.val))
       

        while q:
            cur,result=q.popleft()
            print(result)

            if cur.left is None and cur.right is None:
                if result == targetSum:
                    return True

            
        

            if cur.left:
                q.append((cur.left,result+cur.left.val))
            if cur.right:
                q.append((cur.right,result+cur.right.val))
            
        return False
        

