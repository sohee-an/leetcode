# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        q = deque([root])
       
        cur_sum=0
        while q:
            cur =q.popleft()
            
            if cur.left and cur.left.left is None and cur.left.right is None :
                cur_sum+=cur.left.val

         

           
            if cur.left :
                q.append(cur.left)
            if cur.right:
                q.append(cur.right)
            


        return cur_sum
