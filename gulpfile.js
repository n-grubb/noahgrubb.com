const gulp   = require('gulp');
const sass   = require("gulp-sass");
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

/*
 * generate css from sass
 */
gulp.task('css', function() {
    return gulp.src('./src/scss/*.scss')
      .pipe(sass({
        outputStyle: 'compressed'
      })
      .on('error', sass.logError))
      .pipe(gulp.dest('./src/site/_includes/css'));
});

/*
 * compress js files
 */
gulp.task('js', function() {
    return gulp.src("./src/js/**/*.js")
      .pipe(concat('scripts.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./src/site/_includes/js'));
});

/*
 * watch folders for changes
 */
gulp.task("watch", function() {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('css'));
  gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
});

/*
 * build
 */
gulp.task('build', gulp.parallel(
  'css',
  'js'
));

