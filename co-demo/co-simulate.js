/**
 * @file 模拟co
 * @author YDSS
 */
'use strict';

module.exports = function (gen) {
    let g = gen();
    next();

    function next(ret) {
        let r = g.next(ret);

        if (!r.done) {
            let val = r.value;

            if (isPromise(val)) {
                val.then(next);
            }
            else if (isFunc(val)) {
                ret = val();
                next(ret);
            }
            else {
                return next(val);
            }
        }
        else {
            return ret;
        }
    }
};
        
function isPromise(p) {
    return p.then && typeof p.then === 'function';
}

function isFunc(f) {
    return typeof f === 'function';
}