var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('watch', function() {
   // gulp.watch('style.css', ['css']);
    //gulp.watch('index.html', ['html'])
});

gulp.task('default', ['webserver']);