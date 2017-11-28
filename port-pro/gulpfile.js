var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');
var jade = require('gulp-jade');


gulp.task('jade', function() {
  gulp.src('./app/jade/*.jade')
    .pipe(jade({
      pretty: '\t', // отступы в 1 таб
    }))
    .pipe(gulp.dest('./app/html'))
});

gulp.task('sass', function() {
  gulp.src('./app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./app/**/*.scss', ['sass']);
});

gulp.task('jade:watch', function() {
  gulp.watch('./app/jade/*.jade', ['jade']);
});

gulp.task('server', function () {
  browserSync({
    port: 9000,
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watch', function () {
  gulp.watch([
    'app/*.html',
    'app/js/**/*.js',
    'app/css/**/*.scss'
  ]).on('change', browserSync.reload);
});

//gulp.task('default', ['server', 'sass:watch', 'watch']);
