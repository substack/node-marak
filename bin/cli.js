var marak = require("marak");
var argv = require("optimist").argv;

if (argv.h || argv.help) {
    console.error("Usage:\n  marak\n  marak -n LINES\n");
}
else if (argv.n) {
    marak(function (m) {
        for (var i = 0; i < argv.n; i++) {
            var s = m.speak().join(" ");
            console.log(s);
        }
        m.end();
    });
}
else {
    var stdin = process.openStdin();
    marak(function (m) {
        process.stdout.write("> ");
        
        stdin.on("data", function (buf) {
            var line = buf.toString();
            var s = m.speak(line).join(" ");
            console.log(s);
            process.stdout.write("> ");
        });
    })
}
