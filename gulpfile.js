var gulp  = require('gulp');
var watch = require('gulp-watch');
var sass  = require('gulp-sass');

gulp.task('scss', function() {
    return gulp.src("./scss/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./assets/css"));
});

gulp.task('scss-watch', ['scss'], function() {
    gulp.watch('./scss/*.scss', ['sass']);
});