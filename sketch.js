let x = 0;
let w = 100;
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  fill(255, 255, 255);
  circle(x, 100, w, 200);
  x = x + 10;
  if (x > width-w) {
    x = 0;
  }
}
