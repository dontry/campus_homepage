/*
 * @Author: dontry
 * @Date:   2016-11-24 17:19:03
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-11-24 22:11:33
 */

'use strict';

var gulp = require('gulp'),
    inject = require('gulp-inject'),
    config = require('../config.js').inject,
    notify = require('gulp-notify');

gulp.task('inject', function() {
    var target = gulp.src(config.target);
    var src = gulp.src(config.src, {

        read: false
    });
    return target.pipe(inject(src), {
            relative: true
        })
        .pipe(gulp.dest(config.dest))
        .pipe(notify({
            message: 'inject files OK'
        }));
});
