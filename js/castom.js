"use strict";


let dayShow = document.getElementById('dayShow');
let hourShow = document.getElementById('hourShow');
let miniteShow = document.getElementById('miniteShow');
let secendShow = document.getElementById('secendShow');

let timeCoutn = document.querySelector(".TimeCoutn");
let bgAudio = document.querySelector('#bgAudio');
let body = document.querySelector('.body');

let clidkBody = 0;
bgAudio.loop = true;

body.addEventListener("click", function(){
	clidkBody = clidkBody + 1;
	if (clidkBody == 1) {
		clidkBody = 1;
		bgAudio.play();
	} else if (clidkBody == 2) {
		clidkBody = 0;
		bgAudio.pause();
	}
});


setInterval(function(){
	let setDate = new Date("20 Nov 2022 22:00:00").getTime();
	let date = new Date().getTime();

	let caretTime = setDate - date;

	let miliSecend = Math.floor(caretTime / 1000);

	let secend = Math.floor(miliSecend / 60);
	let lastSecend = Math.floor(miliSecend % 60);

	let minite = Math.floor(secend / 60);
	let lastMinite = Math.floor(secend % 60);

	let hour = Math.floor(minite / 24);
	let lastHour = Math.floor(minite % 24);

	let lastDay = Math.floor(hour % 30)



	if (lastDay < 10) {
		dayShow.innerHTML = "0" + lastDay;
	} else {
		dayShow.innerHTML = lastDay;
	}

	if (lastHour < 10) {
		hourShow.innerHTML = "0" + lastHour;
	} else {
		hourShow.innerHTML = lastHour;
	}

	if (lastMinite < 10) {
		miniteShow.innerHTML = "0" + lastMinite;
	} else {
		miniteShow.innerHTML = lastMinite;
	}

	if (lastSecend < 10) {
		secendShow.innerHTML = "0" + lastSecend;
	} else {
		secendShow.innerHTML = lastSecend;
	}

	if (caretTime <= 0) {
		timeCoutn.style.display = "none";
	} 

},1000);