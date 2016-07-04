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
            if (typeof val !== 'function') return next(val);

            ret = r.value();
            next(ret);
        }
        else {
            return ret;
        }
    }
}
        
