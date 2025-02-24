# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        
        q=deque([root])
        tree_list=[]
        tree_list.append(root.val)

        while q:
            cur  =q.popleft()

            if cur.left:
                tree_list.append(cur.left.val)
                q.append(cur.left)
            if cur.right:
                tree_list.append(cur.right.val)
                q.append(cur.right)
           
        res=10000000000000000000000
        
        for i in range(len(tree_list)):
            for j in range(i+1,len(tree_list)):
                num=abs(tree_list[i]-tree_list[j])
                res=min(res,num)
        return res