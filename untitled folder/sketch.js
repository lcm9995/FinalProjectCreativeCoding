let song1; 
let song2;
let song3;

let baby;

function preload() {
  song1 = loadSound('assets/Travis_Scott_SICKO_MODE.mp3');
  song2 = loadSound('assets/Prince_Purple_Rain.mp3');
  song3 = loadSound('assets/1-11 I Know The End.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  baby = new Dancer();
}

function draw() {
  rectMode(CENTER);
  stroke(0);
  strokeWeight(2);
  fill(255, 0, 0);
  rect(windowWidth/4, 30, 100, 50);
  fill(0, 255, 0);
  rect(windowWidth/2, 30, 100, 50);
  fill(0, 0, 255);
  rect(windowWidth*0.75, 30, 100, 50);
  baby.display();
}

function mousePressed() {
  if((mouseY>=5)&&(mouseY<=55)){
    if(song1.isPlaying()){
      song1.stop();
    }
    if(song2.isPlaying()){
      song2.stop();
    }
    if(song3.isPlaying()){
      song3.stop();
    }
    if((mouseX>=windowWidth/4-50) && (mouseX<=windowWidth/4+50)){
      song1.play();
    }
    else if((mouseX>= windowWidth/2-50) && (mouseX<=windowWidth/2+50)){
      song2.play();
    }
    else if((mouseX>= windowWidth*0.75-50) && (mouseX<=windowWidth*0.75+50)){
      song3.play();
    }
  }
}

class Dancer{
  constructor(){
    stroke(0);
    strokeWeight(5);
    fill(0);
    //head
    circle(windowWidth/2, windowHeight/2-150, 40);
    //torso
    line(windowWidth/2, windowHeight/2-135, windowWidth/2, windowHeight/2);
    //arms
    line(windowWidth/2, windowHeight/2-120, windowWidth/2-30, windowHeight/2-40);
    line(windowWidth/2, windowHeight/2-120, windowWidth/2+30, windowHeight/2-40);
    //legs
    line(windowWidth/2, windowHeight/2, windowWidth/2-30, windowHeight/2+50);
    line(windowWidth/2, windowHeight/2, windowWidth/2+30, windowHeight/2+50);
    
  }
  
}