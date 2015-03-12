
$(document).ready(function(){$('.carousel').carousel({interval:false});

/* affix the navbar after scroll below header */
$('#nav').affix({
      offset: {
        top: $('header').height()-$('#nav').height()
      }
});	

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top;
  $('body,html').animate({scrollTop:posi},700);
});




/* stamen maps */
var map = new L.Map('map', {
    center: new L.LatLng(38.3358704,-123.40499036),
    zoom: 9,
    scrollWheelZoom: false
});
map.addLayer(new L.StamenTileLayer("watercolor", {
    detectRetina: true
}));

var marker = L.AwesomeMarkers.icon({
  icon: '',
  markerColor: 'cadetblue'
});

L.marker(new L.LatLng(38.3244, -123.0386), {icon: marker}).addTo(map)
/* end stamen maps */

});

window.map = map;