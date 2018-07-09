const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const path = require('path');

gulp.task('less', () => {
  return gulp.src('./src/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('concat', () => {
  return gulp.src(['./src/js/header.js', './src/js/footer.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public'));
});


gulp.task('watch', function(){
  gulp.watch('./src/less/main.less', gulp.series('less'));
});

gulp.task('build-js', () => {
  return gulp.src(['./public/app.js', './public/vue.js'])
    .pipe(concat('build.js'))
    .pipe(gulp.dest('./build'));
});
