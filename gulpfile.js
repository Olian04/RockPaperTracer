var gulp = require('gulp');
var sass = require('gulp-sass');
var typescript = require('gulp-typescript');
var webserver = require('gulp-webserver');

gulp.task('serve', function() {
  return gulp.src('dist')
    .pipe(webserver({
      port: 8000
    }));
});

gulp.task('typescript', function(){
  return gulp.src('app/*.ts')
    .pipe(typescript())
    .pipe(gulp.dest('dist'))
});

gulp.task('html', function(){
  return gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('scss', function(){
  return gulp.src('app/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
});

gulp.task('default', [ 'html', 'scss', 'typescript', 'serve' ]);