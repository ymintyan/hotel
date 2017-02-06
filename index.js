$(document).ready(function(){
 
    $(".a_collapse").click(function(){
    	var span = $(this).find('span');
     	$(".a_collapse span").not(span).removeClass('glyphicon-collapse-up').addClass('glyphicon-collapse-down');
    	if($(span).hasClass('glyphicon-collapse-down')){
    		$(span).removeClass('glyphicon-collapse-down').addClass('glyphicon-collapse-up');
    	} else{
    		$(span).removeClass('glyphicon-collapse-up').addClass('glyphicon-collapse-down');
    	}
    	
    });

    $(".navbar a, a[href='#myPage']").on('click', function(event) {
    
      if (this.hash !== "") {
        
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
     
        window.location.hash = hash;
        });
    }
  });
  
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
  
});

function myMap() {
		  var myCenter = new google.maps.LatLng(50.508742,30.520850);
		  var mapCanvas = document.getElementById("map");
		  var mapOptions = {center: myCenter, zoom: 5};
		  var map = new google.maps.Map(mapCanvas, mapOptions);
		  var marker = new google.maps.Marker({position:myCenter, icon:'images/221.png',animation:google.maps.Animation.BOUNCE});
		  marker.setMap(map);
		}