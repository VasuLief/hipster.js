(function($) {

	$.fn.hipster = function(options) {

		// Check the settings
		var settings = $.extend({
			// Defaults
			width: 480,
			height: 360,
			rotation: "0"
		}, options);
		
		return this.each(function(i, image){
			
			if(settings.rotation=="random"){
				rotation = Math.round( Math.random()*12 )-6;
			}else{
				rotation = settings.rotation;
			}
			$(image).wrap("<div class='hipster-container' style='width: "+settings.width+"px; height: "+settings.height+"px; transform: rotate("+rotation+"deg)'></div>").hide();
			$(image).parent().append("<div style='background-image: url("+$(image).attr('src')+")' class='hipster-image'></div>")			
			$(image).parent().append("<div class='hipster-caption'>"+$(image).data("caption")+"</div>")
			$(image).parent().find(".hipster-image").append("<img src='images/overlay-3.png' class='hipster-overlay' />");
		});

	};

}( jQuery ));
