/*
 * @Author: dontry
 * @Date:   2016-11-24 21:04:10
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-11-24 22:49:29
 */

'use strict';

var gulp = require('gulp');
gulp.task('reload', ['clean2', 'sass', 'minify', 'uglify', 'bundle.js']);
