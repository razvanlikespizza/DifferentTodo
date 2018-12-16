var gulp = require("gulp"),
    pug = require("gulp-pug"),
    stylus = require("gulp-stylus");

gulp.task("makeHTML", function (){
  console.log("-> making html <-");
  return gulp.src("./src/html/index.pug")
  .pipe(pug())
  .pipe(gulp.dest("./build"))
});

gulp.task("makeCSS", function() {
  console.log("-> making css <-");
  return gulp.src("./src/style/*.styl")
  .pipe(stylus())
  .pipe(gulp.dest("./build"))
});

// gulp.task("watch", function() {
//   gulp.watch("./src/html/*.pug", ["makeHTML"]);
// });

gulp.task("default", ["makeHTML", "makeCSS"], function(){
  gulp.watch("./src/html/*.pug", ["makeHTML"]);
  gulp.watch("./src/style/*.styl", ["makeCSS"]);
});