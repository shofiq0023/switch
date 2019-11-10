$(window).on('load', function(){
				$('.pre-loader').fadeOut();
			});


$(function(){

	$('.btn-first').click(function(){
		$('.btn-middle').removeClass('active');
		$('.btn-last').removeClass('active');
		$(this).addClass('active');
	});
	$('.btn-middle').click(function(){
		$('.btn-first').removeClass('active');
		$('.btn-last').removeClass('active');
		$(this).addClass('active');
	});
	$('.btn-last').click(function(){
		$('.btn-middle').removeClass('active');
		$('.btn-first').removeClass('active');
		$(this).addClass('active');
	});
});