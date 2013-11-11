 var sum = 0
 //process.argv.forEach(function(val, index, array) {
 //  if index >1 sum += Number(val)
 //  });
 //ar sum = process.argv[i]

 var args = process.argv
 for(var i=2;i<args.length;i++){
    sum+=Number(args[i])
    //console.log("arg%d : %s",i,process.argv[i])
 }

 console.log(sum)

