// 这里面是整理关于echart要用的nodes的

function getNodes(res) {
    var nodes = [];
    res.pathname.forEach(function(item) {
        var temp = {};
        temp.name = item;
        nodes.push(temp);
    })
    return nodes;
}

module.exports = getNodes;