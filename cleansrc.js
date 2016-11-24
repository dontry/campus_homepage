var gulp = require('gulp'),
    del = require('del'),
    config = require('../config').cleansrc;

gulp.task('cleansrc', function() {
    return del(config.src);
});
