Template.body.events({
	'submit form': function(event) {
		event.preventDefault();
		var exc = event.target.exclamation.value;
		var adv = event.target.adverb.value;
		var ani = event.target.animal.value;
		var vrb = event.target.verb.value;
		var result = '\'' + exc + '!\' you say, as you ' + adv + ' jump onto your ' + ani + ' and ' + vrb + ' into the sunset.';
		console.log(result);
		$('#result').text(result);
		$('#result').css("color","#0000FF");
		$('#result').hide();
		$('#result').fadeIn("slow");
	}
});