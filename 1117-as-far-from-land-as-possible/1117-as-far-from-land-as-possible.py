class Solution:
    def maxDistance(self, grid: List[List[int]]) -> int:
        q = deque()
        m, n = len(grid), len(grid[0])
        dx = [-1, 1, 0, 0]
        dy = [0, 0, 1, -1]

        dist = [[float('inf')] * n for _ in range(m)]


        for i in range(m):
            for j in range(n):
                if grid[i][j]==1:
                    dist[i][j]=0
                    q.append([i,j])


        while q:
            cx,cy=q.popleft()
            for i in range(4):
                nx,ny= cx+dx[i],cy+dy[i]
                if 0<=nx<m and 0<=ny<n:
                    if dist[nx][ny]> dist[cx][cy]+1:
                        dist[nx][ny]=dist[cx][cy]+1
                        q.append([nx,ny])
                    
        
        result =-1
        for i in range(len(dist)):
            for j in range(len(dist[0])):
                if grid[i][j] == 0:  
                    result = max(result,dist[i][j])

     
        return -1 if result == float('inf') else result