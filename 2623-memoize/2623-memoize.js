/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache={}
    return function(...args) {
        
        if(args.toString() in cache){
           
            return cache[args.toString()]
        }else{
            cache[args.toString() ]=fn(...args) 
            return  cache[args.toString() ]
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */