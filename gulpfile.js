'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

gulp.task('build', function() {
  return gulp.src('./flex.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('minify', function() {
  return gulp.src('./flex.css')
    .pipe(cleanCSS())
    .pipe(rename('flex.min.css'))
    .pipe(gulp.dest('./'));
});


// gulp.task('build:minified', function() {
//   return gulp.src('./flex.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions'],
//       cascade: false
//     }))
//     .pipe(cleanCSS())
//     .pipe(gulp.dest('./'));
// });

gulp.task('default', ['build', 'minify'])
