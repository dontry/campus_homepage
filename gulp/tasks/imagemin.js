/*
* @Author: dontry
* @Date:   2016-04-20 11:45:38
* @Last Modified by:   dontry
* @Last Modified time: 2016-04-20 14:14:17
*/

'use strict';

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    config = require('../config').images;

gulp.task('imagemin', function(){
    return gulp.src(config.src)
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest));
    });