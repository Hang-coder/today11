var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}




var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
paintcanvas.width = 300;
paintcanvas.height = 300;
paintcanvas.style.backgroundColor = "#FFFFFF";
var color = "black";
var radius = 10;
// only paint if mouse is being dragged (moved while the button is pressed)
var isPainting = false;

function eraser() {
  color = "white";
  radius = 5;
}

download_img = function(el) {  // get image URI from canvas object     
  var destinationCanvas = document.createElement("canvas"); //create dummy canvas to fill background color
  destinationCanvas.width = paintcanvas.width;  //same canvas size
  destinationCanvas.height = paintcanvas.height;
  var destCtx = destinationCanvas.getContext('2d');
 destCtx.fillStyle = paintcanvas.style.backgroundColor;  
 destCtx.fillRect(0,0,paintcanvas.width,paintcanvas.height);

  destCtx.drawImage(paintcanvas, 0, 0); //draw paintcanvas ontop of background
  var imageURI = destinationCanvas.toDataURL("image/jpg");

  //var imageURI = paintcanvas.toDataURL("image/jpg"); //use these last 2 lines if not dl bg color
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
  paintcanvas.style.backgroundColor = background_color; 
  
}

function resetColor() {  
  document.getElementById('canvas1').style.backgroundColor = '#FFFFFF';
}
