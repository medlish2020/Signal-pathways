function alertDia(evt){
			var targetId = evt.target.getAttribute("data-target");
			//console.log(targetId);
			var target = document.getElementById(targetId);
			var release = document.getElementById(targetId + "_release");
			//console.log(release);
			var release_hale01 = document.getElementById(targetId + "_release_hale01");
			var release_hale02 = document.getElementById(targetId + "_release_hale02");
			release_hale01.setAttribute("style","display:yes;");
			release_hale02.setAttribute("style","display:yes;");
			release.setAttribute("display","yes");
			//console.log(123);
        };
        function shakeDia(evt){
			//console.log(evt);
			var targetId = evt.target.getAttribute("data-target");
			//console.log(targetId);
			var target = document.getElementById(targetId);
			var shakeBox = document.getElementById(targetId + "_release_shadow");
			//console.log(targetId + "_release_shadow")
            shakeBox.setAttribute("style","visibility:visible")
			shakeShadowtargetId = evt.target.getAttribute("id");
			var shakeShadow = document.getElementById(shakeShadowtargetId + "_button")	
			shakeShadow.setAttribute("style","visibility:hidden")				
        };
        function unshakeDia(evt){
			var targetId = evt.target.getAttribute("data-target");
			var target = document.getElementById(targetId);
			var shakeBox = document.getElementById(targetId + "_release_shadow")
            shakeBox.setAttribute("style","visibility:hidden");
			shakeShadowtargetId = evt.target.getAttribute("id");
			shakeShadow = document.getElementById(shakeShadowtargetId + "_button")			
			shakeShadow.setAttribute("style","visibility:visable")						
		};
		function closeDia(evt){
			var targetId = evt.target.getAttribute("data-target");
			var target = document.getElementById(targetId);
			var release = document.getElementById(targetId + "_release");
			var release_hale01 = document.getElementById(targetId + "_release_hale01");
			var release_hale02 = document.getElementById(targetId + "_release_hale02");
			release_hale01.setAttribute("style","display:none;");
			release_hale02.setAttribute("style","display:none;");
			setTimeout(function(){ 
								ishold = release.getAttribute("data-ishold")
								if(ishold=="false")
								{	
									release.setAttribute("display","none");
								};
						}, 	200);
		};
		function release_hold(e){
			e.setAttribute("data-ishold","true")
		};
		function release_out(e){
			//console.log(e.getAttribute("data-ishold")=="true")
			if(e.getAttribute("data-ishold")=="true")
			{
				e.setAttribute("data-ishold","false");
				e.setAttribute("display","none");
			}
		}

