float xstart, xnoise, ynoise;

void setup() {
  size(800, 450);
  smooth();
  background(0);
  xstart = random(30);
  xnoise = xstart;
  ynoise = random(30);
  for (int y = 0; y <= height; y += 5) {
    ynoise += 0.01;
    xnoise += xstart;
    for(int x = 0; x <= width; x += 5) {
      xnoise += 0.01;
      drawPoint(x, y, noise(xnoise, ynoise));
    }
  }
}

void drawPoint(float x, float y, float noiseFactor) {
  pushMatrix();
  translate(x, y);
  rotate(noiseFactor * radians(540));
  float edgeSize = noiseFactor * 35;
  float grey = 150 + (noiseFactor * 120);
  float alph = 150 + (noiseFactor * 120);
  noStroke();
  fill(grey, alph);
  ellipse(0, 0, edgeSize, edgeSize / 2);

  popMatrix();
}
