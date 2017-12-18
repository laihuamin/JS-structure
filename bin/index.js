var path = require('path'),
    fs = require('fs'),
    open = require('open'),
    getResult = require('../lib/index'),
    root = process.cwd(),
    addIgnore = [],
    result = {
        name: '代码结构',
        type:'chord',
        sort : 'ascending',
        sortSub : 'descending',
        ribbonType: false,
        radius: '60%',
        itemStyle : {
            normal : {
                label : {
                    rotate : true
                }
            }
        },
        minRadius: 7,
        maxRadius: 20
    };


if (process.argv[2] == '--ignore') {
    for (var i = 3; i < process.argv.length; i++) {
    addIgnore.push(process.argv[i]);
    }
}

var nodeAndLinks = getResult(root, addIgnore);
result.nodes = nodeAndLinks.nodes;
result.links = nodeAndLinks.links;
var strResult = JSON.stringify(result);

// var frontHtml = fs.readFileSync(path.resolve(path.dirname(__filename), 'front.html')).toString();
// var endHtml = fs.readFileSync(path.resolve(path.dirname(__filename), 'end.html')).toString();

// fs.writeFileSync('./structure.html', frontHtml + strResult + endHtml);

// function readLines(input, func) {
//     var remaining = '';
  
//     input.on('data', function(data) {
//       remaining += data;
//       var index = remaining.indexOf('\n');
//       var last  = 0;
//       while (index > -1) {
//         var line = remaining.substring(last, index);
//         last = index + 1;
//         func(line);
//         index = remaining.indexOf('\n', last);
//       }
  
//       remaining = remaining.substring(last);
//     });
  
//     input.on('end', function() {
//       if (remaining.length > 0) {
//         func(remaining);
//       }
//     });
//   }
  
//   function func(data) {
//     console.log('Line: ' + data);
//   }
  
var frontHtml = fs.createReadStream(path.resolve(path.dirname(__filename), 'front.html'));
var endHtml = fs.createReadStream(path.resolve(path.dirname(__filename), 'end.html'));

var output = fs.createWriteStream('./output.html');

frontHtml.on('data', function(d) {
    output.write(d)
})
frontHtml.on('error', function(err){
    throw err;
});
frontHtml.on('end', function() {
    output.write(strResult);
    endHtml.on('data', function(d) {
        output.write(d)
    });
    endHtml.on('error', function(err) {
        throw err
    });
    endHtml.on('end', function() {
        output.end();
    })
})
open('output.html')