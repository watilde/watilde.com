void setup() {
  size(window.innerWidth, window.innerHeight);
  background(255);
  strokeWeight(0.5)
  smooth();
  frameRate(12);
}

void draw() {
  size(window.innerWidth, window.innerHeight);
  background(255);
  int centx = width / 2;
  int centy = height / 2;
  for(float i = 0; i <= 100; i++) {
    lastx = -999;
    lasty = -999;
    radiusNoise = random(100);
    float radius = 100;
    stroke(random(20), random(50), random(70), 80);

    int startangle = int(random(360));
    int endangle = 100 + int(random(400)) + abs(mouseX + mouseY) * 0.05;
    int anglestep = 5 + int(random(3));
    for (float ang = startangle; ang <= endangle; ang += anglestep) {
      radiusNoise += 0.05;
      radius += 0.5;
      float thisRadius = radius + (noise(radiusNoise) * 200) - 100;
      float rad = radians(ang);
      x = -(mouseX - centx) * random(10) * 0.1 + centx + (thisRadius * cos(rad));
      y = -(mouseY - centy) * random(10) * 0.1 + centy + (thisRadius * sin(rad));
      if (lastx > -999) {
        line(x, y, lastx, lasty);
      }
      lastx = x;
      lasty = y;
    }
  }
}
