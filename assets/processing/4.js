int diam = 10;
float centX, centY;

void setup() {
  size(800, 450);
  background(180);
  strokeWeight(4);
  strokeCap(SQUARE);
  for (int h = 10; h <= (height - 15); h += 10) {
    stroke(0, 255 - h);
    line(10, h, width - 20, h);
    stroke(255, h);
    line(10, h + 4, width - 20, h + 4);
  }
}
