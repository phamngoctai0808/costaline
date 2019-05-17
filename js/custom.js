$(document).ready(function(){

	$('#myCarousel2').carousel({ interval: 3000 });

	$('.multi-item-carousel .item').each(function(){
		var itemToClone = $(this);

		for (var i=1;i<6;i++) {
		itemToClone = itemToClone.next();

		if (!itemToClone.length) {
		itemToClone = $(this).siblings(':first');
		}

		itemToClone.children(':first-child').clone()
		.addClass("cloneditem-"+(i))
		.appendTo($(this));
		}
	});
	$('#myCarousel1').carousel({ interval: 3000 });
	$('.brand-item-carousel .item').each(function(){
		var itemToClone = $(this);

		for (var i=1;i<7;i++) {
		itemToClone = itemToClone.next();

		if (!itemToClone.length) {
		itemToClone = $(this).siblings(':first');
		}

		itemToClone.children(':first-child').clone()
		.addClass("cloneditem1-"+(i))
		.appendTo($(this));
		}
	});
});
