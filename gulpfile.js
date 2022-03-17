const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

// Imagens
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

// Javascript
const terser = require('gulp-terser-js');

const css = function (start) {
  src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css'));
  start();
};

const images = function (start) {
  const options = {
    optimizationLevel: 3,
  };
  src('src/img/**/*.{png,jpg}')
    .pipe(cache(imagemin(options)))
    .pipe(dest('build/img'));
  start();
};

const versionWebp = function (start) {
  const options = {
    quality: 50,
  };
  src('src/img/**/*.{png,jpg}').pipe(webp(options)).pipe(dest('build/img'));
  start();
};

const versionAvif = function (start) {
  const options = {
    quality: 50,
  };
  src('src/img/**/*.{png,jpg}').pipe(avif(options)).pipe(dest('build/img'));
  start();
};

const javascript = function (start) {
  src('src/js/**/*.js').pipe(sourcemaps.init()).pipe(terser()).pipe(sourcemaps.write('.')).pipe(dest('build/js'));
  start();
};

const dev = function (start) {
  watch('src/scss/**/*.scss', css);
  watch('src/js/**/*.js', javascript);
  start();
};

exports.css = css;
exports.js = javascript;
exports.images = images;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(images, versionWebp, versionAvif, javascript, dev);
