const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// Imagens
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

// Javascript
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const terser = require('gulp-terser');

// Cria servidor para reload.
const browser = function (start) {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  start();
};

// Compila SASS, adiciona prefixo e minifica CSS.
const css = function (start) {
  src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css'))
    .pipe(browserSync.stream());
  start();
};

// Reduz o tamanho das imagens .png e .jpg.
const images = function (start) {
  const options = {
    optimizationLevel: 3,
  };
  src('src/img/**/*.{png,jpg}')
    .pipe(cache(imagemin(options)))
    .pipe(dest('build/img'));
  start();
};

// Converte as imagens para .webp
const versionWebp = function (start) {
  src('src/img/**/*.{png,jpg}')
    .pipe(
      webp({
        quality: 50,
      }),
    )
    .pipe(dest('build/img'));
  start();
};

// Converte as imagens para .avif.
const versionAvif = function (start) {
  src('src/img/**/*.{png,jpg}')
    .pipe(
      avif({
        quality: 50,
      }),
    )
    .pipe(dest('build/img'));
  start();
};

// Função para colocar em ordem os arquivos .js ao concatenar.
const jsFiles = function () {
  const files = ['src/js/area.js', 'src/js/media.js'];
  return files;
};

// Concatena arquivos .js, minifica e adiciona compatibilidade.
const javascript = function (start) {
  src(jsFiles())
    .pipe(sourcemaps.init())
    .pipe(concat('script.js'))
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'))
    .pipe(browserSync.stream());
  start();
};

// Observador para as alterações.
const dev = function (start) {
  watch('src/scss/**/*.scss', css);
  watch('src/js/**/*.js', javascript);
  watch(['*.html']).on('change', browserSync.reload);
  start();
};

exports.browserSync = browser;
exports.css = css;
exports.js = javascript;
exports.images = images;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;

exports.img = parallel(images, versionWebp, versionAvif);
exports.dev = parallel(javascript, dev, browser);
