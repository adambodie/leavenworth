const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
 
gulp.task('less', () => {
  return gulp.src('./src/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function(){
  gulp.watch('./src/less/main.less', gulp.series('less'));
});

