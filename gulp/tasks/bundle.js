/*
 * @Author: dontry
 * @Date:   2016-11-24 22:47:42
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-11-24 22:51:45
 */

'use strict';
var gulp = require('gulp');


gulp.task('bundle', function() {
    return gulp.src('../../bundle.js')
        .pipe(gulp.dest('../../dist/src/'));
});
