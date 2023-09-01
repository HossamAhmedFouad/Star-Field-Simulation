class Star{
  constructor(){
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
  }

  update(){
    this.z -= speed;
    if(this.z < 1){
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
  }

  show(){
    fill(255);
    noStroke();
    let sx = map(this.x / this.z, 0 , 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0 , height);
    let r = map(this.z, 0, width, 20, 0);
    circle(sx, sy, r);
  }
}


let stars = [], speed;

function setup() {
  var cnv = createCanvas(windowWidth,windowHeight);
  cnv.style('display', 'block');
  for(let i = 0; i < 1000; i++){
    stars.push(new Star());
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width/2, height/2)
  for(let s of stars){
    s.update();
    s.show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

