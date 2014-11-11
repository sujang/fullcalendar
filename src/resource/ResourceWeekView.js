
/* A day view with an all-day cell area at the top, and a time grid below by resource
----------------------------------------------------------------------------------------------------------------------*/

fcViews.resourceWeek = ResourceWeekView;

function ResourceWeekView(calendar) {
	BasicResourceView.call(this, calendar); // call the super-constructor

	var superRangeToSegments = this.rangeToSegments;
	this.rangeToSegments = function(start, end) {
		var rowCnt = this.rowCnt;
		var segments = [];

		$.each(superRangeToSegments(start, end), function(index, segment) {
			for (var row=0; row<rowCnt; row++) {
				segments.push({
					row: row,
					leftCol: segment.leftCol,
					rightCol: segment.rightCol,
					isStart: segment.isStart,
					isEnd: segment.isEnd
				});
			}
		});
		return segments;
	};
}

ResourceWeekView.prototype = createObject(BasicResourceView.prototype); // define the super-class
$.extend(ResourceWeekView.prototype, {

	name: 'resourceWeek',

	incrementDate: function(date, delta) {
		return BasicWeekView.prototype.incrementDate.apply(this, arguments);
	},

	render: function(date) {

		this.intervalStart = date.clone().stripTime().startOf('week');
		this.intervalEnd = this.intervalStart.clone().add(1, 'weeks');

		this.start = this.skipHiddenDays(this.intervalStart);
		this.end = this.skipHiddenDays(this.intervalEnd, -1, true);

		this.title = this.calendar.formatRange(
			this.start,
			this.end.clone().subtract(1), // make inclusive by subtracting 1 ms
			this.opt('titleFormat'),
			' \u2014 ' // emphasized dash
		);

		BasicView.prototype.render.call(this, this.resources().length || 1, this.getCellsPerWeek(), false); // call the super-method
	}

});
