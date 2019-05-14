import babel from 'gulp-babel'
import concat from 'gulp-concat'
import del from 'del'
import gulp from 'gulp'
import sass from 'gulp-sass'
import plumber from 'gulp-plumber'
import pug from 'gulp-pug'
import uglify from 'gulp-uglify'
import path from 'path'
import browserSync from 'browser-sync'

const server = browserSync.create()

const paths = {
	src: path.resolve(__dirname, '../src'),
	dest: path.resolve(__dirname, '../dist'),
}

const clean = () => del(['dist'])

const scripts = () =>
	gulp
		.src(`${paths.src}/resources/scripts/*.js`, { sourcemaps: true })
		.pipe(babel())
		.pipe(uglify())
		.pipe(concat('index.min.js'))
		.pipe(gulp.dest(`${paths.dest}/assets/js`))

const compileSass = () =>
	gulp
		.src(`${paths.src}/resources/sass/main.sass`)
		.pipe(plumber())
		.on('error', function (e) {
			console.error(e)
			this.emit('end')
		})
		.pipe(sass())
		.pipe(gulp.dest(`${paths.dest}/assets/css`))

const compilePug = () =>
	gulp
		.src(`${paths.src}/*.pug`)
		.pipe(pug())
		.pipe(gulp.dest(`${paths.dest}`))

const reload = done => {
	server.reload()
	done()
}

const copyImages = () => gulp.src(
	[`${paths.src}/resources/images/**/*.png`,
	`${paths.src}/resources/images/**/*.jpg`],
)
	.pipe(gulp.dest(`${paths.dest}/assets/images`))

const serve = done => {
	server.init({
		server: {
			baseDir: paths.dest,
		},
	})
	done()
}

const buildTasks = [clean, scripts, compilePug, compileSass, copyImages, serve]

gulp.task('watch', () => {
	gulp.watch(`./src/resources/sass/*.sass`, gulp.series(compileSass, reload))
	gulp.watch(`./src/resources/images/*`, gulp.series(copyImages, reload))
	gulp.watch(`./src/**/*.pug`, gulp.series(compilePug, reload))
	gulp.watch(`./src/resources/scripts/*.js`, gulp.series(scripts, reload))
	return gulp.series(...buildTasks)
})

const dev = gulp.series(...buildTasks, 'watch')

export default dev
