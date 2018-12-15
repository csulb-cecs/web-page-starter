/**
 * JavaScript (JS) script written by Dr. Alvaro Monge for CECS 470 @ CSULB
 * For demonstration purposes only.
 *
 * @author: Dr. Alvaro Monge
 */


/**
 * Alternate the color of the element theButton between red and a random color.
 * Also, alert the user of the change
 * 
 */

var CSULB = {
	/*
	 * function to create a random color by mixing random values of red, green, and blue.
	 */
	getRandomColor: function () {
		var red = Math.floor(Math.random() * 256),
		    green = Math.floor(Math.random() * 256),
			  blue = Math.floor(Math.random() * 256),
			randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
		return randomColor;
	},

	/*
	 * function that sets the backgroundColor style property of an object (theButton) to one of two colors
	 */
	alternateColor: function (theButton) {
		
		var theStyle = window.getComputedStyle(theButton, null);
		// the computed style (an object) includes all currently set style properties for 
		// the element from all possible style definitions (default stylesheet, 
		// user, author, inline, etc.)
	
		if (theStyle.backgroundColor !== 'rgb(255, 0, 0)') {  // demo only: note use of !==
			theButton.style.backgroundColor = 'red';  // or set it to rgb(255, 0, 0)
		} else {
			theButton.style.backgroundColor = CSULB.getRandomColor();
		}
		
		//  Uncomment this statement to view the alert
		// window.alert("Hello JavaScript World... notice the button's color changed to " + theButton.style.backgroundColor);
	},
	
	/**
	 * Code from http://dev.opera.com/articles/view/creating-and-modifying-html
	 *   "Running code in response to an event is done with the addEventListener function 
	 *   in most browsers and with the attachEvent function in Internet Explorer"
   *
   * See: http://stackoverflow.com/questions/2657182/correct-usage-of-addeventlistener-attachevent/10896968#10896968
   * for differences between attachEvent (IE 5-8) and
   * addEventListener (W3 standard implemented by most (all?) modern browsers)
	 * 
	 */
	  addEvent: function (obj, type, fn) {
      if (obj.addEventListener) {
        obj.addEventListener( type, fn, false );
        /* NOTES:
         * addEventListener -- the last parameter
         *   if true: uses "event capturing" whereby event first handled by parent, then by children
         *   if false: the events are processed by descendants and then "bubbled up" to ancestors
         * NOTE: IE only supports "event bubbling".  All other browsers support both.
         * Reference: Chapter 5 of the book DwWS.
         */
      } else if (obj.attachEvent) {
        obj['e'+type+fn] = fn;
        obj[type+fn] = function () {obj['e' + type + fn]( window.event );};
        obj.attachEvent('on' + type, obj[type + fn] );
      }
	  },

	  
	/**
	 * function to register an event listener with an HTML element
	 * 
	 */
	initialize: function () {
		var button = document.getElementById('jsButton');
		if (button) {
			CSULB.addEvent(button, 'click', function () {CSULB.alternateColor(button);});
		}
	}
};

CSULB.addEvent(window, 'load', CSULB.initialize);