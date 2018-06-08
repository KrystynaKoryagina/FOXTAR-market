// подключение пакетов
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer'); // проставляет вендорные префиксы
const rename = require('gulp-rename'); // переименовывает файлы
const minifycss = require('gulp-cssmin'); // минимизирует css
const tinypng = require('gulp-tinypng'); // оптимизирует картинки

gulp.task('css', function() {
    return gulp.src('src/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['cover 99.5%', 'iOS 7']
        }))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('cssmin', function() {
    return gulp.src('app/css/style.css')
        .pipe(minifycss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('app/css/'));
})

gulp.task('tinypng', function() {
    return gulp.src(['src/img/*.png', 'src/img/*.jpg'])
        .pipe(tinypng('eGwHsgRHgRYLa2syNI121TJRmNwb7J46'))
        .pipe(gulp.dest('app/img/'));
})

gulp.task('watch', ['css', 'cssmin'] ,function() {
    gulp.watch('src/css/**/*.css', ['css']);
    gulp.watch('app/css/style.css', ['cssmin']);
});
