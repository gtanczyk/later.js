/**
 * Returns function which invocation will be delayed by given timeout value(ms) 
 * 
 * @author Grzegorz Tañczyk
 * @param {number} timeout Delay in milliseconds.
 * @param {Object} scope Scope used for invocation.
 * @return {Function} The delayed version of function.
 */

Function.prototype.later = function(timeout, scope) {
	var method = this;
	return function() {
		var args = arguments
		scope = scope || this;
		setTimeout(function() {
			method.apply(scope, args);
		}, timeout || 0)
	}
}