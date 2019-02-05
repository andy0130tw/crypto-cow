const fs = require('fs');
const path = require('path');

const gulp = require('gulp');
// const tfilter = require('tfilter');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const chalk = require('chalk');
const exorcist = require('exorcist');
const stream = require('stream');

const uglify = require('gulp-uglify');

let appRootPath = path.join(__dirname);

const externalDeps = [
  'web3',
  'bn.js',
  'pixi.js',
  '@material/drawer',
  '@material/ripple',
  '@material/dialog',
  '@material/textfield',
  '@material/snackbar',
  '@material/notched-outline',
  '@material/list',
];

const NODE_ENV = process.env.NODE_ENV || 'development';

const externalsTransform = (() => {
  const extPath = 'dist/vendor.js'
  let transformed = false

  function transform(buf, enc, next) {
    if (!transformed) {
      this.push(`(function(d){t=d.createElement('script');t.src='${extPath}';d.head.appendChild(t);t.onload=(function(){`);
      transformed = true
    }

    this.push(buf);
    next();
  }

  function flush() {
    this.push(`})})(document)`)
    this.push(null)
  }

  return new stream.Transform({ transform, flush })
})()

function getBrowserifyBase(debug) {
  let plugin = [];
  if (debug) {
    plugin.push(watchify);
  }

  let config = Object.assign({
    entries: 'src/js/script.js',
    plugin: plugin,
    debug: debug,
  }, watchify.args);

  return browserify(config)
    .external(debug ? externalDeps : [])
    .transform(babelify);
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

gulp.task('vendor', () => {
  let b = browserify({
    require: externalDeps,
    debug: true,
  });

  b.on('package', function (pkg) {
    console.log(pkg.name);
  });

  return b
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./src/dist'));
});

gulp.task('debug', () => {
  let b = getBrowserifyBase(true);

  b.on('bundle', () => {
    b.pipeline.get('wrap').unshift(externalsTransform);
  });

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
    .pipe(uglify())
    .pipe(gulp.dest('./src/dist'));

  return bundle(b);
});

gulp.task('default', ['debug']);
