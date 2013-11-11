var dir = process.argv[2]
var ext = process.argv[3]

var filterFiles = require('./readdir_module.js');

filterFiles(dir, ext, function (err, list){
    if (err) throw err;

    list.forEach(function (file) {
        console.log(file)
    })
})

/*
  var filterFn = require('./readdir_module.js')
  var dir = process.argv[2]
  var filterStr = process.argv[3]

  filterFn(dir, filterStr, function (err, list) {
    if (err)
      return console.error('There was an error:', err)

    list.forEach(function (file) {
      console.log(file)
    })
  })

*/