function addMinutes(hours, minutes, num) {
	var newHours = hours;
	var newMinutes = minutes + num;
	
	if (newMinutes >= 60) {
		newMinutes = newMinutes % 60;
		newHours = (((minutes + num - newMinutes) / 60) + hours) % 24;
	};
	
	return String(newHours).padStart(2, '0') + ':' + String(newMinutes).padStart(2, '0');
}