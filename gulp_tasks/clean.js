// Load external files
var config = require('./config');

// Load node modules
var gulp = require('gulp');
var del = require('del');


gulp.task('clean', del.bind(null, [config.dist]));
