// Load external files
var config = require('./config');

// Load node modules
var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

// - Load modules related to postcss
var stylelint = require('stylelint');
var cssgrid = require('postcss-grid');
var cssnext = require('postcss-cssnext');
var cssmixins = require('postcss-mixins');
var cssnested = require('postcss-nested');
var cssimport = require('postcss-import');
var cssinlinecomment = require('postcss-inline-comment');
var csswring = require('csswring');
var cssmqpacker = require('css-mqpacker');
var cssbrowserreporter = require('postcss-browser-reporter');
var cssreporter = require('postcss-reporter');
var cssfontawesome = require('postcss-font-awesome');
var csshexrgba = require('postcss-hexrgba');

var plumberWithNotify = function () {
    return $.plumber({
        errorHandler: $.notify.onError('<%= error.message %>')
    });
};


gulp.task('styles', function () {
    // Set target browsers
    var AUTOPREFIXER_BROWSERS = ['last 2 version'];

    var postProcess = function (minify) {
        minify = minify || false;
        var plugins = [
            cssinlinecomment(),
            cssfontawesome(),
            csshexrgba(),
            cssimport(),
            cssmixins(),
            cssnested(),
            cssgrid(),
            cssnext({
                browsers: AUTOPREFIXER_BROWSERS,
                cascade: false
            }),
            stylelint(),
            cssmqpacker({ sort: true}),
            cssbrowserreporter(),
            cssreporter()
        ];
        if (minify) {
            plugins.push(csswring());
        }
        return plugins;
    };
    return gulp.src(config.css.src + '/style.css')
        .pipe(plumberWithNotify())
        .pipe($.sourcemaps.init())
        .pipe($.postcss(postProcess(true)))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.css.dist))
        .pipe(browserSync.stream());
});
