
function border(obj,color) {
    obj.style.borderColor = color;
}


function change() {
	var spanArray = document.getElementsByTagName("span");
	for(var i=0; i<spanArray.length; i++) {
		var span = spanArray[i];
		span.style.color = "green";
		span.style.fontSize = "20px";
	}
}