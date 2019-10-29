

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

var lang = getUrlParameter('lang');
if (lang != undefined) {
	//dropdownLang.innerHTML = lang.toUpperCase();
	//dropdownLang2.innerHTML = lang.toUpperCase();
}
function prom_set_lang(lang) {
	if (/*lang == undefined*/ lang === 'en') {
		dropdownLang.innerHTML = '<div class="flag"><img src = "images/flag_en.svg" class = "img_flag"></div>EN';
	} else {
		dropdownLang.innerHTML = '<div class="flag"><img src = "images/flag_ru.svg" class = "img_flag"></div>RU';
	}
	dropdownLang2.innerHTML = dropdownLang.innerHTML;
}
prom_set_lang(lang);

// menu

var menu_opened = false;
				
function prom_open_mobile_menu() {
	menu_opened = true;
	mobile_menu.style.maxHeight = '1000px';
	mobile_menu.style.overflow = '';
}
function prom_close_mobile_menu() {
	menu_opened = false;
	mobile_menu.style.maxHeight = '0';
	prom_close_mm2();
	mobile_menu.style.overflow = 'hidden';
}
function prom_toggle_mobile_menu() {
	menu_opened ? prom_close_mobile_menu() : prom_open_mobile_menu();
}
function prom_show_mm2() {
	mm2.style.display = "block";
	mm1.style.display = "none";
	mmd.style.display = "none";
	mmb.style.display = "block";
}
function prom_close_mm2() {
	mm1.style.display = "block";
	mm2.style.display = "none";
	mmd.style.display = "block";
	mmb.style.display = "none";
}
prom_close_mobile_menu();

// request call back
function prom_open_rcallback() {
	document.getElementById('over-section').style.display = 'block';
}
function prom_close_rcallback() {
	document.getElementById('over-section').style.display = 'none';
}

$(document).ready(function() {
	// slowly move to href target
	$(".slow_quesh").each(function (element) {
		$(this).click(function () {
			elementClick = $(this).attr("href");
			destination = $(elementClick).offset().top;
			$("body,html").animate({scrollTop: destination }, 800);
		});
	});
	
});

function initOwlCarousel() {
	$('.owl-carousel-oc').owlCarousel({
		margin: 30,
		autoplay: true,
		nav: true,
		responsive:{
			0:{
				items:2
			},
			576:{
				items:3
			},
			768:{
				items:4
			},
			992:{
				items:5
			},
			1200:{
				items:6
			}
		}
	});
	$('.owl-carousel-wc').owlCarousel({
		margin: 30,
		autoplay: true,
		nav: true,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});
	$('.owl-carousel-pr1').owlCarousel({
		margin: 0,
		autoplay: true,
		nav: true,
		items:1
	});
	$('.owl-carousel-he').owlCarousel({
		margin: 0,
		autoplay: true,
		nav: false,
		items:1
	});
	$('.owl-carousel-oo').owlCarousel({
		margin: 30,
		autoplay: true,
		nav: true,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			768:{
				items:3
			},
			992:{
				items:4
			},
			1200:{
				items:5
			}
		}
	});
}

function initCallbackSection() {
	
	$("#cb_phone_input").mask("+7(999) 999-9999", {
		completed: function(){ /*alert("Вы ввели номер: " + this.val());*/ }
	});
	$("#ov_phone_input").mask("+7(999) 999-9999", {
		completed: function(){ /*alert("Вы ввели номер: " + this.val());*/ }
	});
	
	$("#callback_form").validate({
		rules:{
			cb_name_input:{
			  required: true,
			  minlength: 2,
			  maxlength: 16,
			},
			
			cb_phone_input:{
			  required: true,
			  //minlength: 1,
			  //maxlength: 16,
			},
			cb_email_input: {
			  required: true,
			  email: true
			},
			squaredThreeCb: {
				required: true,
			}
		},
		messages:{
			cb_name_input:{
				required: "Это поле обязательно для заполнения",
				minlength: "Имя должно быть минимум 2 символа",
				maxlength: "Максимальное число символов - 16",
			},
			cb_phone_input:{
				required: "Это поле обязательно для заполнения",
				//minlength: "Пароль должен быть минимум 6 символа",
				//maxlength: "Пароль должен быть максимум 16 символов",
			},
			cb_email_input: {
				required: "Это поле обязательно для заполнения",
				//minlength: "Пароль должен быть минимум 6 символа",
				//maxlength: "Почта должна быть максимум 50 символов",
			},
			squaredThreeCb: {
				required: "Это поле обязательно для заполнения",
			}
		}
		
	});
}

function initCallbackSection2() {
	(function() {
	  'use strict';
	  window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
		  form.addEventListener('submit', function(event) {
			if (form.checkValidity() === false) {
			  event.preventDefault();
			  event.stopPropagation();
			}
			form.classList.add('was-validated');
		  }, false);
		});
	  }, false);
	})();
}

$(document).ready(function() {
	initCallbackSection();
	initOwlCarousel();
});