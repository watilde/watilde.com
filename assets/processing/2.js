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
  strokeWeight(5);
  strokeWeight(5);
  fill(255, 50);
}

void draw () {
  if (diam <= 400) {
    background(180);
    ellipse(centX, centY, diam, diam);
    ellipse(mouseX, mouseY, diam / 2, diam / 2);
    diam += 10;
  }
}
