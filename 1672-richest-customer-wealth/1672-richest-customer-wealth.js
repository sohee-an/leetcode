/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const res= accounts.map((item)=>{
        return item.reduce((acc,curr)=>{return acc+=curr},0)
    }).sort((a,b)=>b-a)[0]

    return res
};