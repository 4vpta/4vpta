	$(document).ready(	function() {
		var pulled = false
		$('#menu').hide()
		$('#cats').click(function(){
			$('#menu').slideToggle();
			if(pulled) { 
				$('#cats').html('Verberg alle categorieen'); 
				pulled = false; } 
			else {
				$('#cats').html('Toon alle categorieen'); 
				pulled = true; }	
		});
		$('#biof1').hide()
		$('#biof2').hide()
		$('#biof3').hide()
		$('#bio1').click( function() {
			$('#biof2').slideUp(); 
			$('#biof3').slideUp();
			setTimeout(function(){
			$('#biof1').slideToggle();
			}, 500);
			} ); 
		$('#bio2').click( function() {
			$('#biof1').slideUp(); 
			$('#biof3').slideUp();
			setTimeout(function(){
			$('#biof2').slideToggle();
			}, 500);
			} ); 
		$('#bio3').click( function() {
			$('#biof1').slideUp(); 
			$('#biof2').slideUp();
			setTimeout(function(){
			$('#biof3').slideToggle();
			}, 500);
			} ); 
		}
	);