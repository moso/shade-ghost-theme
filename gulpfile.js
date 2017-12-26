var gulp = require('gulp');
var gutil = require('gulp-util');
var zip = require('gulp-zip');

var swallowError = function swallowError(error) {
    gutil.log(error.toString());
    gutil.beep();
    this.emit('end');
};

gulp.task('zip', function() {
    var targetDir = './';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    return gulp.src([
        '**',
        '!node_modules', '!node_modules/**',
        '!shade-ghost-theme.zip'
    ])
    .pipe(zip(filename))
    .pipe(gulp.dest(targetDir));
});