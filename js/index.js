window.onload=function(){
	var tree=document.getElementById("tree");
	var weight=document.getElementById("weight");
	tree.ontouchstart=function(){
		tree.className="";
		tree.className="beat";
		setTimeout(function(){
			tree.className="";
		},1000)
	}
	var paopao1=document.getElementById("paopao1");
	var paopao2=document.getElementById("paopao2");
	var paopao3=document.getElementById("paopao3");
	var paopao4=document.getElementById("paopao4");
	paopao1.ontouchstart=function(){
		paopao1.className="disappear";
		weight.innerText="8660g";
		tree.className="beat";
		setTimeout(function(){
			tree.className="";
		},1000)
	}
	paopao2.ontouchstart=function(){
		paopao2.className="disappear";
		weight.innerText="8692g";
		tree.className="beat";
		setTimeout(function(){
			tree.className="";
		},1000)
	}
	paopao3.ontouchstart=function(){
		paopao3.className="disappear";
		weight.innerText="8740g";
		tree.className="beat";
		setTimeout(function(){
			tree.className="";
		},1000)
	}
	paopao4.ontouchstart=function(){
		paopao4.className="disappear";
		weight.innerText="8858g";
		tree.className="beat";
		setTimeout(function(){
			tree.className="";
		},1000)
	}
 }