/**
 * Page1 
 * @class HomeView
 */
define(['jquery', 'hbs!templates/page1'],
function($ ,tpl) {
	"use strict";
	var view = Backbone.View.extend({
		template: tpl,
		transition: 'slidedown',
		render:function (eventName) {
		    $(this.el).html(this.template());
		    return this;
		}
	});
	return view;
});