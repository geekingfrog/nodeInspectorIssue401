'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var to5 = require('gulp-6to5');
var rename = require('gulp-rename');

gulp.task('inline', function() {
    return gulp.src('testcase.js')
    .pipe(rename('inline.js'))
    .pipe(sourcemaps.init())
    .pipe(to5())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('external', function() {
  return gulp.src('testcase.js')
  .pipe(rename('external.js'))
  .pipe(sourcemaps.init())
  .pipe(to5())
  .pipe(sourcemaps.write('./sourcemaps'))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['inline', 'external']);
