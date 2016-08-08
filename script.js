
function clock() {
 var date = new Date();
var sanAng=date.getSeconds()*6;
var deqAng=date.getMinutes()*6+date.getSeconds()*0.1;
var saatAng=date.getHours()*30+deqAng*0.1;
 	document.getElementsByClassName('saniye')[0].style.webkitTransform = 'rotate('+(sanAng)+'deg)';
 	document.getElementsByClassName('deg')[0].style.webkitTransform= 'rotate('+(deqAng)+'deg)';
 	document.getElementsByClassName('saat')[0].style.webkitTransform = 'rotate('+(saatAng)+'deg)';
 	
 }

 setInterval(clock,1000);