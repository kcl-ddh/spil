$(document).ready( function() {

	// modules
	
	// Tabs -- for jQuery tools 
	if ( $.fn.tabs) {
		$(".mod.tabs").tabs(".tabPanes > section");
	};
	// End tabs
	
	// Scrollable -- for jQuery tools
	if ( $.fn.scrollable) {
		var scroller = $(".scrollable");
		var direction;
		if (scroller.hasClass("horizontal")) {
			direction = "horizontal";
			vertical = true;
		} else {
			direction = "vertical";
			vertical = false;
		}
		scroller.scrollable({
			vertical: vertical
		});
	};
	// End scrollable
	
});