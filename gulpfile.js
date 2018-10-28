const fs = require('fs');
const path = require('path');

const gulp = require('gulp');
const tfilter = require('tfilter');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const chalk = require('chalk');
const exorcist = require('exorcist')

let appRootPath = path.join(__dirname);

function getBrowserifyBase(debug) {
  let plugin = [];
  if (debug) {
    plugin.push(watchify);
  }

  let config = Object.assign({
    entries: 'src/js/script.js',
    plugin: plugin,
    debug: debug
  }, watchify.args);

  return browserify(config)
    .transform(babelify)
    .transform(tfilter(babelify, {
      include: path.join(appRootPath, '/node_modules/@material/**/*.js')
    }), {
      global: true
    });
}

function bundle(b) {
  return b
    .bundle()
    .on('error', err => {
      console.log(`[${chalk.red('watchify')}] ${chalk.bold(chalk.red('Build failed!'))}`);
      console.log(err.stack || err);
      console.log();
    })
    .pipe(exorcist(path.join(__dirname, 'src/dist/app.js.map')))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./src/dist'));
}

gulp.task('debug', () => {
  let b = getBrowserifyBase(true);
  b.on('log', log => {
    console.log(`[${chalk.green('watchify')}] ${chalk.bold('Build success')}: ${chalk.green(log)}`);
  });
  b.on('update', () => bundle(b));
  return bundle(b);
});

gulp.task('build', () => {
  let b = getBrowserifyBase(false);
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(require('gulp-uglify')())
    .pipe(gulp.dest('./src/dist'));

  return bundle(b);
});

gulp.task('default', ['debug']);
