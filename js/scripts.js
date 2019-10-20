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
