var gulp = require('gulp'),
    del = require('del'),
    config = require('../config').clean2;

gulp.task('clean2', function() {
    return del(config.src);
});
