/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];

    for (let op of operations) {
        if (op === "+") {
           
            let last = stack[stack.length - 1];
            let secondLast = stack[stack.length - 2];
            stack.push(last + secondLast);
        } else if (op === "D") {
           
            let last = stack[stack.length - 1];
            stack.push(last * 2);
        } else if (op === "C") {
            
            stack.pop();
        } else {
            
            stack.push(Number(op));
        }
    }

    return stack.reduce((acc, curr) => acc + curr, 0);
};