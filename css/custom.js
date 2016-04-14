/*
	Project Name : Mountain Biking
	Author Company : Ewebcraft
	Project Date: 16 June, 2015
	Author Website : http://www.ewebcraft.com
	Author Email : ewebcraft@gmail.com
*/
$(document).ready(function() {	
	$("").owlCarousel({
		autoPlay : 5000,
		slideSpeed : 4000,
		items : 4,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [992,4],
		itemsTablet: [700,2],
		pagination : false,
	}); 

	
});



	$(document).ready(function () {
	  'use strict';
	
	});
	(function($) {
	"use strict";
	$(".count_number").each(function() {
	  $(this).data('count', parseInt($(this).html(), 10));
	  $(this).html('0');
	  count($(this));
	  speed: 4000 // how long it should take to count between the target numbers
	});
	
})(jQuery);


/* Stat Counter */
function count($this){
	var current = parseInt($this.html(), 10);
	current = current + 1; /* Where 50 is increment */	
	$this.html(++current);
	if(current > $this.data('count')){
		$this.html($this.data('count'));
	} else {    
		setTimeout(function(){count($this)}, 50);
	}
}$().ready(function() {
		$=jQuery
       				if($(".form").length > 0)
			{
				$(".form").validate();	
			}
		 });
$(window).load(function(){
            $('#loader').fadeOut("slow");
        });
		
$(".skill-1").animate({
    width: "80%"
}, 2500);

$(".skill-2").animate({
    width: "85%"
}, 2500);

$(".skill-3").animate({
    width: "90%"
}, 2500);

(function($) {
	"use strict";

					/* for Animation */

				new WOW().init();

					/* for Animation */


					/* Main Slider */

				 var slider = new MasterSlider();
    			 slider.setup('mainSlider' , {
			        width:1170,
			        height:675,
			        autoplay:false,
			        space:1,
			        loop:true,
			        dir:"v",
			        fullwidth:true,
			        centerControls:false,
			        speed:80,
			        preload:0,
					view:'scale'
			    });
			    slider.control('arrows');
			    slider.control('timebar' , {color:"#ffa800"});
			    
			    /* Smooth-Scroll */

				$(".scroll").click(function(event){
					
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
				});

				/* Smooth-Scroll */

				// pretty photo function call
				$("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'});

				
				/* Map */

			function initialize() {
			    var mapCanvas = document.getElementById('map-canvas');
			    var mapOptions = {
			      center: new google.maps.LatLng(44.5403, -78.5463),
			      zoom: 8,
			      scrollwheel: false,
			      mapTypeId: google.maps.MapTypeId.ROADMAP
			    }
			    var map = new google.maps.Map(mapCanvas, mapOptions);
			}
		 	google.maps.event.addDomListener(window, 'load', initialize);

		 		/* Map */			

})(jQuery);