int diam = 10;
float centX, centY;

void setup() {
  size(800, 450);
  frameRate(24);
  smooth();
  background(180);
  centX = width / 2;
  centY = height / 2;
  stroke(0);
  strokeWeight(1);
  noFill();
}

void draw () {
  if (diam <= 400) {
    strokeWeight(5);
    fill(255, 50);
    ellipse(centX, centY, diam, diam);
    diam += 10;
  }
}
