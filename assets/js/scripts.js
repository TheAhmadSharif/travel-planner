jQuery(document).ready(function($) {
	$('#toggleMenu').click(function(){
			$('#sidebar').css('left', '0');
			$('#closeTrigger').show(0);
	});

	$('#closeTrigger').click(function(event) {
		$('#sidebar').css('left', '-180px');
		$('.container-margin').css('margin-left', '0');
		$(this).hide('0');
	});


	/* Closebar */
	function sideabrVisibility () {
				var w = $( window ).width();
				if ( w < 769) {
					 	$('#toggleMenu').fadeIn('100');
						$('#sidebar').css('left', '-300px');
						$('.container-margin').css('margin-left', '0');
						$('#closeTrigger').fadeOut('100');
				}

				if (w > 769) {
						$('#sidebar').css('left', '0');
						$('.container-margin').css('margin-left', '180px');
						$('#toggleMenu').hide('0');
				}
		}

		sideabrVisibility();
		window.addEventListener('resize', sideabrVisibility);


});

console.log('Hi, This is Ahmad Sharif', 'https://github.com/TheAhmadSharif');