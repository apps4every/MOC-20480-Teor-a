	function onload() {
		var hyperlinks = document.querySelectorAll("a");
		
		for (var i = 0; i < hyperlinks.length; i++) {
			hyperlinks[i].style.backgroundColor = "yellow";
		}
	}
	
	window.addEventListener("load", onload, false);	