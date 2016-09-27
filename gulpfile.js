'use strict';

var gulp = require('gulp');
var pl = require('gulp-load-plugins')();
var jade = require('gulp-jade');

var watched = {

    html: [
        './src/views/**/*.jade'
    ],

    scripts: [
        './src/js/services/*.js',
        './src/js/directives/*.js',
        './src/js/controllers/*.js',
        './src/js/app.js'
    ],

    less: [
        './src/css/*.less',
        './src/css/**/*.less'
    ],

    assets: [
        './src/images/**',
        './src/fonts/**',
        './src/bower_components/**',
        './src/config*.js'
    ]
};

var onError = function(error) {
    pl.util.log(pl.util.colors.red(error.message));
    pl.util.beep();
    this.emit('end');
};



gulp.task('html', function() {

  return gulp.src( watched.html )
        .pipe(pl.plumber(onError))
        .pipe(jade({
            pretty:true
        }))
        .pipe(gulp.dest('./www/'))
});


gulp.task('scripts', function() {
    return gulp.src(watched.scripts)
        .pipe(pl.plumber(onError))
        .pipe(pl.jshint())
        .pipe(pl.jshint.reporter('jshint-stylish'))
        .pipe(pl.jshint.reporter('fail'))
        .pipe(pl.sourcemaps.init({sourcemap: true}))
        .pipe(pl.concat('index.js'))
        .pipe(pl.ngAnnotate())
        // .pipe(pl.uglify()) --- Not working yet !!!!
        .pipe(pl.sourcemaps.write('.'))
        .pipe(gulp.dest('./www/js'))
        ;
});


gulp.task('less', function() {
    return gulp.src(watched.less)
        .pipe(pl.plumber(onError))
        .pipe(pl.less())
        .pipe(gulp.dest('./www/css'))
        ;
});

gulp.task('assets', function() {
    return gulp.src( watched.assets,  {base: './src/'} )
        .pipe(gulp.dest('./www'));
});

gulp.task('watch', function() {
    gulp.watch(watched.html, ['html']);
    gulp.watch(watched.less, ['less']);
    gulp.watch(watched.scripts, ['scripts']);
    gulp.watch(watched.assets, ['assets']);


});


gulp.task('default', ['html', 'less', 'scripts', 'assets', 'watch']);







