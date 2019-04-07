function isTimeValid(hours, minutes) {
	return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60 ? true : false;
}