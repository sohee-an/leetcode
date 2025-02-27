# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []
        q=deque([root])
        res=[]
        

        while q:
            size=len(q)
            max_num=-2147483650
            # max_num= float("-inf")

            for _ in range(size):
                cur=q.popleft()

                max_num = max(max_num, cur.val)
                

                if cur.left:
                    q.append(cur.left)
                if cur.right:
                    q.append(cur.right)


            res.append(max_num)
        return res
