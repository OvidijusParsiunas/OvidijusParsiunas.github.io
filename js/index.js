/*Use possible class for all effects */
jQuery(document).ready(function() {
    jQuery('.headline').viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 100
       });
       jQuery('.headline-border').viewportChecker({
       classToAdd: 'headline-border2',
       offset: 0
       });
});

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
  $("#testing").animate({
            top: '+25%',
          height: '48%'}, 1000);
        }, 4350);
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

/////////////////////////////////////////////////////////////////////////////////////////////////Detection of IE and Edge
// Get IE or Edge browser version
var version = detectIE();

if (version === false) {
} else if (version >= 12) {
  $("#gradient").remove();
} else {
  $("#gradient").remove();
}

// add details to debug result
document.getElementById('details').innerHTML = window.navigator.userAgent;

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}
