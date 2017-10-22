var a="Logo"; var b=".jpg";
var i=1; var z;
var y=document.getElementById("banner");
function logoMouseOver() {
	// body...
	// body...
	if (i==8) {
		i=0;
	}
	else{
		i+=1;
	}
	var c=a+i+b;
	
	document.getElementById("logo").src=c;
}
function run() {
	// body...
	z=window.setInterval(logoMouseOver,300);
}
function logoMouseOut() {
	// body...
	i=0; var c=a+i+b;
	window.clearInterval(z);
	document.getElementById("logo").src=c;
}
function leftRunning() {
	// body...
	// window.alert(y.style.width);
	var pos=0;
	var r=setInterval(frame,10);
	function frame() {
		// body...
		if (pos==window.innerWidth) {
			clearInterval(r);
		}
		else{
			pos++;
			y.style.left=pos+'px';
		}
	}
}