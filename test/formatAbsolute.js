// 整理依赖
// 什么叫整理依赖，echart是source和target的形式
// 但是target可能会有重复，target的路径和filename对不上
// 所以要对这个target进行格式化

var path = require('path');
var regPath = require('./regexpPathname.js');

function formatTarget(links, res, dir) {
    var realLinks = [];
    links.forEach(function(item) {
        item.target = path.resolve(item.source, '..', item.target);
        item.source = regPath(item.source, dir);

        // 这里对每一个target做处理，排除一些不是自己写的模块,并排除一些没有扩展名，或者扩展名更多的情况
        for(let i = 0; i < res.pathname.length; i++) {
            if(res.pathname[i].indexOf(item.target) !== -1) {
                item.target = regPath(res.pathname[i], dir)
                realLinks.push(item);                
            }
        }
    })
    return realLinks;
}

module.exports = formatTarget;