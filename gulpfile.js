const cli = require("gulp-cli");
const gulpit = require("gulp");
const cleancss = require('gulp-clean-css');
const csscomb = require('gulp-csscomb');
const rename = require('gulp-rename');

function build() {
    console.log("build", cli, gulpit);

    return gulpit
        .src('./client/css/*.css')
        .pipe(csscomb())
        .pipe(gulpit.dest('./dist'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulpit.dest('./dist'));
}


function watch() {
    console.log("watch");
    gulp.watch('./client/*.css', build);
}

exports.watch = watch;
exports.build = build;
exports.default = build;
