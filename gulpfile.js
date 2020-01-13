var gulp = require("gulp"),
    minify = require("gulp-minify"),
    cssMinify = require("gulp-clean-css"),
    sass = require("gulp-sass"),
    watch = require("gulp-watch");

/*

SOURCES

*/

//Styles
var scss = "prod/scss/main.scss",
    css = "prod/style.css";

//Scripts
var scripts = "./prod/js/*.js";
var themeScriptProd = "prod/scripts.js";

/*

DESTINATIONS

*/

//Styles
var scssDest = "dist/css",
    cssDest = "dist";

//Scripts
var scriptsDest = "./dist/js";
var themeScriptDist = "dist";

/*

TASKS

*/

gulp.task("themeScripts", function(){
    return gulp.src(themeScriptProd)
        .pipe(minify({
            ext: {
                src: ".js",
                min: "-min.js"
            }
        }))
        .pipe(gulp.dest(themeScriptDist));
});

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
		.pipe(gulp.dest(cssDest));
});

gulp.task("god",["themeScripts", "scripts", "sass"]);
