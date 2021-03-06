// Karma configuration
// Generated on Mon Dec 21 2015 20:49:19 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'www/lib/angular/angular.js',
      'www/lib/angular-mocks/angular-mocks.js',
      'www/lib/ionic/js/ionic.bundle.js',
      'www/lib/ng-cordova-oauth/*.js',
      'test/**/*.js',
      'www/js/*.js',
      'www/js/app.js',
      'www/js/controllers/ChallengeCtrl.js',
      'www/js/controllers/ActiveChallengesCtrl.js',
      'www/js/controllers/AccountCtrl.js',
      'www/js/controllers/CreateCtrl.js',
      'www/js/controllers/AuthCtrl.js',
      'www/js/services/ActiveChallengesService.js'
    ],


    // list of files to exclude
    exclude: [
      'gulpfile.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
