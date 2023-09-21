let x = 0;
let y = 0;
let w = 100;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
}

function draw() {
  
  background(0);
  stroke(255);
  fill(255);
  //strokeWeight(4);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Press 'Space' to change background color", width/2, height/2);
  if (keyIsPressed) {
    if (key == " ") {
      background(random(255), random(255), random(255));
    }
  }
}
