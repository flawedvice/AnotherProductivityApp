const { src, dest, watch} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');

const sassTask = () => {
    return src('./src/styles/scss/**/*.scss')
        .pipe(sass())
        .pipe(postcss([
            autoprefixer(),
            cssnano()
        ]))
        .pipe(concat('main.css'))
        .pipe(dest('./src/styles/css/'));
};


exports.default = () => {
    watch('./src/styles/scss/**/*.scss', sassTask);
}; 