/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('default', function () {
    // place code for your default task here
    return gulp.src('Themes/Metro/Content/Styles/Theme.scss')
     .pipe(sass()) // Converts Sass to CSS with gulp-sass
     .pipe(gulp.dest('Themes/Metro/Content/Styles'))
});
// Gulp watch syntax
gulp.watch('files-to-watch', ['tasks', 'to', 'run']);