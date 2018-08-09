module.exports = (gulp, config, { browserSync }) =>
  gulp.task("serve", () => {
    browserSync.init({
      files: `${config.paths.dist}/*`,
      server: {
        baseDir: config.paths.dist,
        index: "index.html"
      }
    });

    gulp.watch(
      `${config.paths.src}/resources/sass/**/*.sass`,
      gulp.series("sass")
    );
    gulp.watch(`${config.paths.src}/**/*.pug`, gulp.series("pug"));
  });
