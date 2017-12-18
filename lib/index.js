








// 这个模块是用于返回最后的结果

var getfile = require('./queryAllFileName.js'),
    getDep = require('./querydepend.js'),
    formatAbsolute = require('./formatAbsolute.js'),
    arrUniq = require('./arrayUniq.js'),
    getNodes = require('./getNodes.js');
function returnResult(currentRoot, addIgnore) {
    // 得到filename和pathname
    var res = getfile(currentRoot, addIgnore);
    // 返回的links数组
    var resDep = getDep(res, currentRoot);
    // 数组去重
    var arr = arrUniq(resDep);
    // 将target格式化，使得echart可以直接使用
    var links = formatAbsolute(arr, res, currentRoot);
    // 获得nodes的节点
    var nodes = getNodes(res, currentRoot);
    return {
        nodes: nodes,
        links: links
    }
}

module.exports = returnResult;
