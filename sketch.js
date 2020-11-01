function setup() {
  createCanvas(400, 400);
  background("lightblue");
  shape1()
  shape2()
  shape3()
}

function draw() {
  stroke(0);
  strokeWeight(2)
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
function shape1(){
  fill("red")
  ellipse(50, 50, 10, 10);
  ellipse(100, 50, 10, 10);
  ellipse(50, 100, 10, 10);
  ellipse(100, 100, 10, 10);
}

function shape2(){
  fill("green")
  ellipse(250, 50, 10, 10);
  ellipse(200, 150, 10, 10);
  ellipse(300, 150, 10, 10);
  ellipse(250, 120, 10, 10);
}

function shape3(){
  fill("blue")
  ellipse(100, 250, 10, 10);
  ellipse(50, 300, 10, 10);
  ellipse(200, 250, 10, 10);
  ellipse(250, 300, 10, 10);
  ellipse(100, 350, 10, 10);
  ellipse(200, 350, 10, 10);
}