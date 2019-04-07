function getSumm(n) {
	var result = 0;
	for (var i = 1; i <= n; i++) {
		result += i;
	}
	return result;
}

/* recursion */

function getSummRec(n) {
	if (n !== 1) {
			return n + getSumm(--n);
	} else {
			return n;
	}    
}