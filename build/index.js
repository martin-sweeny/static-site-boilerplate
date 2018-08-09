const fs = require("fs");
const gulp = require("gulp");
const path = require("path");
const runSequence = require("run-sequence");
// @TODO Move this outta here
const browserSync = require("browser-sync").create();

const config = {
  paths: {
    src: path.resolve(__dirname, "../src"),
    dist: path.resolve(__dirname, "../dist")
  }
};

require("./tasks/serve.gulp")(gulp, config, {
  browserSync
});
require("./tasks/sass.gulp")(gulp, config, {
  browserSync
});
require("./tasks/minify-css.gulp")(gulp, config);
require("./tasks/minify-html.gulp")(gulp, config);
require("./tasks/copy-images.gulp")(gulp, config);
require("./tasks/copy-fonts.gulp")(gulp, config);
require("./tasks/clean-dist.gulp")(gulp, config);
require("./tasks/pug.gulp")(gulp, config, browserSync.reload);

let buildTasks = [];

if (fs.existsSync(config.paths.dist)) {
  console.log("dist exists");
  buildTasks.push("clean-dist");
}

buildTasks.push(["pug", "sass", "copy-images", "copy-fonts"]);

// Development
gulp.task(
  "default",
  gulp.series("pug", "sass", "copy-images", "copy-fonts", "serve")
);

// More tasks for prod...
buildTasks.push(["minify-html", "minify-css"]);

// Production
gulp.task("build", gulp.series(buildTasks));
