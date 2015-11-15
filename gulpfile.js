const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("default", () => {
   return gulp
      .src("src/index.jsx")
      .pipe(
         babel()
      )
      .pipe( gulp.dest("dist") );
});
