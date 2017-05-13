;(function($) {
	'use strict';

// //плавная прокрутка

// 	$(document).ready(function() {
	 	 
// 	   $("a.topLink").click(function() {
// 	      $("html, body").animate({
// 	         scrollTop: $($(this).attr("href")).offset().top + "px"
// 	      }, {
// 	         duration: 500,
// 	         easing: "swing"
// 	      });
// 	      return false;
// 	   });
	 	 
// 	});
	
// // slider_start

// $(window).on('load',(function(){
// 	$('.ba-slider').slick({
// 		dots: true,
// 		slidesToShow: 2,
// 		// slidesToScrol: 2,
// 		autoplay: true,
// 		autoplaySpeed: 4000,
// 		pauseOnFocuse: true,
// 		pauseOnHover: false,
// 		infinite: true,
// 		// adativeHeight: true,
// 		responsive: [
// 			{
// 				breakpoint: 991,
// 				settings: {
// 					slidesToShow: 2,
// 				}
// 			},
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					slidesToShow: 1,
// 				}
// 			}
// 		]
// 	});
// }));

// // slider_end

// // slider2_start

// $(window).on('load',(function(){
// 	$('.ba-slider').slick({
// 		slidesToShow: 1,
// 		arrows: false,
// 		asNavFor: '.ba-slider-navigation'
// 	});

// 	$('.ba-slider-navigation').slick({
// 		slidesToShow: 3,
// 		centerMode: true,
// 		asNavFor: '.ba-slider',
// 		slide: '.ba-slide'
// 	});
// }));

// // slider2_end


// // google_map_start

function createMap() {
  var $markers = $('.ba-marker');
  var map = new google.maps.Map($('.ba-map')[0], {
   zoom: 14,
   scrollwheel: false,
   center: new google.maps.LatLng(0,0)
  });
  addMarkers($markers, map);
  centerMap($markers, map);
 }
 
 function addMarkers($markers, map) {
  $markers.each(function() {
   var lat = $(this).data('lat');
   var lng = $(this).data('lng');
   var marker = new google.maps.Marker({
    position: {lat: lat, lng: lng},
    map: map,
    icon: 'https://cdn2.iconfinder.com/data/icons/bitsies/128/Location-48.png'
		
   });

   var content = $(this).find('.description').html();

   var infoWindow = new google.maps.InfoWindow({
    content: content
   });
   marker.addListener('click', function() {
    infoWindow.open(map, marker);
   });
   
  });
 }

 function centerMap($markers, map) {
  if ($markers.length == 1) {
   var lat = $($markers).data('lat');
   var lng = $($markers).data('lng');
   var latLng = new google.maps.LatLng(lat, lng);
   map.setCenter(latLng);
  } else {
   var bounds = new google.maps.LatLngBounds();
   $markers.each(function() {
    var lat = $(this).data('lat');
    var lng = $(this).data('lng');
    var latLng = new google.maps.LatLng(lat, lng);
    bounds.extend(latLng);
   });
   map.fitBounds(bounds);
  }
 }

 createMap();

// // google_map_end



})(jQuery);