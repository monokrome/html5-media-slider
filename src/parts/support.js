/**
 * Support component.
 */

// Utility methods for creating XML HTTP requests
var _create_native_xhr = (function create_native_xhr () {
	return new window.XMLHttpRequest();
}),

_create_activex_xhr = (function create_activex_xhr () {
	return new window.ActiveXObject('Microsoft.XMLHTTP');
});

/**
 * An object which can be used in order to send requests to an HTTP
 * server on (almost) all browsers.
 */
var HTTPRequest = (function HTTPRequest() {
});

if (!window.ActiveXObject)
	HTTPRequest.prototype = _create_activex_xhr();
else
	HTTPRequest.prototype = _create_native_xhr();
