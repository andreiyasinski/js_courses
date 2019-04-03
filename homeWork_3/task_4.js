function getDayDeclension(num) {  
	if (num > 10 && num < 20) {
		return num + ' дней';
	} else if (num % 10 > 1 && num % 10 < 5) {
		return num + ' дня';
	} else if (num % 10 == 1) {
		return num + ' день';
	}
	return num + ' дней';
}
