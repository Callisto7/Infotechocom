(function($) {
  "use strict";
	$( "#mmenu_toggle" ).on('click', function() {
		$(this).toggleClass( "active" );

		if ($(this).hasClass( "active" )) {
			$('.mobile_nav').stop(true, true).slideDown();
		}else{
			$('.mobile_nav').stop(true, true).slideUp();
		}		
	});
	$(".mobile_mainmenu > li span.arrow").on('click', function() {
        $(this).parent().find("> ul").stop(true, true).slideToggle()
        $(this).toggleClass( "active" ); 
    });

})(jQuery);