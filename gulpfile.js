var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var pug         = require('gulp-pug');

//convert pug to html
gulp.task('pug', function(){
  return gulp.src('./src/_pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./src'));
});

//compile sass
gulp.task('sass', function(){
  return gulp.src(['src/_sass/*.sass', 'src/_sass/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/assets/css'))
    .pipe(browserSync.stream());
});

//watch for changes
gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: './src'
  });
  gulp.watch('src/_sass/*/*.sass', ['sass']);
  gulp.watch('src/_pug/*/*.pug', ['pug']);
  gulp.watch('src/_pug/*.pug', ['pug']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
