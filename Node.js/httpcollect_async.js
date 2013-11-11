var http = require("http");
var bl = require('bl')

var urls = [] // Url array
var fetched_counts = 0 // Counting
var targets = [] // Targets fetched

for (var i = 1; i <= 3; i++) {
    urls[i] = process.argv[i + 1]
}


var fetchjob = function(index) {
    http.get(urls[index], function(response) {
        response.pipe(bl(function(err, data) {
            if (err)
                return console.error("There was an error:" + data);
            else {
                targets[index] = data.toString();
            }
            fetched_counts++

            if (fetched_counts == 3) {
                targets.forEach(function (target) {
                    console.log(target)
                })
            }

        }))

    })

}

for (var j = 1; j <= 3; j++) {
    fetchjob(j)
}


/* Sequential fetching */
/*
var fetchjob = function (index) {
    if (index == urls.length) {
        //console.log("Count is :" + fetched_counts)
        //console.log(targets)
        targets.forEach(function (target) {
            console.log(target)
        })

    } else {
        http.get(urls[index], function (response) {
            response.pipe(bl(function (err, data) {
                if (err)
                    return console.error("There was an error:" + data);
                else {
                    targets[index] = data.toString();
                    //console.log("Fetched Job #:" + index)
                }
                fetched_counts += 1
                //console.log("Fetched counts:" + fetched_counts)
                fetchjob(index+1)
            }))

        });
    }
}

fetchjob(1);


*/