var gulp = require('gulp'),
    sass = require('gulp-sass'),
    config = require('../config').sass,
    handleErrors = require('../utils/handleError');

gulp.task('sass', function() {
    return gulp.src(config.src)
        .pipe(sass(config.settings))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dest))
});
