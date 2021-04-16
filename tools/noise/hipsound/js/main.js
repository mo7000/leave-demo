/* 
MIT License
Copyright (c) 2011-2018 Amber Creative Lab, Ltd.

Secondary expandable navigation is created by CodyHouse and licensed under the MIT license: http://opensource.org/licenses/MIT

https://codyhouse.co/gem/secondary-expandable-navigation/
 */

jQuery(document).ready(function($){
	var $lateral_menu_trigger = $('#cd-menu-trigger'),
		$content_wrapper = $('.cd-main-content'),
		$navigation = $('header');

	//open-close lateral menu clicking on the menu icon
	$lateral_menu_trigger.on('click', function(event){
		event.preventDefault();
		
		$lateral_menu_trigger.toggleClass('is-clicked');
		$navigation.toggleClass('lateral-menu-is-open');
		$content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			$('body').toggleClass('overflow-hidden');
		});
		$('#cd-lateral-nav').toggleClass('lateral-menu-is-open');
		
		//check if transitions are not supported - i.e. in IE9
		if($('html').hasClass('no-csstransitions')) {
			$('body').toggleClass('overflow-hidden');
		}
	});

	//close lateral menu clicking outside the menu itself
	$content_wrapper.on('click', function(event){
		if( !$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span') ) {
			$lateral_menu_trigger.removeClass('is-clicked');
			$navigation.removeClass('lateral-menu-is-open');
			$content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			$('#cd-lateral-nav').removeClass('lateral-menu-is-open');
			//check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
			}

		}
	});

	//open (or close) submenu items in the lateral menu. Close all the other open submenu items.
	$('.item-has-children').children('a').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
	});
});


// Script from MrWidow  https://stackoverflow.com/questions/16510110/enable-dragging-the-volume-slider-in-jplayer-2-3-0
$("#my-input1")
    .bind("slider:ready slider:changed", 
        function (event, data) {
                $(".jp-jplayer1").jPlayer( "volume", data.value.toFixed(3));
    });

$("#my-input2")
    .bind("slider:ready slider:changed", 
        function (event, data) {
                $(".jp-jplayer2").jPlayer( "volume", data.value.toFixed(3));
    });
	
$("#my-input21")
    .bind("slider:ready slider:changed", 
        function (event, data) {
                $(".jp-jplayer21").jPlayer( "volume", data.value.toFixed(3));
    });

$("#my-input3")
    .bind("slider:ready slider:changed", 
        function (event, data) {
                $(".jp-jplayer3").jPlayer( "volume", data.value.toFixed(3));
    });
	
$("#my-input4")
    .bind("slider:ready slider:changed", 
        function (event, data) {
                $(".jp-jplayer4").jPlayer( "volume", data.value.toFixed(3));
    });
	
$("#my-input5")
    .bind("slider:ready slider:changed", 
        function (event, data) {
                $(".jp-jplayer5").jPlayer( "volume", data.value.toFixed(3));
    });	
	
$("#my-input6")
    .bind("slider:ready slider:changed", 
        function (event, data) {
                $(".jp-jplayer6").jPlayer( "volume", data.value.toFixed(3));
    });	
	
$("#my-input7")
    .bind("slider:ready slider:changed", 
        function (event, data) {
                $(".jp-jplayer7").jPlayer( "volume", data.value.toFixed(3));
    });	
	
$("#my-input8")
    .bind("slider:ready slider:changed", 
        function (event, data) {
                $(".jp-jplayer8").jPlayer( "volume", data.value.toFixed(3));
    });
		
$("#my-input9")
    .bind("slider:ready slider:changed", 
        function (event, data) {
                $(".jp-jplayer9").jPlayer( "volume", data.value.toFixed(3));
    });




/* 
Switch Button
MIT license
Copyright (c) 2018 by Hugo (https://codepen.io/kapz/pen/JemcB)
 */	
// From toggle.js
$(".k-switch").click(function () {
  
  var self = $(this);

      if(self.hasClass("on")) {
         self.removeClass("on");
      } else {
        self.addClass("on");
      }

});







	
	

//Hide and show sliders
$( "#hider" ).click(function() {
  $( "#slvolume" ).css( "visibility", "hidden" );
});
$( "#shower" ).click(function() {
  $( "#slvolume" ).css( "visibility", "visible" );
});

$( "#shower22" ).click(function() {
  $( "#slvolume2" ).toggleClass( "visibl" );
  $( "#slvolume21" ).removeClass( "visibl" );
  $( ".k-switch21" ).removeClass( "on" );
  $("#jquery_jplayer_21").jPlayer("stop");
});

