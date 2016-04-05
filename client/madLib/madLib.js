Template.body.events({
	'submit form': function(event) {
		event.preventDefault();
		var exc = event.target.exclamation.value;
		var adv = event.target.adverb.value;
		var ani = event.target.animal.value;
		var vrb = event.target.verb.value;
		console.log('\'' + exc + '!\' you say, as you ' + adv + ' jump onto your ' + ani + ' and ' + vrb + ' into the sunset.');
	}
});