/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    const dirs =[[-1,0],[1,0],[0,1],[0,-1]]
    const m = grid.length
    const n= grid[0].length
    let res=0
    
    
    function bfs(x,y){
        const queue =[[x,y]]
        grid[x][y]= -1

        while (queue.length>0){
            const [cx,cy]= queue.shift()

            for( [dx,dy] of dirs){
                let nx =cx+dx
                let ny= cy+dy

                if(nx<0 || ny<0 || nx>=m || ny >=n) continue

                if(grid[nx][ny]==1){
                    grid[nx][ny]=-1
                    queue.push([nx,ny])
                }
            }
        }
        return true



    }

    for(let i=0; i<m; i++){
        for (let j=0; j<n; j++){
            if(grid[i][j]==1){
                if(bfs(i,j)){
                    res++
                }
            }
        }
    }



    return res
    
};