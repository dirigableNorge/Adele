"use strict";

var gulp = require("gulp");
var server = require("browser-sync").create();
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("gulp-autoprefixer");
var minify = require("gulp-csso");
var rename = require("gulp-rename");

gulp.task("style", function () {
  gulp.src("source/sass/style.sсss")
  .pipe(plumber())
  .pipe(sass())
  // .pipe(postcss([
  //   autoprefixer()
  // ]))
  // .pipe(gulp.dest("source/css"))
  // .pipe(minify());
  // .pipe(rename("style.min.css"))
  .pipe(gulp.dest("source/css"))
  .pipe(server.stream());
});

gulp.task("serve", function () {
  server.init({
    server: "source/"
  });

  gulp.watch("source/sass/**/*.scss", gulp.series("style"));
  gulp.watch("source/*.html")
    .on("change", server.reload);

})

gulp.task("default", gulp.series("style","serve"));
