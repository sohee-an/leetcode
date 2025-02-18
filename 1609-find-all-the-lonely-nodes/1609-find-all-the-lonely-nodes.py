# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getLonelyNodes(self, root: Optional[TreeNode]) -> List[int]:
        nodeValues=[]
        if not root:
            return []

        q= deque([root])

        while q:
            cur=q.popleft()

            if cur.left and cur.right is None:
                nodeValues.append(cur.left.val)
            elif cur.right and cur.left is None:
                nodeValues.append(cur.right.val)
            
            if cur.left :
                q.append(cur.left)
            if cur.right:
                q.append(cur.right)


        # def dfs(node):
        #     if node is None:
        #         return
          

        #     if node.left and node.right is None:
        #         nodeValues.append(node.left.val)
        #     elif node.right and node.left is None:
        #         nodeValues.append(node.right.val)
            
        #     # if node.left is None and node.right is None:
        #     #     return 
            

            
        #     dfs(node.left)
        #     dfs(node.right)

        
        # dfs(root)
        
        return nodeValues
        
