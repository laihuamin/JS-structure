// 这里面是整理关于echart要用的nodes的

var regPath = require('./regexpPathname');

function getNodes(res, dir) {
    var nodes = [];
    res.pathname.forEach(function(item) {
        var temp = {};
        temp.name = regPath(item, dir);
        nodes.push(temp);
    })
    return nodes;
}

module.exports = getNodes;