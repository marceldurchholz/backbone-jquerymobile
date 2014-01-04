/**
 * Page2 
 * @class HomeView
 */
define(['jquery', 'hbs!templates/page2'],
function($ ,tpl) {
	"use strict";
	var view = Backbone.View.extend({
		template: tpl,
		transition: 'slideup',
		render:function (eventName) {
		    $(this.el).html(this.template({header: ['Backbone.js', 'jQuery Mobile' , 'Handlerbars', 'RequireJS']}));
		    return this;
		}
	});
	
	return view;
});