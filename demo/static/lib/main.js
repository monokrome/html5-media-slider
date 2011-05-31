// TODO: Test whether or not require.js is aware of this module
//       having already been loaded upon executing a require('main')
//       from other modules. If not, this will break the "bootstrapped"
//       mechanism.

(function main () {
	/**
	 * Represents the main entry-point of our application. Provides
	 * require.js the necessary configuration that we required in order
	 * to bootstrap the codebase.
	 */
	var dependancies = ['application'],

	// Some other modules may want to wait for this value to be true.
	bootstrapped = false,

	options = {
		baseUrl: '/lib/',
		ready: (function load_dependancies () {
			require(dependancies, function bootstrap_complete () {
				bootstrapped = true;
			});
		})
	};

	require(options);
})();
