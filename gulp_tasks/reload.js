// Load node modules
var gulp = require('gulp');
var browserSync = require('browser-sync');

// It makes browser just reload
gulp.task('reload', function () {
    browserSync.reload();
});
