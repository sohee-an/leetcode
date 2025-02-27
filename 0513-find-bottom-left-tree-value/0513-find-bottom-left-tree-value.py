# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        q=deque([(root,0)])
        last_lev=0
        last_value=root.val

        while q:
            
            cur,lev=q.popleft()

            
            if lev>last_lev:
                last_lev=lev
                last_value=cur.val
            
            
            if cur.left:
                q.append((cur.left,lev+1))
            if cur.right:
                q.append((cur.right,lev+1))

        
        return last_value