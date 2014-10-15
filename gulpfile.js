var gulp = require('gulp'),
    connect = require('gulp-connect'),
    karma = require('gulp-karma');

var testFiles = [
    '/src/component/*.js',
    '/src/test/*.js'
];

gulp.task('connect', function() {
    connect.server();
});

gulp.task('karma-testing-dev', function() {
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});

gulp.task('default', ['karma-testing-dev','connect']);