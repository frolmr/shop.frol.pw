'use strict';

var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    livereload = require('gulp-livereload'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    wiredep = require('wiredep').stream,
    useref = require('gulp-useref'),
    minifyCss = require('gulp-minify-css'),
    gulpif = require('gulp-if'),
    clean = require('gulp-clean'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify');

var paths = {
    images: ['app/images/*.*'],
    fonts: ['app/fonts/**'],
    fav: ['app/favicon.png'],
    css: ['app/styles/css/main.css'],
    html: ['app/html/*.html'],
    js: ['app/scripts/*.js']
}

gulp.task('production', ['css', 'html', 'images', 'js', 'fav', 'fonts', 'bower'])
gulp.task('default', ['css', 'html', 'images', 'js', 'fav', 'fonts', 'watch', 'bower']);
gulp.task('clean', function(){
    gulp.src('dist', {
        read: false
    })
        .pipe(clean());
});

gulp.task('html', function() {
    gulp.src(paths.html)
        .pipe(gulp.dest('./dist'))
})

gulp.task('css', function() {
    gulp.src(paths.css)
        .pipe(prefix("last 10 version", "> 1%", "ie 8"))
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./dist/styles'))
});

gulp.task('bower', function () {
    gulp.src('./dist/*.html')
        .pipe(wiredep({
            directory: "bower_components"
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('images', function(){
    gulp.src(paths.images)
        .pipe(gulp.dest('dist/images/'));
});
gulp.task('js', function(){
    gulp.src(paths.js)
        .pipe(gulp.dest('dist/scripts/'));
});
gulp.task('fav', function(){
    gulp.src(paths.fav)
        .pipe(gulp.dest('dist/'));
});
gulp.task('fonts', function(){
    gulp.src(paths.fonts)
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('app/styles/css/*.css', ['css']).on('change', livereload.changed);
    gulp.watch('app/html/*.html', ['html']).on('change', livereload.changed);
    gulp.watch('app/scripts/*.js', ['js']).on('change', livereload.changed);
});