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
	dropdownLang.innerHTML = lang.toUpperCase();
	dropdownLang2.innerHTML = lang.toUpperCase();
}

// menu

var menu_opened = false;
				
function prom_open_mobile_menu() {
	menu_opened = true;
	mobile_menu.style.maxHeight = '500px';
}
function prom_close_mobile_menu() {
	menu_opened = false;
	mobile_menu.style.maxHeight = '0';
	prom_close_mm2();
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