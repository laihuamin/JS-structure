var path = require('path');

var ext = require('./constant.js').INCLUDE_EXT;

var deleteExt = function(filepath) {
    var fileExtName = path.extname(filepath);
    if(ext.indexOf(fileExtName) !== -1) {
        var dir = path.dirname(filepath),
            basename = path.basename(filepath, fileExtName);
        return path.join(dir, basename);
    }
}

module.exports = deleteExt;