function shouqu(){
	var div = document.createElement("div")
	
	time = setInterval(function(){
		div.innerHTML = "2g";
		document.body.appendChild(div);
		div.style="position:absolute;top:28rem;left:22.3rem;";
		div.id="we"
		div.style.top = div.offsetTop + 20 +"px";
	},300);
}

