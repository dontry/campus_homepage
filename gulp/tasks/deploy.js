/*
 * @Author: dontry
 * @Date:   2016-04-20 14:13:22
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-11-24 22:49:21
 */

'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('deploy', function(callback) {
    runSequence('clean', ['sprite', 'imagemin', 'images', 'sass', 'uglify', 'minify', 'bundle'], callback);
});
