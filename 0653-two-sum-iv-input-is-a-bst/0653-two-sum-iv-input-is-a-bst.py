# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        q=deque()
        root_list=[]
        q.append(root)

        while q:
            cur=q.popleft()
            root_list.append(cur.val)

            if cur.left:
                q.append(cur.left)
        
            if cur.right:
                q.append(cur.right)
        

        
        print(root_list)
        sum=0
        for i in range(len(root_list)):
            for j in range(i + 1, len(root_list)):
                if root_list[i] + root_list[j] == k:
                    return True
      


        return False  