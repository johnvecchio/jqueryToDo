// check off specific todos by clicking
// you add it to the parent because the parent is always there
// we are still only listening for the lis inside the ul
$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

// click on X to delete todo
$('ul').on('click', 'span', function(event) {
	// can not remove later and have a view deleted
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	// this stops it from bubbling up to higher level elements such as LI
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	// check for the enter key
	if (event.which === 13){
		// grabbing text from input
		var todoText = $(this).val();
		$(this).val("");
		// create new LI and add
		$('ul').append('<li><span><i class="fa fa-trash"></i></i></span> ' + todoText + '</li>')
	}
});

$('.fa-plus').click(function(){
	$("input[type='text']").fadeToggle();
});