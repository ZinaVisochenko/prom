var newsIdMax = 0;
function generateNewsId() {
	return newsIdMax++;
}

function addNews(image, date, title, text, text2) {
	var id = generateNewsId();
	var news =
			'<div class = "col-12 col-lg-4">' +
			'<div class="border1">' +
				'<div class = "news_background">' +
					'<img src = "images/intersection.png">'+
				'</div>' +
				'<div class = "news_date">' +
					date +
				'</div>' +
				'<div class = "title2">' +
					title +
				'</div>' +
				'<div class = "news_body_text">' +
					text +
				'</div>' +
				'<div class = "news_body_button">' +
					'<a id="' + newsMoreId(id) + '" href="news.html">' +
						'<button><i class="fas fa-chevron-right"></i>Читать далее</button></a>' +
				'</div>' +
			'</div>' +
			'</div>';
		
	var container = document.getElementById('news-box');
	container.innerHTML += news;
}



function newsText2Id(id) {
	return 'news_text2_' + id;
}
function newsMoreId(id) {
	return 'news_more_' + id;
}
function newsLessId(id) {
	return 'news_less_' + id;
}



$(document).ready(function() {
	addNews(
		0,
		'06.09.2019',
		'Повседневная практика показывает успех',
		'Задача организации, особенности же новая модель организационной деятельности играет важную роль в формировании модели.',
		'Задача организации, особенности же новая модель организационной деятельности играет важную роль в формировании модели.'
		);
	addNews(
		0,
		'06.09.2019',
		'Повседневная практика показывает успех',
		'Задача организации, особенности же новая модель организационной деятельности играет важную роль в формировании модели.'+
		'Задача организации, особенности же новая модель организационной деятельности играет важную роль в формировании модели.',
		'Задача организации, особенности же новая модель организационной деятельности играет важную роль в формировании модели.'
		);
	addNews(
		0,
		'06.09.2019',
		'Повседневная практика показывает успех',
		'Задача организации, особенности же новая модель организационной деятельности играет важную роль в формировании модели.',
		'Задача организации, особенности же новая модель организационной деятельности играет важную роль в формировании модели.'
		);
});