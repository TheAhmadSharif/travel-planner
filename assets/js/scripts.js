	jQuery(document).ready(function($) {
	$('#toggleMenu').click(function(){
			$('#sidebar').toggleClass('visible-sidebar');
			$('#mainBlock').toggleClass('move-right');
	});

});