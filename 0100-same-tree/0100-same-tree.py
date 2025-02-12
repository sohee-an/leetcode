# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
       
        p_visited=[]
        q_visited=[]



        def bfs(p_node,q_node):
            if p_node is None and q_node is None:
                return True

            if p_node is None or q_node is None:
                return False

            
            q=deque()
            q.append((p_node,q_node))
           

            while q:
                cur_p, cur_q=q.popleft()
                
                p_visited.append(cur_q)
                q_visited.append(cur_p)

                if cur_p.val != cur_q.val:
                    return False

                if cur_p.left and cur_q.left:
                    q.append((cur_p.left, cur_q.left))
                elif cur_p.left or cur_q.left:
                    return False

                if cur_p.right and cur_q.right:
                    q.append((cur_p.right, cur_q.right))
                elif cur_p.right or cur_q.right:
                    return False

            return True 

        return bfs(p,q)

            



    

  

