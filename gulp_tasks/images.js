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


gulp.task('images', function () {
    return gulp.src(config.img.src + '/**/*.+(jpg,png,svg,gif)')
        .pipe(plumberWithNotify())
        .pipe($.changed(config.img.dist))
        .pipe(gulp.dest(config.img.dist))
        .pipe(browserSync.stream());
});
