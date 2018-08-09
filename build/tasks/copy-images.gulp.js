module.exports = (gulp, config) => gulp.task('copy-images', () => gulp.src([
        `${config.paths.src}/assets/img/**/*.jpg`,
        `${config.paths.src}/assets/img/**/*.png`,
    ])
    .pipe(gulp.dest(`${config.paths.dist}/assets/img`)))