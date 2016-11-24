/*
 * @Author: dontry
 * @Date:   2016-04-20 11:47:43
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-04-20 14:12:41
 */
'use strict';
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    config = require('../config');

gulp.task('watch', function() {
    watch(config.sass.src, function(){
        gulp.start('sass');
    });
    watch(config.images.src, function() {
        gulp.start('images');
    });
});
