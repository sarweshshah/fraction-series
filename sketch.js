// https://www.numberphile.com/videos/the-golden-ratio-why-it-is-so-irrational

let points = 255;
let x, y;
let divisions = 1;
let pause = false;

function setup() {
  createCanvas(800, 820);
  ellipseMode(CENTER);
  background(51);
}

function draw() {
  if (pause == false) {
    render();
  } else {
    textSize(15);
    fill(200);
    textAlign(CENTER);
    text('PAUSED. PRESS ANY KEY TO RESUME', width / 2, height - 20);
  }
}

function keyPressed() {
  pause = !pause;
}

function render() {
  background(51);
  fill(200);
  textSize(15);
  textAlign(RIGHT);
  text('F.' + (1 / divisions).toFixed(8), width - 20, height - 20);

  translate(width / 2, height / 2);
  noStroke();

  let r = 30;
  for (var i = 0; i <= points; i++) {
    colorMode(HSB);
    let c = map(i, 0, points, 25, 50);
    let a = map(i, 0, points, 150, 255);
    fill(c, 255, a, 100);
    
    x = r * cos(2 * float(PI / divisions) * i);
    y = r * sin(2 * float(PI / divisions) * i);
    let d = dist(0, 0, x, y);
    if (d < 325) ellipse(x, y, 15, 15);
    r += 10 / divisions;
  }
  colorMode(RGB);
  if (r < 250) return; 
  divisions += millis() / 100000000;
}
