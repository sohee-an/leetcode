# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
            
        def dfs(root_node):
            if not root_node:
                return True
                
            q = deque()
            q.append((root_node.left, root_node.right))
            
            while q:
                left, right = q.popleft()
                
               
                if left is None and right is None:
                    continue
                
               
                if left is None or right is None:
                    return False
                
                
                if left.val != right.val:
                    return False
                
               
                q.append((left.left, right.right))   
                q.append((left.right, right.left))  
                
            return True
            
        return dfs(root)
    