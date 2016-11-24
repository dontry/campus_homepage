var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    csso = require('gulp-csso'),
    buffer = require('vinyl-buffer'),
    merge = require('merge-stream'),
    config = require('../config').spritesmith;



gulp.task('sprite', function() {
    var spriteData = gulp.src(config.src)
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss',
            cssFormat: 'scss'
        }));
    // Pipe image stream through image optimizer and onto disk 
    var imgStream = spriteData.img
        // DEV: We must buffer our stream into a Buffer for `imagemin` 
        .pipe(buffer())
        .pipe(gulp.dest(config.img_dest));

    // Pipe CSS stream through CSS optimizer and onto disk 
    var cssStream = spriteData.css
        .pipe(gulp.dest(config.css_dest));

    // Return a merged stream to handle both `end` events 
    return merge(imgStream, cssStream);
});
