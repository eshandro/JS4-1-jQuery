$(document).on('ready', function() {
	// $('button').click(function() {
	// 	console.log("You clicked on the button");
	// });  

	$('.paragraph').click(function() {
		$('body').append("<p>You added text to the page by clicking on the button</p>");
	});

	$('.header').click(function() {
		$('body').append("<h1>This is an added header</h1>");
	});

	$('.unordered').click(function() {
		$('body').append("<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>");
	});

	$('p').hover(function() {
		$(this).css('color','pink'); 
	}, function() {
		$(this).css('color', 'black');
	});

	$('h1, h2').append('!');

	$('a').click(function() {
		var link = $(this).attr('href');
		var goToLink = confirm("Do you want to continue to " + link + "?");
		if(!goToLink) {
			// $(this).hide();
			// $(this).removeAttr('href');
			$(this).remove();
			return false;
		}
	});

	$('button').click(function() {
		$('body').html("<div class=\"fixed-center-box\"><p>Some text and some more text.</p><p>Well, it is some more text, and again.</p><img src=\"http://placekitten.com/100/100\"><br><button>Close</button></div>");
	});

	$('.fixed-center-box > button').click(function() {
		$('div.fixed-center-box').remove();
	});
});