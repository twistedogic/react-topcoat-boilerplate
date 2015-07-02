// Karma configuration
// Generated on Thu Jul 02 2015 07:35:34 GMT+0000 (UTC)
module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', 'browserify'],
		files: [
			'node_modules/react-tools/src/test/phantomjs-shims.js',
			'tests/**/*.js',
			'tests/**/*.jsx',
		],
		exclude: [
		],
		preprocessors: {
			'tests/**/*.js': ['browserify'],
			'tests/**/*.jsx': ['browserify'],
		},
		browserify: {
			transform: ['reactify', 'istanbulify'],
			extensions: ['.js', '.jsx'],
			debug: true,
			bundleDelay: 1000,  // WAR for karma-browserify race condition
		},
		reporters: ['progress', 'coverage'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['PhantomJS'],
		//browsers: ['PhantomJS', 'Chrome'],
		singleRun: false,
		coverageReporter: {
			type : 'html',
			dir : 'coverage/'
		},
	});
};
