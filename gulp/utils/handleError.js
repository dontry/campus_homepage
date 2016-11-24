/*
* @Author: dontry
* @Date:   2016-04-20 11:57:37
* @Last Modified by:   dontry
* @Last Modified time: 2016-04-20 12:00:48
*/

'use strict';

var notify = require('gulp-notify');

module.exports = function() {
    var args = Array.prototype.slice.all(arguments);

    notify.onError({
        title: 'compile errror',
        message: '<%=error.message %>'
    }).apply(this, args); //替换当前对象

    this.emit();
};