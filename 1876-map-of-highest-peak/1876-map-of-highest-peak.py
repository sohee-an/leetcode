class Solution:
    def highestPeak(self, isWater: List[List[int]]) -> List[List[int]]:
        dx=[-1,1,0,0]
        dy=[0,0,1,-1]
        q=deque()
        m=len(isWater)
        n=len(isWater[0])

        dist = [[float('inf')] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                if isWater[i][j]==1:
                    dist[i][j]=0
                    q.append([i,j])

        while q:
            cx,cy=q.popleft()
            for i in range(4):
                nx,ny=cx+dx[i],cy+dy[i]
                if 0<=nx<m and 0<=ny<n:
                    if dist[nx][ny]>dist[cx][cy]+1:
                        dist[nx][ny]=dist[cx][cy]+1
                        q.append([nx,ny])
        return dist
