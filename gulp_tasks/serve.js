// Load external files
var config = require('./config');

// Load node modules
var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('serve', function () {
    browserSync.init({
        // proxy: 'localhost:xxxx'
        server: {
            baseDir: 'dist/',
            directory: false
        }
    });

    gulp.watch([config.html.src + '/**/*.html'], ['html']);
    gulp.watch([config.js.src + '/**/*.js'], ['scripts']);
    gulp.watch([config.img.src + '/**/*.+(jpg,png,svg,gif)'], ['images']);
    gulp.watch([config.css.src + '/**/*.css'], ['styles']);

});
