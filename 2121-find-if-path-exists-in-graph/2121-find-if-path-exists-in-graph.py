class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        
        graph = {}
    
        for a, b in edges:
            if a not in graph:
                graph[a] = []
            graph[a].append(b)
            if b not in graph:
                graph[b] = []
            graph[b].append(a)
        
       
        visited = [False] * n
        visited[source] = True
        
       
        q = deque([source])
        
        while q:
            current = q.popleft()
            if current == destination:
                return True
                
         
            if current in graph:  
                for next_node in graph[current]:
                    if not visited[next_node]:
                        visited[next_node] = True
                        q.append(next_node)
        
        return False
        # graph = [[] for _ in range(n)]
        
      
        # for a, b in edges:
        #     graph[a].append(b)
        #     graph[b].append(a)


        # visited = [False] * n
        # visited[source] = True

        # q=deque([source])

        # while q:
        #     current = q.popleft()
        #     if current == destination:
        #         return True
                
        #     for next_node in graph[current]:
        #         if not visited[next_node]:
        #             visited[next_node] = True
        #             q.append(next_node)

            
        # return False
                

                



    



