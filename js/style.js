// Parallax
$(window).on('load', function(){
  $('.hAwal').addClass('hToggle');
  $('.hAkhir').addClass('hToggle');
});


$(window).scroll(function() 
  {
    var wScroll = $(this).scrollTop();
    //console.log(wScroll); /* Mengetahui jarak ketika scrolling */
    if(wScroll > 100) 
    {
      $('.navbar-menu').addClass('black');
    }
    else 
    {
      $('.navbar-menu').removeClass('black');
    }
    if ( wScroll > $('.thumb-hobby').offset().top -320 ) 
    {
	    $('.hobby .thumb-hobby').each(function(i) 
	    {
	    	setTimeout(function() 
	    	{
	    		$('.thumb-hobby').eq(i).addClass('popup');
	    	}, 200 * (i+1));
	    });
    }
});

//Page scroll

$('a.page-scroll[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 40)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.page-scroll').click(function() {
    $('.navbar-collapse').collapse('hide');
  });