// Load external files
var config = require('./config');

// Load node modules
var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

var plumberWithNotify = function () {
    return $.plumber({
        errorHandler: $.notify.onError('<%= error.message %>')
    });
};


gulp.task('scripts', function() {
    return gulp.src(config.js.src + '/**/*.js')
        .pipe(plumberWithNotify())
        .pipe($.changed(config.js.dist))
        .pipe(gulp.dest(config.js.dist))
        .pipe(browserSync.stream());
});
