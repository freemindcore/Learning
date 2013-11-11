
//Your server should listen to TCP connections on port 8000. For each
//connection you must write the current date & time in the format:

//    YYYY-MM-DD HH:MM

//followed by a newline character. Month, day, hour and minute must be
//zero-filled to 2 integers. For example:

//    2013-07-06 07:42



var net = require('net')

//Number.prototype.PadLeft = function (length, digit) {
//    var str = '' + this;
//    while (str.length < length) {
//        str = (digit || '0') + str;
//    }
//    return str;
//};

function zeroPad(num) {
    return ( num < 10 ? 0 : "") + num
}


var preparetime = function () {
    var date = new Date()
    var timeyear = date.getFullYear()
    var timemonth = (date.getMonth() + 1)
    var timedate = date.getDate()
    var timehour = date.getHours()
    var timeminutes = date.getMinutes()
    //return timeyear + "-" + timemonth.PadLeft(2) + "-" + timedate.PadLeft(2) + " " + timehour.PadLeft(2) + ":" + timeminutes.PadLeft(2) + "\n"

    return timeyear + "-" + zeroPad(timemonth) + "-" + zeroPad(timedate) + " " + zeroPad(timehour) + ":" + zeroPad(timeminutes) + "\n"

}

var server = net.createServer(function (socket) {
    // socket handling logi
    var output = preparetime()
    socket.write(output)
    console.log("Run once:" + output)
    socket.end()


})
server.listen(8000)
console.log("Server started, listening on 8000 ...")




//HINTS:

//    For this exercise we'll be creating a raw TCP server. There's no HTTP
//involved here so we need to use the `net` module from Node core which
//has all the basic networking functions.

//The `net` module has a method named `net.createServer()` that takes a
//callback function. Unlike most callbacks in Node, the callback used by
//`createServer()` is called more than once. Every connection received
//    by your server triggers another call to the callback. The callback
//    function has the signature:

//      function (socket) { ... }

//    `net.createServer()` also returns an instance of your `server`. You
//        must call `server.listen(portNumber)` to start listening on a
//        particular port.

//        A typical Node TCP server looks like this:

//        var net = require('net')
//        var server = net.createServer(function (socket) {
//            // socket handling logic
//        })
//        server.listen(8000)

//        The `socket` object contains a lot of meta-data regarding the
//        connection, but it is also a Node duplex Stream, in that it can be
//        both read from, and written to. For this exercise we only need to
//        write data and then close the socket.

//        Use `socket.write(data)` to write data to the socket and
//    `socket.end()` to close the socket. Alternatively, the `.end()` method
//        also takes a data object so you can simplify to just:
//    `socket.end(data)`.

//    Documentation on the `net` module can be found by pointing your
//        browser here:
//        c:\Users\freemind\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\net.html

//        To create the date, you'll need to create a custom format from a
//    `new Date()` object. The methods that will be useful are:

//        date.getFullYear()
//        date.getMonth()     (starts at 0)
//        date.getDate()      (returns the day of month)
//        date.getHours()
//        date.getMinutes()

//      Or, if you want to be adventurous, use the `moment` package from npm.
//      Details of this excellent time/date handling library can be found
//        here: http://momentjs.com/docs/