/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('default', function () {
    return gulp.src(["~/fun/funappjs"])
    .pipe(gulp.dest('./fun/')) // записываем css
    .pipe(livereload(server)); // 
});