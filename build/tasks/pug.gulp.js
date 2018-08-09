const pug = require("gulp-pug");

module.exports = (gulp, config, reload) => {
  gulp.task("templates", () =>
    gulp
      .src(`${config.paths.src}/**/*.pug`)
      .pipe(
        pug({
          pretty: true
        })
      )
      .pipe(gulp.dest(config.paths.dist))
  );
  return gulp.task("pug", gulp.series("templates"), reload);
};
