# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isCousins(self, root: Optional[TreeNode], x: int, y: int) -> bool:
        q=deque()
        q.append((root,0,0))
        x_info=[]
        y_info=[]

        #  그니깐 부모만 달라야함 근데 깊이는 같아야함
        def dfs(node,level,parent):
            

            
            if node is None:
                return
         
            
            if  node.val and node.val == x:
                x_info.append((level,parent))
            if node.val and node.val == y:
                y_info.append((level,parent))
                
            
            

            dfs(node.left,level+1,node.val)
            dfs(node.right,level+1,node.val)

        dfs(root,0,None)

        if not x_info or not y_info:
            return False

        x_level, x_parent = x_info[0]
        y_level, y_parent = y_info[0]
    
        return x_level == y_level and x_parent != y_parent

        