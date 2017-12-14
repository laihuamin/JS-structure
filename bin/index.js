var path = require('path');
var fs = require('fs');
var open = require('open');

var frontHtml = fs.readFileSync(path.resolve(path.dirname(__filename), 'front.html')).toString();
var endHtml = fs.readFileSync(path.resolve(path.dirname(__filename), 'end.html')).toString();

fs.writeFileSync('./structure.html', frontHtml + endHtml);

open(structure.html)