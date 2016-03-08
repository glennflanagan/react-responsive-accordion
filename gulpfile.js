var gulp = require('gulp'),
    plumber = require('gulp-plumber');
    react = require('gulp-react'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create();

var babelify = require('babelify');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var notify = require('gulp-notify');
var rename = require('gulp-rename');




gulp.task('default', ['jsx', 'sass', 'watch', 'browser-sync']);

//Compile LESS files
gulp.task('jsx', function(cb) {

  return buildScript('app.js', false);

});

gulp.task('build', function(cb){
  var props = {
    entries: [ 'example/_src/jsx/app.js'],
    debug : false,
    transform:  [babelify]
  };


});

//Builds ES6 into ES5 (Specific for searchapp for now)
function buildScript(file, watch) {
  var props = {
    entries: [ 'example/_src/jsx/app.js'],
    debug : false,
    transform:  [babelify]
  };

  // watchify() if watch requested, otherwise run browserify() once
  var bundler = watch ? watchify(browserify(props)) : browserify(props);


  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      // .pipe(gulp.dest(exampleDir + '/js/'))
      // If you also want to uglify it
      .pipe(buffer())
      // .pipe(uglify())
      .pipe(rename('app.js'))
      .pipe(gulp.dest('example/js/'))
      // .pipe(reload({stream:true}))
  }

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

gulp.task('sass', function(cb) {

  return gulp.src(['example/_src/sass/main.scss'])
  .pipe(plumber({
      errorHandler: onError
    }))
  .pipe(sass())
  .pipe(gulp.dest('example/css'));

});

gulp.task('watch', function(cb) {

  gulp.watch( ['example/_src/jsx/**/*.js', 'src/*js'], ['jsx']);
  gulp.watch( 'example/_src/sass/**/*.scss', ['sass']);

});

gulp.task('browser-sync', function() {
    browserSync.init({
        logLevel: "debug",
        server: {
            baseDir: './example'
        }
    });
});

var onError = function (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
};
