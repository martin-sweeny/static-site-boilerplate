const inject = require('gulp-inject')
const chalk = require('chalk')

module.exports = (gulp, config) => gulp.task('inject-gtm', () => gulp.src(`${config.paths.src}/index.html`)
    .pipe(inject(gulp.src('../gtm/head.html'), {
        starttag: '<!-- inject:gtm-head -->',
        transform: (filepath, file) => {
            console.log(chalk.blue(filepath, file))
            return file.contents.toString()
        }
    }))
    .pipe(inject(gulp.src('./gtm/body.html')), {
        starttag: '<!-- inject:gtm-body -->',
        transform: (filepath, file) => file.contents.toString()
    }))