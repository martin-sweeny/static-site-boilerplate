const rm = require('gulp-rm')

module.exports = (gulp, config) => gulp.task('clean-dist', () =>
    gulp.src(`${config.paths.dist}/**/*`, { read: false })
        .pipe( rm({ async: false }) )
);
