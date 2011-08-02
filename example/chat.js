var marak = require('marak')
var stdin = process.openStdin()

marak(function (m) {
  process.stdout.write("> ")
  
  stdin.on("data", function (buf) {
    var line = buf.toString()
    var s = m.speak(line).join(" ")
    console.log(s)
    process.stdout.write("> ")
  })
})
