// Load node modules
var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('default', function (cb) {
    runSequence('clean', ['html', 'styles', 'scripts', 'images'], 'serve', cb);
});
