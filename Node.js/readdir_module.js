

function filterFiles(dir, ext, callback) {
    var fs = require('fs')
    var regex = new RegExp('\\.' + ext + '$');

    
    fs.readdir(dir, function (err, fileslist) {
    if (err)
            return callback(err)



    /*
        for (i = 0; i < fileslist.length; i++) {
        if (!regex.test(fileslist[i])) {
            delete fileslist[i]
        }
    }
    */

    fileslist = fileslist.filter(function (file) {
        return regex.test(file)
    })


    callback(null, fileslist)
    })


}

module.exports = filterFiles;