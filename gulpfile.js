var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var cleanCSS = require('gulp-clean-css');
var replace = require('gulp-ext-replace');

gulp.task( 'sass', function(){
  gulp.src( 'sass/bootstrap.scss' )
      .pipe( sass().on( 'error', sass.logError ) )
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(replace('.min.css'))
      .pipe( gulp.dest( './bootstrap/css' ) );
});

gulp.task( 'default', function(){
  gulp.watch( 'sass/**/*.scss', ['sass']);
});


gulp.task('minify', function() {
  return gulp.src('hello/css/bootstrap.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(replace('.min.css'))
    .pipe(gulp.dest('hello2'));
});
