$(document).ready(function() {
	$('.avatar_plus_button').mouseover(function(){
		if($(this).attr('state')==="image_plus") {
			$(this).html("<a class='follow_button' href='#'>Follow</a>");
			$(this).attr("state","follow_button");
		}
		if($(this).attr('state')==="image_ok") {
			$(this).html("<a class='nofollow_button' href='#'>Nofollow</a>");
			$(this).attr("state","nofollow_button");
		}
	});
	$(".avatar_plus_button").on("mousedown",function() {
			if ($(this).attr("state")=="follow_button") {
				$(this).html("<a class='nofollow_button' href='#'>Nofollow</a>");	
			}
			if ($(this).attr("state")=="nofollow_button") {
				$(this).html("<a class='follow_button' href='#'>Follow</a>");	
				$(this).attr("state","");
			}
			if ($(this).attr("state")=="follow_button") {
				$(this).attr("state","nofollow_button");
			} else {
				$(this).attr("state","follow_button");
			}
	});
});