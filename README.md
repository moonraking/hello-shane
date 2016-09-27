Hello Shane
===========

- npm to manage node packages  ( https://github.com/npm/npm )
- nodejs so you can run some javascript from the command line ( https://nodejs.org/en/ )
- bower for managing application javascript packages ( https://bower.io/ ) (probably just $ npm install -g bower ) the -g is to install globally

One can use nvm to switch between versions if i need to, not sure how well this works on windows.

Once you have the above installed you can unzip the attached hello-world package to where ever you like.
So now cd into the hello-shane package and run:

`
$ bower install # this installs js packages for the app, it reads the bower.json file for what to install and then puts them in src/bower_components (directory defined in .bowerrc)
`
`
$ npm install # install the tool chain packages (jade, lesscss, jshint, other stuff), it installs stuff to node_modules
`

So, now all the bits that are needed for the tool can and stuff to be included in the app are installed.

`
$ gulp # this will run the gulp script, its defined in gulpfile.js, it "compiles the jade files and less files and copys some other files from the src in to www, www is our output folder.  You will see any "compile" errors here, so if you forget a ; at the end of a js file jshint will tell you all about it.
`

Open a new command prompt.
`
$ cd /to/my/project/www
$ php -S localhost:9000
`

and browse to localhost:9000 with firefox/chrome/what ever.