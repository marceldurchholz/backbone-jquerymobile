/*
 * formatStack.js helper
 *
 */
define(['underscore', 'Handlebars'],
function( _, Handlebars) {
	
	Handlebars.registerHelper("formatStack", function(stack) {
		var result = '';
		_.each( _.initial(stack), function(it){ result += it + ' + ' });
	  return result += stack[stack.length-1];
	});
	
});