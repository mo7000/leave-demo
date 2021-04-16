/* 
MIT license
Copyright (c) 2011-2018 Amber Creative Lab, Ltd.

Stretchy Navigation is created by CodyHouse and licensed under the MIT license: https://opensource.org/licenses/MIT

https://codyhouse.co/gem/stretchy-navigation
 */

jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}
});


// to mute, unmute button
/* 
$("#jquery_jplayer_1").jPlayer("mute");
$("#jquery_jplayer_1").jPlayer("unmute");
 */

// to stop Presets
$(".p-stop").click(function() {
  $.jPlayer.pause();
  $( "#slvolume1, #slvolume2, #slvolume3, #slvolume4, #slvolume5, #slvolume6, #slvolume7, #slvolume8, #slvolume9, #slvolume10, #slvolume11, #slvolume12, #slvolume13, #slvolume14, #slvolume15, #slvolume16, #slvolume17, #slvolume18, #slvolume19, #slvolume20, #slvolume21" ).css( "visibility", "hidden" );
});

// to play Presets
$("#p-focus").click(function() {
  $("#jquery_jplayer_12").jPlayer("play");
  $("#jquery_jplayer_12").jPlayer("volume", 0.8);
  $( "#slvolume12" ).css( "visibility", "visible" );
  
  $("#jquery_jplayer_5").jPlayer("play");
  $("#jquery_jplayer_5").jPlayer("volume", 0.5);
  $( "#slvolume5" ).css( "visibility", "visible" );
});



$("#p-prod").click(function() {
  $("#jquery_jplayer_5").jPlayer("play");
  $("#jquery_jplayer_5").jPlayer("volume", 0.8);
  $( "#slvolume5" ).css( "visibility", "visible" );
  
  $("#jquery_jplayer_17").jPlayer("play");
  $("#jquery_jplayer_17").jPlayer("volume", 0.5);
  $( "#slvolume17" ).css( "visibility", "visible" );
  
  $("#jquery_jplayer_6").jPlayer("play");
  $("#jquery_jplayer_6").jPlayer("volume", 0.5);
  $( "#slvolume6" ).css( "visibility", "visible" );
});



$("#p-relax").click(function() {
  $("#jquery_jplayer_8").jPlayer("play");
  $("#jquery_jplayer_8").jPlayer("volume", 0.8);
  $( "#slvolume8" ).css( "visibility", "visible" );
  
  $("#jquery_jplayer_15").jPlayer("play");
  $("#jquery_jplayer_15").jPlayer("volume", 0.3);
  $( "#slvolume15" ).css( "visibility", "visible" );
});



$("#p-sleep").click(function() {
  $("#jquery_jplayer_1").jPlayer("play");
  $("#jquery_jplayer_1").jPlayer("volume", 0.8);
  $( "#slvolume1" ).css( "visibility", "visible" );
  
  $("#jquery_jplayer_9").jPlayer("play");
  $("#jquery_jplayer_9").jPlayer("volume", 0.3);
  $( "#slvolume9" ).css( "visibility", "visible" );
});



$("#p-medit").click(function() {
  $("#jquery_jplayer_16").jPlayer("play");
  $("#jquery_jplayer_16").jPlayer("volume", 0.4);
  $( "#slvolume16" ).css( "visibility", "visible" );
  
  $("#jquery_jplayer_20").jPlayer("play");
  $("#jquery_jplayer_20").jPlayer("volume", 0.8);
  $( "#slvolume20" ).css( "visibility", "visible" );
  
  $("#jquery_jplayer_3").jPlayer("play");
  $("#jquery_jplayer_3").jPlayer("volume", 0.3);
  $( "#slvolume3" ).css( "visibility", "visible" );
});




$("#p-zen").click(function() {
  $("#jquery_jplayer_8").jPlayer("play");
  $("#jquery_jplayer_8").jPlayer("volume", 0.8);
  $( "#slvolume8" ).css( "visibility", "visible" );
  
  $("#jquery_jplayer_9").jPlayer("play");
  $("#jquery_jplayer_9").jPlayer("volume", 0.3);
  $( "#slvolume9" ).css( "visibility", "visible" );
  
  $("#jquery_jplayer_14").jPlayer("play");
  $("#jquery_jplayer_14").jPlayer("volume", 0.1);
  $( "#slvolume14" ).css( "visibility", "visible" );
});




$("#p-rainy").click(function() {
  $("#jquery_jplayer_13").jPlayer("play");
  $("#jquery_jplayer_13").jPlayer("volume", 0.6);
  $( "#slvolume13" ).css( "visibility", "visible" );
  
  $("#jquery_jplayer_20").jPlayer("play");
  $("#jquery_jplayer_20").jPlayer("volume", 0.4);
  $( "#slvolume20" ).css( "visibility", "visible" );
  
  $("#jquery_jplayer_3").jPlayer("play");
  $("#jquery_jplayer_3").jPlayer("volume", 0.3);
  $( "#slvolume3" ).css( "visibility", "visible" );
});


// Countdowns to stop all HS sounds
$( "#stoper" ).click(function() {
  $.jPlayer.pause();
  $( ".k-switch" ).removeClass( "on" );
  $( "#slvolume" ).css( "visibility", "hidden" );
  $( "#slvolume2, #slvolume21, #slvolume3, #slvolume4, #slvolume5, #slvolume6, #slvolume7, #slvolume8, #slvolume9" ).removeClass( "visibl" ); 
});

// to stop all ASM or DEF sounds
$( "#stoperbis" ).click(function() {
  $.jPlayer.pause();
  $( "#slvolume1, #slvolume2, #slvolume3, #slvolume4, #slvolume5, #slvolume6, #slvolume7, #slvolume8, #slvolume9, #slvolume10, #slvolume11, #slvolume12, #slvolume13, #slvolume14, #slvolume15, #slvolume16, #slvolume17, #slvolume18, #slvolume19, #slvolume20, #slvolume21" ).css( "visibility", "hidden" );
});

$("#stop_all").click(function(){
	setTimeout(function(){
	$.jPlayer.pause();
	$( ".k-switch" ).removeClass( "on" );
	$( "#slvolume2, #slvolume3, #slvolume4, #slvolume5, #slvolume6, #slvolume7, #slvolume8, #slvolume9" ).removeClass( "visibl" );
	}, 3600000); // write the time after you want to stop 1000 = 1 second //
});

$("#stop_all2").click(function(){
	setTimeout(function(){
	$.jPlayer.pause();
	$( ".k-switch" ).removeClass( "on" );
	$( "#slvolume2, #slvolume3, #slvolume4, #slvolume5, #slvolume6, #slvolume7, #slvolume8, #slvolume9" ).removeClass( "visibl" );	
	}, 1800000); // write the time after you want to stop 1000 = 1 second //
});
