// 这是对传入的数组进行去重操作
// 这里的link中是对象，对对象的去重得慎重考虑

function unique(array) {
    var obj = {};
    return array.filter(function(item, index, array){
        return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
    })
}

module.exports = unique;