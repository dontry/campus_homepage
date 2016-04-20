/*
* @Author: dontry
* @Date:   2016-04-20 11:45:38
* @Last Modified by:   dontry
* @Last Modified time: 2016-04-20 14:28:19
*/

'use strict';

module.exports = {
    sass: {
        src: './css/*.scss',
        dest: "./dist",
        settings: {

        }
    },
    images: {
        src: './imgs/*',
        dest: './dist/imgs/'
    },
    clean: {
        src: './dist/imgs/*'
    }
};