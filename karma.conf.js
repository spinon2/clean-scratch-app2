// Karma configuration

module.exports = function(config) {
  config.set({

  		// Source to add All files Include or Exclude
  		basePath: '',

  		// Framewroks use
		frameworks: ['jasmine'],		

	    // list of files / patterns to load in the browser
	    files: [
	      'node_modules/angular/angular.js',
		  'node_modules/angular-mocks/angular-mocks.js',
	      'js/*.js'
	    ],

	    // list all exclude files
	    exclude: [ ],

	    preprocessors: {},

	    // test report to use.
	    // posible [dots, progress ]
	    reporters: ['progress'],

	    // Web server port
	    port: 9876,

	    // Enable or disable colors in the output (reporters and logs).
	    colors: true,

	    // Level of logging.
	    logLevel: config.LOG_INFO,

	    // Enable or disable watching files and executing the tests whenever one of these files changes.
	    autoWatch: false,


	 	// Chrome (comes installed with Karma)
		// ChromeCanary (comes installed with Karma)
		// PhantomJS (comes installed with Karma)
		// Firefox (requires karma-firefox-launcher plugin)
		// Opera (requires karma-opera-launcher plugin)
		// Internet Explorer (requires karma-ie-launcher plugin)
		// Safari (requires karma-safari-launcher plugin)

	    // browsers: ['Chrome', 'Chrome_without_security'],
	    browsers: ['FirefoxAutoAllowGUM'],

	    // you can define custom flags 
	    // customLaunchers: {
	    //   Chrome_without_security: {
	    //     base: 'Chrome',
	    //     flags: ['--disable-web-security']
	    //   }
	    // },

	    customLaunchers: {
		    FirefoxAutoAllowGUM: {
		        base: 'Firefox',
		        prefs: {
		            'media.navigator.permission.disabled': true
		        }
		    }
		},


	    // Continuous Integration mode.
		// If true, Karma will start and capture all configured browsers, run tests and then exit with an exit code of 0 or 1 depending on whether all tests passed or any tests failed.
	    singleRun: true


  });
};
