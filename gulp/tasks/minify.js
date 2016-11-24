/*
 * @Author: dontry
 * @Date:   2016-11-24 21:37:20
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-11-24 22:01:10
 */

var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('../config').minify;


gulp.task('minify', function() {
    return gulp.src(config.src)
        .pipe(concat(config.name))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest));
});
