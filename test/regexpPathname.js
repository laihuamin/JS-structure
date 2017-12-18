// 这个模块是用来规范我们的pathname的
// 因为我们收集到的pathname是这样子的/Users/laihuamin/Documents/js-analysis/lib/index.js
// 我们要将它转化成lib/index.js
var path = require('path');

function regPathname(str,dir) {
    var root = path.resolve(dir),
        rootReg = new RegExp(root + '/', 'g'),
        result = '';
    result = str.replace(rootReg, '');
    return result;
}

module.exports = regPathname;