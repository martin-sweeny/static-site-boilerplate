module.exports = (gulp, config) => gulp.task('copy-fonts', () => gulp.src([
        `${config.paths.src}/assets/font/**/*.eot`,
        `${config.paths.src}/assets/font/**/*.ttf`,
        `${config.paths.src}/assets/font/**/*.woff`,
        `${config.paths.src}/assets/font/**/*.woff2`,
        `${config.paths.src}/assets/font/**/*.otf`,
        `${config.paths.src}/assets/font/**/*.svg`,
    ])
    .pipe(gulp.dest(`${config.paths.dist}/assets/font`)))