function getDayDeclension(num) {
	var result;

	if (num > 10 && num < 20) {
		result = num + ' дней';
	} else if (num % 10 > 1 && num % 10 < 5) {
		result = num + ' дня';
	} else if (num % 10 == 1) {
		result = num + ' день';
	} else {
		result = num + ' дней';
	}
	return result;
}
