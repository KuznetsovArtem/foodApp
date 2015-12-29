// Generated on 2015-12-08 using generator-angular 0.14.0
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var openURL = require('open');
var lazypipe = require('lazypipe');
var rimraf = require('rimraf');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');

//var inject = require('gulp-inject');

//gulp.task('index', function () {
//  var target = gulp.src('./src/index.html');
//  // It's not necessary to read the files (will speed up things), we're only after their paths:
//  var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], {read: false});
//
//  return target.pipe(inject(sources))
//    .pipe(gulp.dest('./src'));
//});

//441N143G
var less = require('gulp-less'),
  path = require('path'),
  autoprefixer = require('gulp-autoprefixer'),
  minifyCss = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  connect = require('gulp-connect'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  gutil = require('gulp-util'),
  templateCache = require('gulp-angular-templatecache');

gulp.task('serve', ['less', 'less:tmp', 'start:server', 'watch' ], function () {
  openURL('http://localhost:1337');
});

//TODO fix this
gulp.task('serve:prod', ['scripts:build', 'scripts', 'templates', 'start:server', 'watch' ], function () {
  openURL('http://localhost:1337');
});

gulp.task('start:server', function () {
  connect.server({
    root: AHA.app,
    livereload: true,
    // Change this to '0.0.0.0' to access the server from outside.
    port: 1337
  });
});

gulp.task('watch', function () {
  gulp.watch('./app/src/less/**/*.less', ['less']);
  gulp.watch('./app/.tmp/**/*.less', ['less:tmp']);
  gulp.watch(['./app/**/*.html', './app/**/*.js', './app/**/*.css'], ['html']);
});

gulp.task('less', function () {
  return gulp.src('./app/src/less/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(autoprefixer({
      browsers: ['last 1 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./app/src/less'))
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('less:tmp', function () {
  return gulp.src('./app/.tmp/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(autoprefixer({
      browsers: ['last 1 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./app/.tmp/'))
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
    .pipe(templateCache('templatescache.js', { module:'templatesCache', standalone:true, root:'',base: function (f) {

      return f.relative.split('/').pop();
    }  }))
    .pipe(gulp.dest('./app/dist/templatesCache'))
    .pipe(connect.reload());
});

//441N143G

var AHA = {
  app: require('./bower.json').appPath || './app',
  dist: './dist'
};

//var paths = {
//  scripts: [AHA.app + '/scripts/**/*.js'],
//  styles: [AHA.app + '/styles/**/*.scss'],
//  test: ['test/spec/**/*.js'],
//  testRequire: [
//    AHA.app + '/libs/angular/angular.js',
//    AHA.app + '/libs/angular-mocks/angular-mocks.js',
//    AHA.app + '/libs/angular-resource/angular-resource.js',
//    AHA.app + '/libs/angular-cookies/angular-cookies.js',
//    AHA.app + '/libs/angular-sanitize/angular-sanitize.js',
//    AHA.app + '/libs/angular-route/angular-route.js',
//    'test/mock/**/*.js',
//    'test/spec/**/*.js'
//  ],
//  karma: 'karma.conf.js',
//  views: {
//    //main: AHA.app + '/index.html',
//    main: 'app/index.html',
//    files: [AHA.app + '/views/**/*.html']
//  }
//};
//
//////////////////////////
//// Reusable pipelines //
//////////////////////////
//
//var lintScripts = lazypipe()
//  .pipe($.jshint, '.jshintrc')
//  .pipe($.jshint.reporter, 'jshint-stylish');
//
//var styles = lazypipe()
//  .pipe($.sass, {
//    outputStyle: 'expanded',
//    precision: 10
//  })
//  .pipe($.autoprefixer, 'last 1 version')
//  .pipe(gulp.dest, '.tmp/styles');
//
/////////////
//// Tasks //
/////////////
//
//gulp.task('styles', function () {
//  return gulp.src(paths.styles)
//    .pipe(styles());
//});
//
//gulp.task('lint:scripts', function () {
//  return gulp.src(paths.scripts)
//    .pipe(lintScripts());
//});
//
//gulp.task('clean:tmp', function (cb) {
//  rimraf('./.tmp', cb);
//});
//
//gulp.task('start:client', ['start:server', 'styles'], function () {
//  openURL('http://localhost:9000');
//});
//
//gulp.task('start:server', function() {
//  $.connect.server({
//    root: [AHA.app, '.tmp'],
//    livereload: true,
//    // Change this to '0.0.0.0' to access the server from outside.
//    port: 9000
//  });
//});
//
//gulp.task('start:server:test', function() {
//  $.connect.server({
//    root: ['test', AHA.app, '.tmp'],
//    livereload: true,
//    port: 9001
//  });
//});
//
//gulp.task('watch', function () {
//  $.watch(paths.styles)
//    .pipe($.plumber())
//    .pipe(styles())
//    .pipe($.connect.reload());
//
//  $.watch(paths.views.files)
//    .pipe($.plumber())
//    .pipe($.connect.reload());
//
//  $.watch(paths.scripts)
//    .pipe($.plumber())
//    .pipe(lintScripts())
//    .pipe($.connect.reload());
//
//  $.watch(paths.test)
//    .pipe($.plumber())
//    .pipe(lintScripts());
//
//  gulp.watch('bower.json', ['bower']);
//});
//
//gulp.task('serve', function (cb) {
//  runSequence('clean:tmp',
//    ['lint:scripts'],
//    ['start:client'],
//    'watch', cb);
//});
//
//gulp.task('serve:prod', function() {
//  $.connect.server({
//    root: [AHA.dist],
//    livereload: true,
//    port: 9000
//  });
//});
//
//gulp.task('test', ['start:server:test'], function () {
//  var testToFiles = paths.testRequire.concat(paths.scripts, paths.test);
//  return gulp.src(testToFiles)
//    .pipe($.karma({
//      configFile: paths.karma,
//      action: 'watch'
//    }));
//});
//
//// inject bower components
//gulp.task('bower', function () {
//  gulp.src('./app/index.html')
//    .pipe(wiredep({
//      exclude: "www/lib/angular/angular.js"
//    }))
//    .pipe(gulp.dest(AHA.app));
//});
////gulp.task('bower', function () {
////  return gulp.src(paths.views.main)
////    .pipe(wiredep({
////      //directory: AHA.app + '/libs',
////      //ignorePath: '..'
////    }))
////  .pipe(gulp.dest(AHA.app + '/views'));
////});
//
/////////////
//// Build //
/////////////
//
//gulp.task('clean:dist', function (cb) {
//  rimraf('./dist', cb);
//});
//
//gulp.task('client:build', ['html', 'styles'], function () {
//  var jsFilter = $.filter('**/*.js');
//  var cssFilter = $.filter('**/*.css');
//
//  return gulp.src(paths.views.main)
//    .pipe($.useref.assets({searchPath: [AHA.app, '.tmp']}))
//    .pipe(jsFilter)
//    .pipe($.ngAnnotate())
//    .pipe($.uglify())
//    .pipe(jsFilter.restore())
//    .pipe(cssFilter)
//    .pipe($.minifyCss({cache: true}))
//    .pipe(cssFilter.restore())
//    .pipe($.rev())
//    .pipe($.useref.restore())
//    .pipe($.revReplace())
//    .pipe($.useref())
//    .pipe(gulp.dest(AHA.dist));
//});
//
//gulp.task('html', function () {
//  return gulp.src(AHA.app + '/views/**/*')
//    .pipe(gulp.dest(AHA.dist + '/views'));
//});
//
//gulp.task('images', function () {
//  return gulp.src(AHA.app + '/images/**/*')
//    .pipe($.cache($.imagemin({
//        optimizationLevel: 5,
//        progressive: true,
//        interlaced: true
//    })))
//    .pipe(gulp.dest(AHA.dist + '/images'));
//});
//
//gulp.task('copy:extras', function () {
//  return gulp.src(AHA.app + '/*/.*', { dot: true })
//    .pipe(gulp.dest(AHA.dist));
//});
//
//gulp.task('copy:fonts', function () {
//  return gulp.src(AHA.app + '/fonts/**/*')
//    .pipe(gulp.dest(AHA.dist + '/fonts'));
//});
//
//gulp.task('build', ['clean:dist'], function () {
//  runSequence(['images', 'copy:extras', 'copy:fonts', 'client:build']);
//});
//
//gulp.task('default', ['build']);
