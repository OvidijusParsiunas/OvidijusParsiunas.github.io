(function($) {

   $.fn.parallax = function(options) {
      var windowHeight = $(window).height();
        // Establish default settings
      var settings = $.extend({
            speed        : 0.01
      }, options);

        // Iterate over each object in collection
      return this.each( function() {

        	// Save a reference to the element
      var $this = $(this);

        	// Set up Scroll Handler
      $(document).scroll(function(){

    	var scrollTop = $(window).scrollTop();
      var offset = $this.offset().top;
      var height = $this.outerHeight();

    		// Check if above or below viewport
			if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				return;
			}

			var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

      // Apply the Y Background Position to Set the Parallax Effect
    	$this.css('background-position', 'center ' + yBgPosition + 'px');

      });
      });
    }
}(jQuery));

$('#parallax').parallax({
	speed :	0.8
});

(function() {
  $(window).scroll(function() {
    var oVal;
    oVal = $(window).scrollTop() / 450;
    return $(".blur").css("opacity", oVal);
  });

}).call(this);

window.setTimeout(function(){
  $('#section1').addClass("hovereffect2");
}, 500);

window.setTimeout(function(){
  $("#testing").animate({
            top: '+25%',
          height: '48%'}, 1000);
        }, 2000);
