const sass = require("gulp-sass");

module.exports = (gulp, config, { browserSync }) =>
  gulp.task("sass", () =>
    gulp
      .src(`${config.paths.src}/resources/sass/**/*.sass`, ["sass"])
      .pipe(sass())
      .pipe(gulp.dest(`${config.paths.dist}/assets/css`))
      .pipe(browserSync.stream())
  );
