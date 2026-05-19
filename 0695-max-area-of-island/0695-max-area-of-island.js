/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {


       let dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
       
        const m= grid.length
        const n=grid[0].length
        let res=0

        function bfs(x,y){
            const queue =[[x,y]]
            grid[x][y]=-1
            let count =1
            while (queue.length>0){
                const [cx,cy]= queue.shift()

                for (const [dx,dy] of dirs){
                    let nx=cx+dx
                    let ny=cy+dy
                    if(nx<0 ||ny<0|| nx>=m || ny>= n) continue
                    if(grid[nx][ny]==1){
                        queue.push([nx,ny])
                        grid[nx][ny] = -1
                        count ++
                    }

                }
                
            }
            return count
   

      
        }

           

        for (let i=0;i<m; i++){
            for(let j=0;j<n; j++){
                if(grid[i][j]==1){
                    
                        res= Math.max(res,bfs(i,j))
                    
                }
            }
        }
        
    
    return res
    
};