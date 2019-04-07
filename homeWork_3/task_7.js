function isPointInCircle(x,y) {
  return Math.pow(x - 3, 2) + Math.pow(y - 5, 2) <= 16 ? true : false;
}



function isPointInSquare(x,y) {
  var y1 = -3 / 5 * x + 3;
  var y2 = 2 / 5 * x - 2;
  var y3 = -12 / 8 * x - 12;
  var y4 = 4 / 7 * x + 4;

  return y <= y1 && y >= y2 && y >= y3 && y <= y4 ? true : false;
}
