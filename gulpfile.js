"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass",function(){
  return gulp.src("sass/style.sсss")
  .pipe(sass())
  .pipe(gulp.dest("css"));
})
