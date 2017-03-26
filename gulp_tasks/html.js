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


gulp.task('html', function () {
    return gulp.src(config.html.src + '/**/*.html')
        .pipe(plumberWithNotify())
        .pipe($.changed(config.html.dist))
        .pipe($.htmlhint())
        .pipe($.htmlhint.reporter())
        .pipe(gulp.dest(config.html.dist))
        .pipe(browserSync.stream());
});
