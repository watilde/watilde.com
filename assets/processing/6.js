colorFlg = false;
mouseMoved = false;
mousex = window.innerWidth / 2;
mousey = window.innerHeight / 2;
int count = 0;

void setup() {
  size(window.innerWidth, window.innerHeight);
  background(255);
  strokeWeight(0.5)
  smooth();
  frameRate(12);
}

void draw() {
  size(window.innerWidth, window.innerHeight);
  mousex = mouseMoved ? mouseX : window.innerWidth / 2;
  mousey = mouseMoved ? mouseY : window.innerHeight / 2;
  if (mouseMoved !== true) {
    if (mouseX !==0 || mouseY !== 0) mouseMoved = true;
  }
  background(255);
  int centx = width / 2;
  int centy = height / 2;
  int len = 60 + random(40);
  for(float i = 0; i <= len; i++) {
    lastx = -999;
    lasty = -999;
    radiusNoise = random(100);
    float radius = 100;
    if (count % 12 === 0) {
      colorFlg = !colorFlg;
    }
    if (colorFlg) {
      stroke(random(255), random(255), random(255), 60);
    } else {
      stroke(10, 25, 35, 80);
    }
    int startangle = int(random(360));
    int endangle = 100 + int(random(400)) + abs(mouseX + mouseY) * 0.05;
    int anglestep = 5 + int(random(3));
    for (float ang = startangle; ang <= endangle; ang += anglestep) {
      radiusNoise += 0.05;
      radius += 0.5;
      float thisRadius = radius + (noise(radiusNoise) * 200) - 100;
      float rad = radians(ang);
      x = -(mousex - centx) * random(10) * 0.1 + centx + (thisRadius * cos(rad));
      y = -(mousey - centy) * random(10) * 0.1 + centy + (thisRadius * sin(rad));
      if (lastx > -999) {
        line(x, y, lastx, lasty);
      }
      lastx = x;
      lasty = y;
    }
  }
  count++;
}