$( "#shower221" ).click(function() {
  $( "#slvolume21" ).toggleClass( "visibl" );
  $( "#slvolume2" ).removeClass( "visibl" );
  $( ".k-switch2" ).removeClass( "on" );
  $("#jquery_jplayer_2").jPlayer("stop");
});

$( "#shower33" ).click(function() {
  $( "#slvolume3" ).toggleClass( "visibl" );
});

$( "#shower44" ).click(function() {
  $( "#slvolume4" ).toggleClass( "visibl" );
});

$( "#shower55" ).click(function() {
  $( "#slvolume5" ).toggleClass( "visibl" );
});

$( "#shower66" ).click(function() {
  $( "#slvolume6" ).toggleClass( "visibl" );
});

$( "#shower77" ).click(function() {
  $( "#slvolume7" ).toggleClass( "visibl" );
});

$( "#shower88" ).click(function() {
  $( "#slvolume8" ).toggleClass( "visibl" );
});

$( "#shower99" ).click(function() {
  $( "#slvolume9" ).toggleClass( "visibl" );
});









/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );






/**
 * notificationFx.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
	
	'use strict';

	var docElem = window.document.documentElement,
		support = { animations : Modernizr.cssanimations },
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
	
	/**
	 * extend obj function
	 */
	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	/**
	 * NotificationFx function
	 */
	function NotificationFx( options ) {	
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	/**
	 * NotificationFx options
	 */
	NotificationFx.prototype.options = {
		// element to which the notification will be appended
		// defaults to the document.body
		wrapper : document.body,
		// the message
		message : 'yo!',
		// layout type: growl|attached|bar|other
		layout : 'growl',
		// effects for the specified layout:
		// for growl layout: scale|slide|genie|jelly
		// for attached layout: flip|bouncyflip
		// for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
		// ...
		effect : 'slide',
		// notice, warning, error, success
		// will add class ns-type-warning, ns-type-error or ns-type-success
		type : 'error',
		// if the user doesn´t close the notification then we remove it 
		// after the following time
		ttl : 7000,
		// callbacks
		onClose : function() { return false; },
		onOpen : function() { return false; }
	}

	/**
	 * init function
	 * initialize and cache some vars
	 */
	NotificationFx.prototype._init = function() {
		// create HTML structure
		this.ntf = document.createElement( 'div' );
		this.ntf.className = 'ns-box ns-' + this.options.layout + ' ns-effect-' + this.options.effect + ' ns-type-' + this.options.type;
		var strinner = '<div class="ns-box-inner">';
		strinner += this.options.message;
		strinner += '</div>';
		strinner += '<span class="ns-close"></span></div>';
		this.ntf.innerHTML = strinner;

		// append to body or the element specified in options.wrapper
		this.options.wrapper.insertBefore( this.ntf, this.options.wrapper.firstChild );

		// dismiss after [options.ttl]ms
		var self = this;
		
		if(this.options.ttl) { // checks to make sure ttl is not set to false in notification initialization
			this.dismissttl = setTimeout( function() {
				if( self.active ) {
					self.dismiss();
				}
			}, this.options.ttl );
		}

		// init events
		this._initEvents();
	}

	/**
	 * init events
	 */
	NotificationFx.prototype._initEvents = function() {
		var self = this;
		// dismiss notification
		this.ntf.querySelector( '.ns-close' ).addEventListener( 'click', function() { self.dismiss(); } );
	}

	/**
	 * show the notification
	 */
	NotificationFx.prototype.show = function() {
		this.active = true;
		classie.remove( this.ntf, 'ns-hide' );
		classie.add( this.ntf, 'ns-show' );
		if (typeof this.options.onOpen === 'function')
			this.options.onOpen();
	}

	/**
	 * dismiss the notification
	 */
	NotificationFx.prototype.dismiss = function() {
		var self = this;
		this.active = false;
		clearTimeout( this.dismissttl );
		classie.remove( this.ntf, 'ns-show' );
		setTimeout( function() {
			classie.add( self.ntf, 'ns-hide' );
			
			// callback
			if (typeof self.options.onClose === 'function')
				self.options.onClose();
		}, 25 );

		// after animation ends remove ntf from the DOM
		var onEndAnimationFn = function( ev ) {
			if( support.animations ) {
				if( ev.target !== self.ntf ) return false;
				this.removeEventListener( animEndEventName, onEndAnimationFn );
			}
			self.options.wrapper.removeChild( this );
		};

		if( support.animations ) {
			this.ntf.addEventListener( animEndEventName, onEndAnimationFn );
		}
		else {
			onEndAnimationFn();
		}
	}

	/**
	 * add to global namespace
	 */
	window.NotificationFx = NotificationFx;

} )( window );
