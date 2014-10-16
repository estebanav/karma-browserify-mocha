var gulp = require('gulp'),
    connect = require('gulp-connect'),
    karma = require('gulp-karma'),
    react = require('gulp-react');

var testFiles = [
    '/src/component/*.js',
    '/src/test/*.js'
];

var reactFiles = 'src/***/*.jsx';

var destination='dist/';

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

gulp.task('react-process', function() {
    console.log('react-process');
    return gulp.src(reactFiles)
        .pipe(react())
        .pipe(gulp.dest(destination));
});

gulp.task('default', ['react-process','karma-testing-dev','connect']);
