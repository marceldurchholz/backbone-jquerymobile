/**
 * HomeView - our main page
 * @class HomeView
 */
define(['jquery', 'hbs!templates/home'],
function($, tmpHome) {
	"use strict";
	
	var view = Backbone.View.extend({
		template: tmpHome,
		render:function (eventName) {
		    $(this.el).html(this.template(MyApp.Utils.stack));
		    return this;
		}
	});
	
	return view;
});