var marak = require('marak')

marak(function (m) {
    var s = m.speak().join(" ");
    console.log(s);
    m.end();
});
