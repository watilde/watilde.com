void setup() {
  size(800, 450);
  background(255);
  smooth();
  frameRate(6);
}
void draw () {
  int step = 10;
  int len = 0;
  int x, y;
  float ynoise = random(10);
  float lastx = -999;
  float lasty = -999;

  background(255);
  strokeWeight(0);
  stroke(120, 80, 0);
  line(0, height / 2, width, height / 2);

  stroke(0);

  for (x = 0; width >= x; x += step) {
    y = noise(ynoise) * 100 + (height / 2 - 50);
    if (lastx != -999) {
      line(x, y, lastx, lasty);
    }
    lastx = x;
    lasty = y;
    ynoise += 0.1
  }
}
