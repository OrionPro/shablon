
// подключение animate.js


// Глобальные переменные тайм-линий 
var tl = new TimelineMax();

function allAnimations () {

	tl.pause();

	// активация тайм линий при загрузке с измерением скролла
	function readyTimeLineGo() {
		if ($(window).scrollTop() > 0) {
			tl.resume();
		}
	}

}

$(document).ready(function () {

	if (window.matchMedia("(min-width: 992px)").matches) {
		allAnimations(); //вся наша анимация greensock
	}

	// анимации - animate.css
    if (window.matchMedia("(min-width: 768px)").matches) {

    }

    readyTimeLineGo();
	// для IE вызов по скроллу в ready (загруженном документе)
	$(window).scroll(function () {
		readyTimeLineGo();
	});


});
$(window).scroll(function() {
    
});