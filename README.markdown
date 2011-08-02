marak
=====

Your very own marak.

examples
========

speak.js
--------

````javascript
var marak = require('marak')

marak(function (m) {
    var s = m.speak().join(' ');
    console.log(s);
    m.end();
});
````

output:

    get a jar of cherries, drain the juice out of them, fill it back up with Everclear

methods
=======

var marak = require('marak')

marak(cb)
----------

Calls `cb(marak)` once your marak has loaded enough to speak.

marak.speak(text=marak.markov.pick())
-------------------------------------

Talk to your marak with some `text` or else request that your issacs talk to
you.

marak.markov
-------------

The [markov](https://github.com/substack/node-markov) handle of your marak.

command-line
============

Run `marak` to launch an interactive chat:

    $ marak
    > oh hello
    lib a client and wrote up. fucks it one plugin issue maybe in the it
    sometime I saw am sure hmm I oh hello,
    > hook.io
    can websockets talk with hook.io?
    > haters
    stupid reddit haters :/

Or to get `n` lines of marak:

````
$ marak -n 3
the only thing that's target-folder-specific is the node_modules folder. if you move that out of the great enmity the anglo-canadians have for communication layer the French of the Canadians, and, the storming
beta account so where is my
I looked a few knobs and yours. call the whole thing
````

install
=======

With [npm](http://npmjs.org) do:

    npm install marak

to get marak as a library or:

    npm install -g marak

to get the marak command.
