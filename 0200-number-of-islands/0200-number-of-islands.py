from collections import deque
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        # 육지1 물 0
        result=0
        dy = [-1, 0, 1, 0]
        dx = [0, 1, 0, -1]
        
        def dfs(x,y):
            q=deque()
            q.append((x,y))
            grid[x][y] = "0" 

            while q:
                cx,cy =q.pop()
                for i in range(4):
                    nx=cx+dx[i]
                    ny=cy+dy[i]

                    # if 0 <= ny < len(grid) and 0 <= nx < len(grid[0]) and  grid[nx][ny]!="0":
                    if 0 <= nx < len(grid) and 0 <= ny < len(grid[0]) and grid[nx][ny] == "1":   
                        grid[nx][ny] = "0" 
                        q.append((nx,ny))



        for i  in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j]=="1":
                    result+=1
                    dfs(i,j)

        return result