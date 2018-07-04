const fs = require('fs');
const path = require('path');

const gulp = require('gulp');
const tfilter = require('tfilter');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const watchify = require('watchify');
const browserify = require('browserify');
const babelify = require('babelify');
const chalk = require('chalk');

let appRootPath = path.join(__dirname);

gulp.task('build', () => {
 let b = browserify({
    entries: 'src/js/script.js',
    cache: {},
    packageCache: {},
    plugin: [watchify],
    debug: true
  })
    .transform(babelify)
    .transform(tfilter(babelify, {
        include: path.join(appRootPath, '/node_modules/@material/**/*.js')
    }), {
      global: true
    })
    // .transform('uglifyify', { global: true });  // when in production

  function bundle() {
    return b
      .bundle()
      .on('error', err => {
        console.log(`[${chalk.red('watchify')}] ${chalk.bold(chalk.red('Build failed!'))}`);
        console.log(err.stack || err);
        console.log();
      })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(gulp.dest('./src/dist'));
  }

  b.on('log', log => {
    console.log(`[${chalk.green('watchify')}] ${chalk.bold('Build success')}: ${chalk.green(log)}`);
  });
  b.on('update', bundle);
  return bundle();
});

gulp.task('default', ['build']);
