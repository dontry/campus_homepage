var gulp = require('gulp'),
    sass = require('gulp-sass'),
    config = require('../config').sass,
    handleErrors = require('../utils/handleError'),
    notify = require('gulp-notify');

gulp.task('sass', function() {
    return gulp.src(config.src)
        .pipe(sass(config.settings))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dest))
        .pipe(notify({
            message: 'sass ok'
        }));
});
