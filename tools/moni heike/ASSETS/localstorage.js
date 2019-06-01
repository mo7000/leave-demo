$(".basic2").spectrum({
	 allowEmpty: true,
	   	        showPaletteOnly: true,
    togglePaletteOnly: true,
    togglePaletteMoreText: 'More  - >> ',
    togglePaletteLessText: ' << - Less',
	   preferredFormat: "uhex3",
    showInput: true,
	clickoutFiresChange: true,
	replacerClassName: 'basic2',
    palette: [
	        [ 'rgb(184, 27, 27);', 'rgb(255, 20, 20);', '#ff6600', '#f4921e'],
					['rgb(136, 183, 36);', '#5c8a2d', 'rgb(38, 147, 51);', '#3d7979'],
        ['#30ccff', 'rgb(0, 163, 226);', 'rgb(0, 169, 170);', '#0175b0'],


		['#2c1dff', '#5a5bc7', '#a73e5c', '#ff48a4'],
		['#424242', '#666666', 'grey','#c8c8c8'],
		

    ],
    change: function(color) {
		localStorage.setItem("color2Z", color.toHexString());
        $("body").css({"color":color.toHexString()});
		$(".folder").css({"background-color":color.toHexString()});
		$(".dragme").css({"border-color":color.toHexString()});
		$(".dragme").css({"color":color.toHexString()});	
		localStorage.setItem("colorbutton", color.toHexString());
		$(".bgsection").css({"background-color":color.toHexString()});
		$(".logosection").css({"background-color":color.toHexString()});
		$(".msection").css({"background-color":color.toHexString()});
		$(".clickEvent").css({"border-color":color.toHexString()});
		document.getElementById('section2').style.display = "none";
		document.getElementById("w4").innerHTML = color.toRgbString().replace(" ", "").replace(" ", "");
    }
});


$(".basic").spectrum({
		 allowEmpty: true,
	        showPaletteOnly: true,
    togglePaletteOnly: true,
    togglePaletteMoreText: 'More  - >> ',
    togglePaletteLessText: ' << - Less',
		preferredFormat: "hex3",
    showInput: true,
	clickoutFiresChange: true,
	replacerClassName: 'basic',
    palette: [
        ['rgb(0, 0, 0);', 'rgb(30, 30, 30);', 'rgb(39, 47, 50);', '#010712'],
		['rgb(60, 60, 60);','rgb(40, 40, 60);', 'rgb(42, 44, 43);', '#1c1f26'],
		['#7f7d6e', 'grey', 'darkgrey', '#3e6b85'],
        ['rgb(24, 141, 182)', '#364d0f', 'rgb(91, 120, 118);', '#571133'],
		['#ff3d2e', 'darkred', '#eb7f00', 'white'],
    ],
    change: function(color) {
	localStorage.setItem("color1Z", color.toHexString());
        $("body").css({"background-color":color.toHexString()});
		document.getElementById('section2').style.display = "none";
		document.getElementById("w3").innerHTML = color.toRgbString().replace(" ", "").replace(" ", "");
		
    }
});

getColour4 = localStorage.getItem("fontsizeConsole");
$("#console").css({"font-size":getColour4});



 getColour = localStorage.getItem("color1Z");
	 $("body").css({"background-color":getColour});


getFont = localStorage.getItem("mainfont") || 'Arial';
var f1 = location.search.split('!')[5] ? location.search.split('!')[5] : getFont;
localStorage.setItem('mainfont', f1);
	 	 	$("#console").css({"font-family":f1});
			
			
	 
getFolders = localStorage.getItem("folders") || 'block';
$("#folders").css("display", getFolders);
	 
getbottombar = localStorage.getItem("bottombar") || 'none';
$("#bottombar").css("display", getbottombar);


getcreatethemetip = localStorage.getItem("createthemetip") || 'block';
$("#createthemetip").css("display", getcreatethemetip);


	getLogo = localStorage.getItem("logotype") || '../ASSETS/logos/tegnio.png';
	var l = getLogo;
	localStorage.setItem('logotype', l);
	$('#center').css({ 'background-image': "url(" + l + ")" });
	$('.initial').css({ 'background-image': "url(" + l + ")" });
	
	
	
		c2 = localStorage.getItem("color2Z");
	 $("body").css({"color":c2});

	 $(".folder").css({"background-color":c2});
	 $(".dragme").css({"border-color":c2});
	 $(".dragme").css({"color":c2});
	 $(".bgsection").css({"background-color":c2});
	 $(".logosection").css({"background-color":c2});
	 $(".msection").css({"background-color":c2})
	 $(".clickEvent").css({"border-color":c2});
	 
	 
	 
getTexture = localStorage.getItem("textureZ") || '../ASSETS/textures/2_i.png';
var t = location.search.split('!')[2] ? location.search.split('!')[2] : getTexture;
localStorage.setItem('textureZ', t);
$('body').css({ 'background-image': "url(" + t + ")" });
document.getElementById("w2").innerHTML = t;