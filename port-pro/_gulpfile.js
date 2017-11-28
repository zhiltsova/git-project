var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    jade = require('gulp-jade');


gulp.task('sass', function() {
  gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./src/**/*.scss', ['sass']);
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
    'src/*.html',
    'src/js/**/*.js',
    'src/css/**/*.scss'
  ]).on('change', browserSync.reload);
});


//jade
gulp.task('jade', function() {
var YOUR_LOCALS = {}; // можно подключить JSON с данными
gulp.src('./jade/*.jade')
.pipe(jade({
locals: YOUR_LOCALS,
pretty: '\t', // отступы в 1 таб
}))
.pipe(gulp.dest('./html/'))

//gulp.task('default', ['server', 'sass:watch', 'watch']);
