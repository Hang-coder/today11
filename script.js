var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = "black";
var radius = 5;
// only paint if mouse is being dragged (moved while the button is pressed)
var isPainting = false;

download_img = function(el) {
  // get image URI from canvas object
  var imageURI = paintcanvas.toDataURL("image/jpg");
  el.href = imageURI;
};

function imgToColor(id) {
    var image = document.getElementById(id);
    context.drawImage(image, 30, 30, paintcanvas.width-60, paintcanvas.height-60);
  };

function setWidth(value) {
  if (isNumeric(value) && value > 0) {
    paintcanvas.width = value;
  } else {
    alert("Please enter valid values for canvas width and height!");
  }
}

function setHeight(value) {
  if (isNumeric(value) && value > 0) {
    paintcanvas.height = value;
  } else {
    alert("Please enter valid values for canvas width and height!");
  }
}

function clearCanvas() {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle(x, y) {
  // make sure to start a new circle each time
  context.beginPath();
  // draw circle using a complete (2*PI) arc around given point
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fillStyle = color;
  context.fill();
}
// verify the given value is actually a number
function isNumeric(value) {
  // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
  return !isNaN(value);
}

function startPaint() {
  isPainting = true;
}

function endPaint() {
  isPainting = false;
}

function doPaint(x, y) {
  if (isPainting == true) {
    paintCircle(x, y);
  }
}

function setColor(value) {
  color = value;
}

function resizeBrush(value) {
  radius = value;
}

function changeColor_2() {
  var background_color = document.getElementById("change_color_2").value;
  document.getElementById('canvas1').style.backgroundColor = background_color;
  //var c = document.getElementById("canvas1");
  //var ctx = c.getContext("2d");
  //ctx.fillStyle = color;
  //ctx.fillRect(0, 0, c.width, c.height);
}

function resetColor() {  
  document.getElementById('canvas1').style.backgroundColor = '#FFFFFF';
}
