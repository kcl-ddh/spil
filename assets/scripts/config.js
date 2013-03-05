$(document).ready( function() {
	// jQuery stuff goes in here.
	$(".smallNavigation").click( function() {
		if ($("#primary-navigation").hasClass("showNavigation")) {
				$("#primary-navigation").removeClass("showNavigation");
				$(".primary").removeClass("addShadow");
				
		} else {
				$("#primary-navigation").addClass("showNavigation");
				$(".primary").addClass("addShadow");				
		}
	});
	
});