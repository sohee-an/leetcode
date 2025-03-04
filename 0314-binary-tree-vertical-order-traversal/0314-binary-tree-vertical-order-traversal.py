# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def verticalOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []
        q=deque()
        q.append((root,0))
        res_dic=defaultdict(list) 

        while q:
            cur,index = q.popleft()
            
            # if index not in res_dic:
            #     res_dic[index] = []

            res_dic[index].append(cur.val)

            if cur.left:
                
                q.append((cur.left,index-1))

            if cur.right:
                 q.append((cur.right,index+1))
            

            

        print(res_dic)
        res=[]
        for i in sorted(res_dic.keys()):
            res.append(res_dic[i])
        return res

        return []