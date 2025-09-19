class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        q= deque()
        m, n = len(mat), len(mat[0])
        dx=[-1,1,0,0]
        dy=[0,0,1,-1]

           
        dist = [[float('inf')] * n for _ in range(m)]

        # 0인 칸은 시작점 (거리=0), 큐에 넣기
        for i in range(m):
            for j in range(n):
                if mat[i][j] == 0:
                    dist[i][j] = 0
                    q.append((i, j))
        while q:
            cx, cy = q.popleft()
            for k in range(4):  
                nx, ny = cx + dx[k], cy + dy[k]
                if 0 <= nx < m and 0 <= ny < n:
                    if dist[nx][ny] > dist[cx][cy] + 1:
                        dist[nx][ny] = dist[cx][cy] + 1
                        q.append((nx, ny))

        return dist

        
       