// 这个文件的目的是收集所有文件中的依赖

var fs = require('fs'),
    path = require('path'),
    reqReg = /require\(['|"](.*?)['|"]\)/g,
    impReg = /import\s.*?['|"](.*?)['|"]/g,
    resDep = [];

function getDepend(res, dir) {
    // 根据上一个文件res获得的pathname数组进行依赖收集
    res.pathname.forEach(function(item, index) {
        var data = fs.readFileSync(item, 'utf-8'),
            results = [];
        while((results = reqReg.exec(data)) !== null) {
            var link = {
                source: res.pathname[index],
                target: results[1],
                weight: 1,
                name: '依赖'
            };
            resDep.push(link);
        }
        while((results = impReg.exec(data)) !== null) {
            var link = {
                source: res.pathname[index],
                target: results[1],
                weight: 1,
                name: '依赖'
            };
            resDep.push(link);
        }
    });
    return resDep;
}

module.exports = getDepend;