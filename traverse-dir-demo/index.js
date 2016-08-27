'use strict';

const fs = require('fs');
const path = require('path');

const co = require('co');
const thunkify = require('thunkify');

const fsReaddir = thunkify(fs.readdir);
const fsStat = thunkify(fs.stat);

co(function* () {
    try {
        let ms = yield traverseDir('./test');

        console.log(ms);
    }
    catch (err) {
        console.log(err);
    }
})
    .catch(err => {
        console.log(err);
    });

function* traverseDir(root) {
    let traversed = yield traverse(root);

    return traversed.children;

    function* traverse(pathname) {
        if (trim(pathname) === '') return null;

        let modName = path.basename(pathname, '.js');
        let stat = yield fsStat(pathname);

        if (stat.isFile() && path.extname(pathname) === '.js') {
            /**
             * @property {string} name 取文件名作为模块名
             * @property {Object} children 类型为文件则children是该模块exports，
             *                             	类型为目录则children是该目录下所有模块的集合
             */
            return {
                name: modName,
                children: require(pathname)
            };
        }

        if (stat.isDirectory()) {
            let files = yield fsReaddir(pathname);

            let gens = files.map(filename => {
                let fullFilename = `${pathname}/${filename}`;

                return function* () {
                    return yield traverse(fullFilename);
                };
            });
             // 目录里所有模块export的对象
            let children = yield gens;
            // 把{name, chilren}模式转成{name: chilren}
            let mod = {
                name: modName,
                children: {}
            };
            children.map(child => {
                // traverse方法不会require非js文件，所以child可能为空
                if (child) {
                    mod.children[child.name] = child.children;
                }
            });

            return mod;
        }
    }
}

function trim(str) {
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}
