/*
 * @Author: dontry
 * @Date:   2016-11-24 16:55:14
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-11-24 21:46:11
 */
/*
 * @Author: dontry
 * @Date:   2016-11-24 16:55:14
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-11-24 16:55:14
 */

'use strict';

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    config = require('../config').uglify,
    concat = require('gulp-concat'),
    notify = require('gulp-notify');




gulp.task('uglify', function() {
    return gulp.src(config.src)
        .pipe(concat(config.name))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(config.dest))
        .pipe(notify({
            message: 'uglify js ok'

        }));
});
