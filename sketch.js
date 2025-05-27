let x;
let y;

function setup() {
  createCanvas(600, 600);
  x = random(600);
  x = int(x);
  y = random(600);
  y = int(y);
}

function draw() {
  background('#FFFFFF');
  //circle(x, y, 10)
  
  d = dist(mouseX, mouseY, x, y);
  console.log(mouseX, x);
  console.log(mouseY, y);
  console.log(d);
  
  circle(572, 300, d);
  
  if(mouseX == x && mouseY == y){
    text('Namorado', 300, 300);
    noLoop();
  }
}