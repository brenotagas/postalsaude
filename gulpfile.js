var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./src/assets/sass/**/**')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/app/'));
});

gulp.task('sass:watch', function(){
    //gulp.watch(['./src/assets/sass/*.scss', './src/assets/sass/**/**/*.scss'], ['sass']);
    //gulp.watch('./src/assets/sass/*.scss', gulp.series('sass'));
    gulp.watch(['./src/assets/sass/*.scss', './src/assets/sass/**/**/*.scss'], gulp.series('sass'));
});