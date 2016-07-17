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

$(document).ready(function(){
var squareSide = '0';
setTimeout(function(){
  $("#testing").hover(function(){
      if ($(window).width() > 845) {
      squareSide = '15px';}
      else if ($(window).width() < 540) {
      squareSide = '5px';}
      else if ($(window).width() < 845) {
      squareSide = '10px';}
      $('#square').animate({left: '49.2%', top: '49.2%', width: squareSide, height: squareSide}, 400);
      $('.hovereffect .overlay ').animate({left: '0%', width: '100%'}, 1500);
      $('#center-line').animate({left: '10%', width: '80%'}, 1500);
      $('#section1').addClass("hovereffect3");
      }, function(){
      $('.hovereffect .overlay ').animate({left: '10%', width: '80%'}, 1500);
      $('#center-line').animate({left: '50%', width: '0'}, 1500);
      $('#section1').removeClass("hovereffect3");
      $('#square').animate({left: '50%', top: '50%', width: '0', height: '0'}, 2000);
  });
}, 4000);
});

$(document).ready(function(){

window.setTimeout(function(){
  $("#square").rotate({
      duration:2000,
      angle: 0,
      animateTo:405
    });
}, 1100);

window.setTimeout(function(){
 $("#square").fadeTo(1100, 1);
}, 0);

window.setTimeout(function(){
$('#square').animate({left: '50%', top: '50.2%', width: '0px', height: '0px'}, 2000);
}, 2500);

window.setTimeout(function(){
  $('#section1').addClass("hovereffect2");
}, 2500);

window.setTimeout(function(){
  $('#static-text').addClass("animated fadeIn");
}, 6000);

window.setTimeout(function(){
  $('.tlt').css("opacity", "1.0")
  $('.tlt').textillate({
      minDisplayTime: 2500,
      in: { effect: 'fadeIn' },
      out :{  delay: 3, effect: 'fadeOut'},
      loop: true
  });
}, 8000);

window.setTimeout(function(){
  $('#something').removeClass("animated fadeIn");
}, 6000);

window.setTimeout(function(){
  $("#testing").animate({
            top: '+25%',
          height: '48%'}, 1000);
        }, 4350);
});

$.fn.isOnScreen = function(){

	var win = $(window);

	var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();

	var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};


$(window).scroll(function(event) {

  if($("#something").isOnScreen())
  $('#something').addClass("animated fadeIn");
});


Element.prototype.backgroundClipPolyfill = function () {
  var a = arguments[0],
      d = document,
      b = d.body,
      el = this;

  function hasBackgroundClip() {
    return b.style.webkitBackgroundClip != undefined;
  };

  function addAttributes(el, attributes) {
    for (var key in attributes) {
      el.setAttribute(key, attributes[key]);
    }
  }

  function createSvgElement(tagname) {
    return d.createElementNS('http://www.w3.org/2000/svg', tagname);
  }

  function createSVG() {
    var a = arguments[0],
        svg = createSvgElement('svg'),
        pattern = createSvgElement('pattern'),
        image = createSvgElement('image'),
        text = createSvgElement('text');

    // Add attributes to elements
    addAttributes(pattern, {
      'id' : a.id,
      'patternUnits' : 'userSpaceOnUse',
      'width' : a.width,
      'height' : a.height
    });

    addAttributes(image, {
      'width' : a.width,
      'height' : a.height
    });
    image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', a.url);

    addAttributes(text, {
      'x' : 0,
      'y' : 80,
      'class' : a['class'],
      'style' : 'fill:url(#' + a.id + ');'
    });

    // Set text
    text.textContent = a.text;

    // Add elements to pattern
    pattern.appendChild(image);

    // Add elements to SVG
    svg.appendChild(pattern);
    svg.appendChild(text);

    return svg;
  };

  /*
   * Replace the element if background-clip
   * is not available.
   */
  if (!hasBackgroundClip()) {
    var img = new Image();
    img.onload = function() {
      var svg = createSVG({
        'id' : a.patternID,
        'url' : a.patternURL,
        'class' : a['class'],
        'width' : this.width,
        'height' : this.height,
        'text' : el.textContent
      });

      el.parentNode.replaceChild(svg, el);
    }
    img.src = a.patternURL;
  }
};

var element = document.querySelector('.headline');

/*
 * Call the polyfill
 *
 * patternID : the unique ID of the SVG pattern
 * patternURL : the URL to the background-image
 * class : the css-class applied to the SVG
 */
element.backgroundClipPolyfill({
  'patternID' : 'mypattern',
  'patternURL' : 'http://timpietrusky.com/cdn/army.png',
  'class' : 'headline'
});

Element.prototype.backgroundClipPolyfill = function () {
  var a = arguments[0],
      d = document,
      b = d.body,
      el = this;

  function hasBackgroundClip() {
    return b.style.webkitBackgroundClip != undefined;
  };

  function addAttributes(el, attributes) {
    for (var key in attributes) {
      el.setAttribute(key, attributes[key]);
    }
  }

  function createSvgElement(tagname) {
    return d.createElementNS('http://www.w3.org/2000/svg', tagname);
  }

  function createSVG() {
    var a = arguments[0],
        svg = createSvgElement('svg'),
        pattern = createSvgElement('pattern'),
        image = createSvgElement('image'),
        text = createSvgElement('text');

    // Add attributes to elements
    addAttributes(pattern, {
      'id' : a.id,
      'patternUnits' : 'userSpaceOnUse',
      'width' : a.width,
      'height' : a.height
    });

    addAttributes(image, {
      'width' : a.width,
      'height' : a.height
    });
    image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', a.url);

    addAttributes(text, {
      'x' : 0,
      'y' : 80,
      'class' : a['class'],
      'style' : 'fill:url(#' + a.id + ');'
    });

    // Set text
    text.textContent = a.text;

    // Add elements to pattern
    pattern.appendChild(image);

    // Add elements to SVG
    svg.appendChild(pattern);
    svg.appendChild(text);

    return svg;
  };

  /*
   * Replace the element if background-clip
   * is not available.
   */
  if (!hasBackgroundClip()) {
    var img = new Image();
    img.onload = function() {
      var svg = createSVG({
        'id' : a.patternID,
        'url' : a.patternURL,
        'class' : a['class'],
        'width' : this.width,
        'height' : this.height,
        'text' : el.textContent
      });

      el.parentNode.replaceChild(svg, el);
    }
    img.src = a.patternURL;
  }
};

var element = document.querySelector('.headline');

/*
 * Call the polyfill
 *
 * patternID : the unique ID of the SVG pattern
 * patternURL : the URL to the background-image
 * class : the css-class applied to the SVG
 */
element.backgroundClipPolyfill({
  'patternID' : 'mypattern',
  'patternURL' : 'http://timpietrusky.com/cdn/army.png',
  'class' : 'headline'
});
