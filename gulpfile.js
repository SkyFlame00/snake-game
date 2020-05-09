const { src, dest } = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');

const css = () => {
    return src('./src/**/*.scss')
        .pipe(scss())
        .pipe(concat('style.css'))
        .pipe(dest('./build'));
};

module.exports = {
    css
};
