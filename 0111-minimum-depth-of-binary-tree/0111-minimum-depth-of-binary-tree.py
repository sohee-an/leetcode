# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        q=deque()
        q.append((root,1))
        if root is None:
            return 0

        while q:
            cur,lev=q.popleft()

            

            if cur.left is None and cur.right is None:
                return lev
            
            if cur.left :
                q.append((cur.left,lev+1))
            if cur.right:
                q.append((cur.right,lev+1))
            
        return lev