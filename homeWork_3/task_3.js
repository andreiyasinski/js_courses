function getSeason(month) {
	var season;
	
	if (month === 12 || month === 1 || month === 2 ) {
		season = 'Зима';
	} else if (month >= 3 && month <= 5) {
		season = 'Весна';
	} else if (month >= 6 && month <= 8) {
		season = 'Лето';
	} else if (month >= 9 && month <= 11) {
		season = 'Осень';
	} else return 'Введидите число от 1 до 12';
	
	return season;
}