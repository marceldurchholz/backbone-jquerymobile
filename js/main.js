/* 
 * Main.js 
 * Loading frameworks and then load defined Application 
 *
 */
require.config( {
	paths: {
			'jquery': 					'lib/jquery',
	    'backbone':         'lib/backbone-amd',
	    'underscore':       'lib/lodash',
	    'jquerymobile':     'lib/jquery.mobile-1.1.0',
			'Handlebars': 			'lib/require/handlebars-1.0.0.beta.6',
			'hbs': 							'lib/require/hbs',
			'router': 					'routers/Router',
			'homeView': 				'views/Home',
			'page1View': 				'views/Page1',
			'page2View': 				'views/Page2',
			'app':							'app'
	},
  locale : "pt_br",	
	hbs: {
		helperDirectory: 'templates/helpers/',
		i18nDirectory:   'templates/i18n/'
	}
});

require(['require', 'backbone', 'jquery', 'underscore', 'app'],
function( require, Backbone, $, _, app ) {

	// TODO: Defining globals so we don't need to keep requiring libs all the time

	// jqm-config. added before lading JQM
	$(document).bind("mobileinit", function () {
	    $.mobile.ajaxEnabled = false;
	    $.mobile.linkBindingEnabled = false;
	    $.mobile.hashListeningEnabled = false;
	    $.mobile.pushStateEnabled = false;
	    // Remove page from DOM when it's being replaced
	    $('div[data-role="page"]').live('pagehide', function (event, ui) {
	        $(event.currentTarget).remove();
	    });
	});
	
	require(['jquerymobile'], function($$){
		app.start();
	});
	
});