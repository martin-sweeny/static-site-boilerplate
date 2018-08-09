const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')

module.exports = (gulp, config) => gulp.task('minify-css', () => gulp.src(`${config.paths.src}/assets/css/*.css`)
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${config.paths.dist}/assets/css`)))