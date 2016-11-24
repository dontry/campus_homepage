/*
 * @Author: dontry
 * @Date:   2016-04-20 11:45:38
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-11-24 23:31:50
 */

'use strict';

module.exports = {
    sass: {
        src: './css/*.scss',
        dest: "./css/",
        settings: {

        }
    },
    images: {
        src: './imgs/*.*',
        dest: './dist/imgs/'
    },
    clean: {
        src: ['./dist/imgs/', './dist/src']
    },
    clean2: {
        src: ['./dist/src']
    },
    spritesmith: {
        src: './imgs/sprites/*',
        dest: './imgs/',
        img_dest: './dist/src',
        css_dest: './css/'
    },
    uglify: {
        src: './js/*.js',
        name: 'app.js',
        dest: './dist/src'
    },
    minify: {
        src: './src/*.css',
        name: 'style.css',
        dest: './dist/src'
    },
    inject: {
        target: './html/*.html',
        src: ['./dist/src/*.js', './dist/src/*.css'],
        dest: './dist/src'
    }
};
