var gulp = require("gulp"),
    minify = require("gulp-minify"),
    cssMinify = require("gulp-clean-css"),
    sass = require("gulp-sass"),
    watchSass = require("gulp-watch-sass");

/*

SOURCES

*/

//Styles
var scss = "prod/scss/**/*.{scss,css}",
    css = "prod/style.css";

//Scripts
var scripts = "./prod/js/*.js";
var themeScriptProd = "prod/scripts.js";

/*

DESTINATIONS

*/

//Styles
var scssDest = "dist/css",
    cssDest = "dist/";

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

gulp.task("sass:watch", () => watchSass([
    scss
])
    .pipe(sass().on("error", sass.logError))
    .pipe(cssMinify({compatibility: "ie8"}))
    .pipe(gulp.dest(cssDest)));
