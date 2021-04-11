var rowNumbersAscending = [...Array(12).keys()].map(x => x + 1);
var rowNumbersDescending = [...rowNumbersAscending].reverse();
var crossCountValues = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78];
var skipPenalty = 5;
var allowedSkips = 4;

var app = new Vue({
	el: '#app',
	data: {
		rowNumbersAscending: rowNumbersAscending,
		rowNumbersDescending: rowNumbersDescending,
		crossCountValues: crossCountValues,
		skipPenalty: skipPenalty,
		allowedSkips: allowedSkips,
		ascendingColorGroups: ["red", "yellow"],
		descendingColorGroups: ["green", "blue"]	
	}
});