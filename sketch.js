let x = 0;
let y = 0;
let w = 100;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
}

function draw() {
  background(220);
  fill(255, 255, 255);
  circle(x, y, w);
  x = x + 10;
  y = y + 10;
  if (x > width) {
    x = 0;
  }
  if (y > height) {
    y = y - 10;
  }
  if (y < 0) {
    y = y + 10;
  }
}
