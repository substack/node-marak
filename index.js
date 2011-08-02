var markov = require("markov");
var fs = require("fs");
var stream = fs.createReadStream(__dirname + "/logs.txt");

exports.ready = false;
exports.loaded = false;
var callbacks = []

var marak = module.exports = function (cb) {
    if (exports.ready) cb(marak)
    else callbacks.push(cb)
    return marak;
}

stream.once("data", function () {
    process.nextTick(function () {
        exports.ready = true
        callbacks.forEach(function (cb) {
            cb(marak);
        })
    })
})

var m = marak.markov = markov(2);
m.seed(stream, function () {
    exports.loaded = true;
});

marak.speak = function (text) {
    if (!text) text = m.pick();
    return m.respond(text);
}

marak.end = function () {
    stream.destroy();
}
