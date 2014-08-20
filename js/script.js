var showNarr = false;

function setStartValues() {
	document.getElementById('roundThis').value = 0;
	document.getElementById('roundTo').value = 1;
}
function RoundNumbers() {
	if (CriteriaMet()) {
		var toRound = document.getElementById('roundThis').value;
		var goal = document.getElementById('roundTo').value;
		var answer;
		var quotient = Math.abs(toRound / goal);
		var factor = Math.floor(quotient);
		var remainder = quotient - factor;
		if (remainder >= 0.5)
			answer = goal * ++factor;
		else
			answer = goal * factor;
		if (answer == 0)
			answer = goal;
		if (toRound < 0)
			answer *= -1;
		document.getElementById('answerSpan').innerHTML = toRound + ' rounds to ' + answer;
	}
}

function CriteriaMet() {
	var roundFromElement = document.getElementById('roundThis');
	var roundToElement = document.getElementById('roundTo');
	
	if (!roundFromElement.value) {
		alert('Please select a value to round.');
		roundFromElement.value = 0;
		roundFromElement.focus();
		return false;
	}
	if (!roundToElement.value) {
		alert('Please select a value to which to round.');
		roundToElement.value = 1;
		roundToElement.focus();
		return false;
	}
	var goal = roundToElement.value;
	if (goal == 0) {
		alert('Cannot round to 0.');
		roundToElement.value = 1;
		roundToElement.focus();
		return false;
	}
	if (goal < 0) {
		alert('Must round to a positive integer.');
		roundToElement.value = 1;
		roundToElement.focus();
		return false;
	}
	if (goal % 1 != 0) {
		alert('Must round to an integer.');
		roundToElement.value = Math.floor(goal);
		roundToElement.focus();
		return false;
	}
	return true;
}

function CheckGoal(input, e) {
	if (input.value < 1)
		input.value = 1;
}

function ShowNarrative() {
	showNarr = !showNarr;
	if (showNarr) {
		document.getElementById('narrative').className = 'narrativeShow';
		//document.getElementById('narrative').style.display = '';
		document.getElementById('narrSpan').innerHTML = 'Hide Narrative';
		document.getElementById('expandCollapseSpan').innerHTML = '- ';
	}
	else {
		document.getElementById('narrative').className = 'narrativeHide';
		//document.getElementById('narrative').style.display = 'none';
		document.getElementById('narrSpan').innerHTML = 'Show Narrative';
		document.getElementById('expandCollapseSpan').innerHTML = '+ ';
	}
}