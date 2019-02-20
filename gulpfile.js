var gulp = require("gulp"),
    minify = require("gulp-minify"),
    watch = require("gulp-watch");


gulp.task("scripts", function(){
    return gulp.src("./prod/js/*.js")
        .pipe(minify())
        .pipe(gulp.dest("./dist/js"))
});
