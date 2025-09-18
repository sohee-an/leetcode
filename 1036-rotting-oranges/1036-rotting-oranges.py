class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        dx=[-1,1,0,0]
        dy=[0,0,1,-1]


        q=deque()
        m=len(grid)
        n=len(grid[0])
        result=1


        fresh=0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j]==2:
                    q.append([i,j])
                if grid[i][j]==1:
                    fresh+=1

    
        minutes = 0

       
        while q:
            for _ in range(len(q)):   
                x, y = q.popleft()
                for k in range(4):
                    nx, ny = x + dx[k], y + dy[k]
                    if 0 <= nx < m and 0 <= ny < n and grid[nx][ny] == 1:
                        grid[nx][ny] = 2
                        fresh -= 1
                        q.append((nx, ny))
            if q:   # 이번 레벨에서 전염이 일어났다면 시간 +1
                minutes += 1

       
        return minutes if fresh == 0 else -1  
        




        




