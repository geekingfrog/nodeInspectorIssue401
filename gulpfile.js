'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var to5 = require('gulp-6to5');

gulp.task('to5', function() {
    return gulp.src('testcase.js')
    .pipe(sourcemaps.init())
    .pipe(to5())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['to5']);
