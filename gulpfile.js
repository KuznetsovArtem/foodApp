// Generated on 2015-12-08 using generator-angular 0.14.0
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var openURL = require('open');
var lazypipe = require('lazypipe');
var rimraf = require('rimraf');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');

var less = require('gulp-less'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    templateCache = require('gulp-angular-templatecache'),
    inject = require('gulp-inject');

var FoodAPP = {
    app: require('./bower.json').appPath || './app',
    dist: './dist',
    // TODO: next 2 params move to env conf;
    host: '*',
    port: 3030
};

gulp.task('serve', ['less', 'start:server', 'watch:dev', 'inject:dev'], function () {
    openURL(['http://localhost', FoodAPP.port].join(':'));
});

//TODO fix this
gulp.task('serve:prod', ['scripts:build', 'scripts', 'templates', 'start:server', 'watch'], function () {
    openURL([FoodAPP.host, FoodAPP.port].join(':'));
});

gulp.task('start:server', function () {
    connect.server({
        root: FoodAPP.app,
        livereload: true,
        // Change this to '0.0.0.0' to access the server from outside.
        port: FoodAPP.port
    });
});

gulp.task('watch:dev', function () {
    gulp.watch('./app/src/less/**/*.less', ['less']);
    gulp.watch('./app/.tmp/**/*.css', ['inject:dev']);
    gulp.watch(['./app/**/*.html', './app/**/*.js', './app/**/*.css'], ['html']);
});

gulp.task('less', function () {
    return gulp.src('./app/src/less/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./app/.tmp/css'))
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('inject:dev', function () {
    var target = gulp.src('./app/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src([

        FoodAPP.app + "/libs/angular/angular.min.js",
        FoodAPP.app + "/libs/angular-route/angular-route.min.js",
        FoodAPP.app + "/libs/angular-cookies/angular-cookies.min.js",
        FoodAPP.app + "/libs/angular-animate/angular-animate.js",
        FoodAPP.app + "/libs/angular-resource/angular-resource.min.js",
        FoodAPP.app + "/libs/angular-sanitize/angular-sanitize.min.js",
        FoodAPP.app + "/libs/angular-touch/angular-touch.min.js",
        FoodAPP.app + "/libs/OnsenUI/js/onsenui.min.js",

        //dev
        FoodAPP.app + "/libs/angular-mocks/angular-mocks.js",

        //proj
        './app/.tmp/**/*.css',
        './app/src/**/*.js',
        './app/modules/**/*.js'
    ], {read: false});

    return target.pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./app'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('./app/**/*.html')
        .pipe(connect.reload());
});

gulp.task('scripts', function () {
    return gulp.src(['./app/scripts/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('./app/dist/'))
        .pipe(connect.reload());
});

gulp.task('scripts:build', function () {
    return gulp.src([
            "./app/libs/angular/angular.min.js",
            "./app/libs/angular-resource/angular-resource.min.js",
            "./app/libs/angular-cookies/angular-cookies.min.js",
            "./app/libs/angular-animate/angular-animate.js",
            "./app/libs/bootstrap/dist/js/bootstrap.min.js"])

        .pipe(concat('dependencies.js'))
        .pipe(gulp.dest('./app/libs/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('./app/libs/'))
});

gulp.task('templates', function () {
    return gulp.src(['./app/src/**/*.html', '!./app/src/index.html'])
        .pipe(templateCache('templatescache.js', {
            module: 'templatesCache', standalone: true, root: '', base: function (f) {

                return f.relative.split('/').pop();
            }
        }))
        .pipe(gulp.dest('./app/dist/templatesCache'))
        .pipe(connect.reload());
});
