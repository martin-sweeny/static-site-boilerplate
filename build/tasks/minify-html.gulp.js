const htmlmin = require("gulp-htmlmin");

module.exports = (gulp, config) =>
  gulp.task("minify-html", () =>
    gulp
      .src(`${config.paths.dist}/*.html`)
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest(`${config.paths.dist}/`))
  );
