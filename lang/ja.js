
$.fullCalendar.lang("ja", {
	defaultButtonText: {
		month: "月",
		week: "週",
		day: "日",
		list: "予定リスト"
	},
	// time formats
	titleFormat: {
		month: 'YYYY年MM月', // like "September 1986". each language will override this
		week: 'll', // like "Sep 4 1986"
		day: 'LL' // like "September 4 1986"
	},
	columnFormat: {
		month: 'ddd', // like "Sat"
		week: 'MM/DD [(]ddd[)]',
		day: 'dddd' // like "Saturday"
	},
	timeFormat: { // for event elements
		day: 'HH:mm',
		'default': 'HH:mm'
	},
	allDayText: "終日",
	eventLimitText: function(n) {
		return "他 " + n + " 件";
	}
});
