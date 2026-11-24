const gulpit = require("gulp");
const { Transform } = require("stream");
const browserslist = require("browserslist");
const { transform: transformCss, browserslistToTargets } = require("lightningcss");
const rename = require('gulp-rename');
const concat = require("gulp-concat");

const targets = browserslistToTargets(browserslist("baseline newly available"));

const setupBaseFirst = () => {
    const files = [];

    return new Transform({
        objectMode: true,
        transform(file, encoding, callback) {
            files.push(file);
            callback();
        },
        flush(callback) {
            const setupIndex = files.findIndex(file => file.path.endsWith('/setup_base_html.css'));
            if (setupIndex > 0) {
                files.unshift(files.splice(setupIndex, 1)[0]);
            }
            files.forEach(file => this.push(file));
            callback();
        }
    });
};

const lightningCss = (minify = false) => new Transform({
    objectMode: true,
    transform(file, encoding, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }

        if (file.isStream()) {
            return callback(new Error("Streaming CSS files are not supported."));
        }

        try {
            const result = transformCss({
                filename: file.path,
                code: file.contents,
                minify,
                targets
            });
            file.contents = Buffer.from(result.code);
            callback(null, file);
        } catch (error) {
            callback(error);
        }
    }
});

function buildCore() {
    console.log("Building Core");
    return gulpit
        .src([
            './css/core/base/*.css',
            './css/core/core-layout/*.css',
            './css/core/core-helpers/*.css'
        ])
        .pipe(setupBaseFirst())
        .pipe(concat("goldilocks.core.css"))
        .pipe(lightningCss())
        .pipe(gulpit.dest('./dist'))
        .pipe(lightningCss(true))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulpit.dest('./dist'));
}

function buildCoreElements() {
    console.log("Building Elements");
    return gulpit
        .src([
            './css/core/base/*.css',
            './css/core/core-layout/*.css',
            './css/core/core-helpers/*.css',
            './css/core/core-elements/*.css'
        ])
        .pipe(setupBaseFirst())
        .pipe(concat("goldilocks.core-elements.css"))
        .pipe(lightningCss())
        .pipe(gulpit.dest('./dist'))
        .pipe(lightningCss(true))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulpit.dest('./dist'));
}

function buildExtended() {
    console.log("Building Extended");
    return gulpit
        .src('./css/extended/**/*.css')
        .pipe(concat("goldilocks.extended.css"))
        .pipe(lightningCss())
        .pipe(gulpit.dest('./dist'))
        .pipe(lightningCss(true))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulpit.dest('./dist'));
}

function buildExtras() {
    console.log("Building Extras");
    return gulpit
        .src('./css/extras/**/*.css')
        .pipe(concat("goldilocks.extras.css"))
        .pipe(lightningCss())
        .pipe(gulpit.dest('./dist'))
        .pipe(lightningCss(true))
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
            './css/core/core-helpers/*.css',
            './css/core/core-elements/*.css',
            './css/extended/**/*.css'
        ])
        .pipe(setupBaseFirst())
        .pipe(concat("goldilocks.core-extended.css"))
        .pipe(lightningCss())
        .pipe(gulpit.dest('./dist'))
        .pipe(lightningCss(true))
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
        .pipe(setupBaseFirst())
        .pipe(concat("goldilocks.all.css"))
        .pipe(lightningCss())
        .pipe(gulpit.dest('./dist'))
        .pipe(lightningCss(true))
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
exports.buildCoreElements = buildCoreElements;
exports.buildExtended = buildExtended;
exports.buildExtras = buildExtras;
exports.buildCoreExtended = buildCoreExtended;
exports.buildAll = buildAll;
exports.default = buildAll;
