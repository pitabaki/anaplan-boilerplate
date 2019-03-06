var gulp = require("gulp"),
    minify = require("gulp-minify"),
    cssMinify = require("gulp-clean-css"),
    sass = require("gulp-sass");

/*

SOURCES

*/

//Styles
var scss = "prod/scss/style_test.scss",
    css = "prod/style_test.css";

//Scripts
var scripts = "./prod/js/*.js";

/*

DESTINATIONS

*/

//Styles
var scssDest = "dist/css",
    cssDest = "dist";

//Scripts
var scriptsDest = "./dist/js";

/*

TASKS

*/

gulp.task("scripts", function(){
    return gulp.src(scripts)
        .pipe(minify())
        .pipe(gulp.dest(scriptsDest));
});

gulp.task('styles', function(){
    return gulp.src(css)
        .pipe(cssMinify({compatibility: 'ie8'}))
        .pipe(gulp.dest(cssDest));
});

gulp.task('sass', function(){
	return gulp.src(scss)
		.pipe(sass().on('error', sass.logError))
		.pipe(cssMinify({compatibility: 'ie8'}))
		.pipe(gulp.dest(scssDest));
});

gulp.task("god",["scripts", "styles", "sass"]);
