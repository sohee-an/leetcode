# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        result=[]
        q=deque()
        q.append(root)



        while q:
            size=len(q)
            level_sum=0
           
            
            for _ in range(size):
                node=q.popleft()
                level_sum += node.val

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)

            result.append(level_sum/size)

        return result
            






            

        bfs(cur,0,count)


        return result
