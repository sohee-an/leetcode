# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isUnivalTree(self, root: Optional[TreeNode]) -> bool:
        q=deque([root])

        while q:
            cur= q.popleft()

            
            if cur.left:
                if cur.val !=cur.left.val:
                    return False
                else:
                    q.append(cur.left)
            if cur.right:
                if cur.val !=cur.right.val:
                    return False
                else:
                    q.append(cur.right)
        return True