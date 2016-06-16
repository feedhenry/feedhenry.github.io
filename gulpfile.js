var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    nunjucksRender = require('gulp-nunjucks-render'),
    reload = browserSync.reload;

// Uglyfies js on to /js/minjs
gulp.task('scripts', function(){  
  gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest("js/minjs"));
}); 


// Compiles less on to /css
gulp.task('less', function () {
  gulp.src('source/less/**/*.less')
   .pipe(plumber())
   .pipe(less())
   .pipe(gulp.dest('css'))
   .pipe(reload({stream:true}));
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  gulp.src('source/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['source/templates']
    }))
  // output files in build folder
  .pipe(gulp.dest('./'))
});

// reload server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// watch for changes on files
gulp.task('watch', function(){ 
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('source/less/*.less', ['less']);
    gulp.watch('source/**/*.nunjucks', ['nunjucks']);
    gulp.watch("*.*", ['bs-reload']);
}); 

// deploys
gulp.task('default',  ['scripts', 'less', 'nunjucks', 'browser-sync','watch']);
