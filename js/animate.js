
// подключение animate.js


class Animation{

	constructor(){


		this.tl1 = new TimelineMax();
		this.tl1.pause();
		
	}

	description(){
		this.tl1.from('.header_title', 0.7, {
			y: -100,
			opacity: 0,
			ease: Power4.easeOut
		},'+=1');

	}


	play(){
		if ($(window).scrollTop() >= 0 && $(window).scrollTop() <= 900) {
			this.tl1.resume();
		}
	}
}


var anim = new Animation;

$(window).scroll(function () {
	if (document.documentElement.clientWidth >= 1200) {
		anim.play();
	}
});

$(window).ready(function() {

	if (document.documentElement.clientWidth >= 1200) {
		anim.description();
		anim.play();
	}

});