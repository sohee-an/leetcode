# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getLonelyNodes(self, root: Optional[TreeNode]) -> List[int]:
        nodeValues=[]

        def dfs(node):
            if node is None:
                return
          

            if node.left and node.right is None:
                nodeValues.append(node.left.val)
            elif node.right and node.left is None:
                nodeValues.append(node.right.val)
            
            # if node.left is None and node.right is None:
            #     return 
            

            
            dfs(node.left)
            dfs(node.right)

        
        dfs(root)
        
        return nodeValues
        
