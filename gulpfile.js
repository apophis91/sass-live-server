const gulp        = require('gulp');
const sass        = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile sass
gulp.task('sass', function(){
  return gulp.src(['src/sass/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

// Watch and serve
gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: './src',
    startPath: "/",
    browser: 'chromium'         // default firefox
  });
  gulp.watch(['src/sass/*.scss'], ['sass']);
  gulp.watch(['src/*.html']).on('change', browserSync.reload);
});

// Default
gulp.task('default', ['serve']);
