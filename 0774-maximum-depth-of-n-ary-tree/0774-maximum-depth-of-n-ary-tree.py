"""
# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children
"""

class Solution:
    def maxDepth(self, root: 'Node') -> int:
        if root is None:
            return 0
        res=0 
        q=deque()
        q.append((root,1))
        


        while q:
            cur,lev=q.pop()

            res=max(res,lev)
            
            for node in cur.children:
                q.append((node,lev+1))
            
                

        return res