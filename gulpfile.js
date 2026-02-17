const gulpit = require("gulp");
const cleancss = require('gulp-clean-css');
const csscomb = require('gulp-csscomb');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const concat = require("gulp-concat")

function buildCore() {
    console.log("Building Core");
    return gulpit
        .src([
            './css/core/base/*.css',
            './css/core/core-layout/*.css',
            './css/core/core-helpers/*.css'
        ])
        //.pipe(autoprefixer())
        .pipe(concat("goldilocks.core.css"))
        .pipe(csscomb())
        .pipe(gulpit.dest('./dist'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulpit.dest('./dist'));
}

function buildElements() {
    console.log("Building Elements");
    return gulpit
        .src([
            './css/core/base/*.css',
            './css/core/core-layout/*.css',
            './css/core/core-helpers/*.css',
            './css/core/core-elements/*.css'
        ])
        //.pipe(autoprefixer())
        .pipe(concat("goldilocks.elements.css"))
        .pipe(csscomb())
        .pipe(gulpit.dest('./dist'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulpit.dest('./dist'));
}

function buildExtended() {
    console.log("Building Extended");
    return gulpit
        .src('./css/extended/**/*.css')
        //.pipe(autoprefixer())
        .pipe(concat("goldilocks.extended.css"))
        .pipe(csscomb())
        .pipe(gulpit.dest('./dist'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulpit.dest('./dist'));
}

function buildExtras() {
    console.log("Building Extras");
    return gulpit
        .src('./css/extras/**/*.css')
        //.pipe(autoprefixer())
        .pipe(concat("goldilocks.extras.css"))
        .pipe(csscomb())
        .pipe(gulpit.dest('./dist'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulpit.dest('./dist'));
}

function buildCoreExtended() {
    console.log("Building Core Extended");
    return gulpit
        .src([
            './css/core/base/*.css',
            './css/core/core-layout/*.css',
            './css/core/core-elements/*.css',
            './css/extended/**/*.css',
            './css/core/core-helpers/*.css'
        ])
        //.pipe(autoprefixer())
        .pipe(concat("goldilocks.core-extended.css"))
        .pipe(csscomb())
        .pipe(gulpit.dest('./dist'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulpit.dest('./dist'));
}

function buildAll() {
    console.log("Building All");
    return gulpit
        .src([
            './css/core/base/*.css',
            './css/core/core-layout/*.css',
            './css/core/core-helpers/*.css',
            './css/core/core-elements/*.css',
            './css/extended/**/*.css',
            './css/extras/**/*.css',
        ])
        //.pipe(autoprefixer())
        .pipe(concat("goldilocks.all.css"))
        .pipe(csscomb())
        .pipe(gulpit.dest('./dist'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulpit.dest('./dist'));
}

function watch() {

    gulpit.watch('./**/*.css', buildCore);
}

//exports.watch = watch;
exports.buildCore = buildCore;
exports.buildElements = buildElements;
exports.buildExtended = buildExtended;
exports.buildExtras = buildExtras;
exports.buildCoreExtended = buildCoreExtended;
exports.buildAll = buildAll;
exports.default = buildAll;
