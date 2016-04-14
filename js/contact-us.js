/*
	Project Name :roofcare
	Author Company : Ewebcraft
	Project Date: 26 august, 2015
	Author Website : http://www.ewebcraft.com
	Author Email : ewebcraft@gmail.com
*/
$(window).load(function(){
 $('#loader').fadeOut("slow");
});

/*  toggle button*/
$(".slicknav_btn").on('click', function(e){
  $(".slicknav").toggleClass("mobile-nav");
});



/*header fixed*/
$(document).ready(function() {
  var $header = $(".jx-header"),
      $clone = $header.before($header.clone().addClass("clone"));

  $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    $('body').toggleClass("down", (fromTop > 200));
  });

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
});

