let song1; 
let song2;
let song3;

//let baby;

let danceTime = false;
let danceTime2=false;
let danceTime3=false;

//let sway;
//let bob;

function preload() {
  song1 = loadSound('Travis_Scott_SICKO_MODE.mp3');
  song2 = loadSound('Prince_Purple_Rain.mp3');
  song3 = loadSound('1-11 I Know The End.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(250);
  //baby = new Dancer();
  amplitude = new p5.Amplitude();
}

function draw() {
  background(250);
  rectMode(CENTER);
  stroke(0);
  strokeWeight(2);
  fill(255, 0, 0);
  rect(windowWidth/4, 30, 100, 50);
  fill(0, 255, 0);
  rect(windowWidth/2, 30, 100, 50);
  fill(0, 0, 255);
  rect(windowWidth*0.75, 30, 100, 50);
  smooth();
  let currentAmp = amplitude.getLevel();
  if(danceTime==true){
     dancer(map(currentAmp, 0, 0.5,-100, 100), 0);
  }
  if(danceTime2==true){
    dancer(map(currentAmp, 0, 0.5, -20, 20), map(currentAmp, 0, .5, -50, 50));
  }
  if(danceTime3==true){
    dancer(0, map(currentAmp, 0, 0.5, -100, 100));
  }
  text(currentAmp, windowWidth/6, windowHeight/2);
  //baby.display();
}

function mousePressed() {
  if((mouseY>=5)&&(mouseY<=55)){
    if(song1.isPlaying()){
      song1.stop();
      danceTime=false;
    }
    if(song2.isPlaying()){
      song2.stop();
      danceTime2=false;
    }
    if(song3.isPlaying()){
      song3.stop();
      danceTime3=false;
    }
    if((mouseX>=windowWidth/4-50) && (mouseX<=windowWidth/4+50)){
      song1.play();
      danceTime=true;
      
    }
    else if((mouseX>= windowWidth/2-50) && (mouseX<=windowWidth/2+50)){
      song2.play();
      danceTime2=true;
    }
    else if((mouseX>= windowWidth*0.75-50) && (mouseX<=windowWidth*0.75+50)){
      song3.play();
      danceTime3=true;
    }
  }
}
function dancer(bob, sway){
  fill(0);
  circle(windowWidth/2+sway, windowHeight/2-150+bob*2, 70);
  line(windowWidth/2+sway, windowHeight/2-135+bob, windowWidth/2+sway, windowHeight/2-30+bob);
  line(windowWidth/2+sway, windowHeight/2-120+bob, windowWidth/2-30+sway, windowHeight/2-40+bob);
  line(windowWidth/2+sway, windowHeight/2-120+bob, windowWidth/2+30+sway, windowHeight/2-40+bob);
  line(windowWidth/2+sway, windowHeight/2+bob, windowWidth/2-30+sway, windowHeight/2+50+bob);
  line(windowWidth/2+sway, windowHeight/2+bob, windowWidth/2+30+sway, windowHeight/2+50+bob);
}
/*
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
  */