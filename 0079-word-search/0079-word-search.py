class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        m = len(board)
        n = len(board[0])
        visited = [[False] * n for _ in range(m)]
        dx = [-1, 1, 0, 0]
        dy = [0, 0, -1, 1]
        
        def dfs(x, y, idx):
            if idx == len(word):
                return True
            
            if x < 0 or x >= m or y < 0 or y >= n or visited[x][y] or board[x][y] != word[idx]:
                return False
            
            visited[x][y] = True
            
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if dfs(nx, ny, idx + 1):
                    return True
            
            visited[x][y] = False
            return False
        
        for i in range(m):
            for j in range(n):
                if board[i][j] == word[0]:
                    if dfs(i, j, 0):
                        return True
        
        return False