var fs = require('fs')
var dir = process.argv[2]
var extension = process.argv[3]

fs.readdir(dir, function (err, list) {
    if (err) throw err;
    var pattern = new RegExp('\\.'+extension + '$');

    for (i = 0; i < list.length; i++) {
        if ( pattern.test(list[i]) ) {
            console.log(list[i])
        }

    }
})

