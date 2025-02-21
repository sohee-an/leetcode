class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
    
        dx=[-1,1,0,0]
        dy=[0,0,1,-1]

        q=deque([(sr,sc)])
        m = len(image)      
        n = len(image[0])   # 열의 개수


        visited = [[False] * n for _ in range(m)]
        visited[sr][sc]=True
        c_color = image[sr][sc]
        image[sr][sc]=color

        while q:
            x,y=q.popleft()
            visited[x][y]=True
            for i in range(4):
                nx=dx[i]+x
                ny=dy[i]+y

                if 0<=nx<m and 0<=ny<n and image[nx][ny]==c_color and visited[nx][ny]==False :
                    image[nx][ny]= color
                    q.append((nx,ny))


        return image