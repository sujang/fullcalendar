
function BasicResourceView(calendar) {
	BasicView.call(this, calendar); // call the super-constructor

}


BasicResourceView.prototype = createObject(BasicView.prototype); // extends BasicView
$.extend(BasicResourceView.prototype, {

	resources: function() {
		return this.calendar.fetchResources();
	},

	hasResource: function(event, resource) {
		if(this.opt('hasResource')) {
			return this.opt('hasResource').apply(this, arguments);
		}
		
		return event.resources && $.grep(event.resources, function(id) {
			return id == resource.id;
		}).length;
	},

	// Called when a new selection is made. Updates internal state and triggers handlers.
	reportSelection: function(start, end, ev, resources) {
		this.isSelected = true;

		this.calendar.trigger.apply(
			this.calendar, ['select', this, start, end, ev, this, resources]
		);

	},


});
