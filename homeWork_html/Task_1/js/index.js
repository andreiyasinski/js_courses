var contentArea = document.getElementById('contentArea');
var figureType = figure1;

var form = document.createElement('form');
form.id = "form";
contentArea.appendChild(form);

var input = document.createElement('input');
input.id = "input";
input.type = "text";
input.placeholder="введите число";
form.appendChild(input);

var submit = document.createElement('input');
submit.id = "submit";
submit.type = "submit";
form.appendChild(submit);

var clear = document.createElement('input');
clear.id = "clear";
clear.type = "button";
clear.value="Очистить";
form.appendChild(clear);

var figures = document.createElement('div');
figures.id = "figures";
figures.style.display = "flex";
contentArea.appendChild(figures);

var figure1 = document.createElement('div');
figure1.id = "figure1";
figure1.className = "figure1"
figures.appendChild(figure1);

var figure2 = document.createElement('div');
figure2.id = "figure2";
figure2.className = "figure2"
figures.appendChild(figure2);

var figure3 = document.createElement('div');
figure3.id = "figure3";
figure3.className = "figure3"
figures.appendChild(figure3);

var figure4 = document.createElement('div');
figure4.id = "figure4";
figure4.className = "figure4"
figures.appendChild(figure4);

var container = document.createElement('div');
container.id = "container";
contentArea.appendChild(container);

figures.addEventListener("click", selectFigure);

form.addEventListener("submit", drawFigure);

clear.addEventListener("click", clearContainer)

function drawFigure() {
  event.preventDefault();
  container.innerHTML = '';
  if(input.value < 0 || input.value > 30) return false;

  for (var i = 1; i <= input.value; i++) {
    var block = document.createElement('div');
    block.style.display = "flex"

    for (var j = 1; j <= input.value; j++) {
      var colorValue = generateСolor();
      block.innerHTML += "<div class='elem " + figureType + "' style = 'background:" + colorValue + "'></div>";
    }
    container.appendChild(block);
  }
}

function clearContainer() {
  container.innerHTML = "";
  input.value = "";
}

function selectFigure(e) {
  figureType = e.target.id;
}

function generateСolor() {
    var r=Math.floor(Math.random() * (256));
    var g=Math.floor(Math.random() * (256));
    var b=Math.floor(Math.random() * (256));
    var color='#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
}
