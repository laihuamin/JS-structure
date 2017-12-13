var path = require('path');
var fs = require('fs');

var frontHtml = fs.readFileSync(path.resolve(path.dirname(__filename), 'front.html')).toString();
var endHtml = fs.readFileSync(path.resolve(path.dirname(__filename), 'end.html')).toString();

console.log(frontHtml, endHtml)
fs.writeFileSync('./structure.html', frontHtml + endHtml);