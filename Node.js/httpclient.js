var http = require("http");
var url = process.argv[2]

http.get(url, function(response){
    response.setEncoding("utf-8");
    response.on("data", function (content) {
        console.log(content)
    })

    //response.on('data', console.log)
    //response.on('error', console.error)

}

)
