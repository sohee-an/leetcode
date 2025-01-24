# import collections from deque
from collections import deque
class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        keys_length=len(rooms)
        result =True
        q=deque([0])
        visited = [False] * len(rooms) 

        visited[0]=True

        while q:
            current_room =q.popleft()
            for key in rooms[current_room]:
                if not visited[key]:
                    visited[key]=True
                    q.append(key)


        return all(visited)



     


                
                
                

             






     