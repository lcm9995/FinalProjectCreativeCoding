// to do
//fix html file/figure out problem and libraries
// add gravity motion qualities
// make frog into class
// add frog animation from external source and use p5 play library
// make stage
// add more user input, reintegrate mic and maybe karoake
// add spin and other tricks for frog to do
// also maybe add more music visualization
//make lights on stage move to music

let song1; 
let song2;
let song3;
let mic;

//let baby;

let danceTime = false;
let danceTime2=false;
let danceTime3=false;

let jumping = false;
let ascent = false;
let descent = false;

let karoakeMode = false;

let song1time=0;
let song2time=0;
let song3time=0;

var jumpY = 0;

let baby;

//let sway;
//let bob;

function preload() {
  song1 = loadSound('Travis_Scott_SICKO_MODE.mp3');
  song2 = loadSound('Black_Eyed_Peas_Boom_Boom_Pow.mp3');
  song3 = loadSound('Charli_XCX_Vroom_Vroom.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(250);
  //baby = new Dancer();
  amplitude = new p5.Amplitude();
//  mic = new p5.AudioIn();
  //if(karoakeMode==true){
    //mic.start();
  //baby = new Sprite();
  /*baby.draw = () => {
    
  }*/
}

function draw() {
  //background(250);
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
  //let micVol = mic.getLevel();
  //let totalAmp = currentAmp+micVol*2;
  if(danceTime==true){
    //if(karoakeMode==true){
    //if(micVol>=0.09){
    //  dancer(-1*map(totalAmp, .008, 1, 0, 150), 0);
      //song1time+=1;
  //  }
    if(karoakeMode==false){
      dancer(-1*map(currentAmp, 0, 1, 0, 200), 0);
    }
    
    //}
    //else{
      //dancer(map(currentAmp, 0, 0.5, -50, 20), 0);
    //}
  }
  if(danceTime2==true){
    dancer(-1*map(totalAmp, 0, 0.5, 0, 150), map(totalAmp, 0, 0.5, -50, 50));
    song2time+=1;
  }
  if(danceTime3==true){
    //dancer(0, map(currentAmp, 0, 0.5, -100, 100));
     dancer(-1*map(totalAmp, 0, 0.5, 0, 150), 0);
    song3time+=1;
  }
  if(jumping==true){
    danceTime=false;
    danceTime2=false;
    danceTime3=false;
    if(ascent==true){
      jumpY+=1;
      if(jumpY*map(currentAmp, 0, 1, 12, 30)>250){
        ascent=false;
        descent=true;
      }
    }
    if(descent==true){
      jumpY-=1;
      if(jumpY==0){
        descent=false;
        jumping=false;
        danceTime=true;3
        if(song1.isPlaying()){
         danceTime=true;
        }
        if(song2.isPlaying()){
          danceTime2=true;
       }
        if(song3.isPlaying()){
          danceTime3=true
       }
      }
    }
    dancerJump(jumpY*map(currentAmp, 0, 1, 10, 20));
    text(jumpY, 100, 200);
  }
  
  text(currentAmp, windowWidth/6, windowHeight/2);
  //text(micVol, windowWidth/6, windowHeight/2+40);
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
      song1.jump(30);
      danceTime=true;
      //mic.start();
      
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

function keyPressed(){
  if(keyCode===UP_ARROW){
    jumping=true;
    ascent=true;
    //dancerJump();
  }
}

function dancerJump(i){
    background(255);
    noStroke();
    fill(138, 240, 82); //frog green
    ellipse(windowWidth/2, windowHeight/2-100-i, 100, 80); // face
    circle(windowWidth/2-25, windowHeight/2-135-i, 30); //eye socet left
    circle(windowWidth/2+25, windowHeight/2-135-i, 30); //eye socket right
    circle(windowWidth/2, windowHeight/2-15-i, 80); // body
    circle(windowWidth/2, windowHeight/2-40-i, 40); //middle abdomen
    circle(windowWidth/2, windowHeight/2-50-i, 30); //chest circle
    stroke(138, 240, 82);
    strokeWeight(10);
    line(windowWidth/2, windowHeight/2-80-i, windowWidth/2, windowHeight/2-20-i); // neck
  //ellipse(windowWidth/2, windowHeight/2-100+bob*.5, 20, 50+bob*.5);
    stroke(138, 240, 82);
    strokeWeight(3);
    strokeCap(ROUND);
  //fill(100, 240, 50);
    if(i>=100){
      triangle(windowWidth/2, windowHeight/2-i, windowWidth/2-50, windowHeight/2-90-i+100, windowWidth/2-20, windowHeight/2+15-i);//hind leg thighs left
      triangle(windowWidth/2, windowHeight/2-i, windowWidth/2+50, windowHeight/2-90-i+100, windowWidth/2+20, windowHeight/2+15-i); // hind leg thighs right
      strokeWeight(8);
      stroke(100, 240, 50);
      line(windowWidth/2-50, windowHeight/2-95-i+100, windowWidth/2-30, windowHeight/2+15-i+100);// hind leg shins left
      line(windowWidth/2+50, windowHeight/2-95-i+100, windowWidth/2+30, windowHeight/2+15-i+100);// hind leg shins right
  
      line(windowWidth/2-10, windowHeight/2-60-i, windowWidth/2-13, windowHeight/2+20-i+40); // front leg left
      line(windowWidth/2+10, windowHeight/2-60-i, windowWidth/2+13, windowHeight/2+20-i+40); // front leg right
      
      triangle(windowWidth/2-33, windowHeight/2+15-i+100, windowWidth/2-40, windowHeight/2+20-i+100, windowWidth/2-43, windowHeight/2+17-i+100);// left foot
      triangle(windowWidth/2+33, windowHeight/2+15-i+100, windowWidth/2+40, windowHeight/2+20-i+100, windowWidth/2+43, windowHeight/2+17-i+100); // right foot
    }
    else {
      triangle(windowWidth/2, windowHeight/2-i, windowWidth/2-50, windowHeight/2-90, windowWidth/2-20, windowHeight/2+15-i);//hind leg thighs left
      triangle(windowWidth/2, windowHeight/2-i, windowWidth/2+50, windowHeight/2-90, windowWidth/2+20, windowHeight/2+15-i); // hind leg thighs right
      strokeWeight(8);
      stroke(100, 240, 50);
      line(windowWidth/2-50, windowHeight/2-95, windowWidth/2-30, windowHeight/2+15);// hind leg shins left
      line(windowWidth/2+50, windowHeight/2-95, windowWidth/2+30, windowHeight/2+15);// hind leg shins right
  
      line(windowWidth/2-10, windowHeight/2-60-i, windowWidth/2-13, windowHeight/2+20); // front leg left
      line(windowWidth/2+10, windowHeight/2-60-i, windowWidth/2+13, windowHeight/2+20); // front leg right
      
      triangle(windowWidth/2-33, windowHeight/2+15, windowWidth/2-40, windowHeight/2+20, windowWidth/2-43, windowHeight/2+17);// left foot
      triangle(windowWidth/2+33, windowHeight/2+15, windowWidth/2+40, windowHeight/2+20, windowWidth/2+43, windowHeight/2+17); // right foot
    }

    noStroke();
    fill(255);
    ellipse(windowWidth/2+25, windowHeight/2-132-i, 22, 30); // eyeball right
    ellipse(windowWidth/2-25, windowHeight/2-132-i, 22, 30); //eyeball left
    fill(0);
    ellipse(windowWidth/2+25, windowHeight/2-132-i, 10, 20); //pupil right
    ellipse(windowWidth/2-25, windowHeight/2-132-i, 10, 20); //pupil left
  
    fill(250, 157, 221, 100);
    circle(windowWidth/2+30, windowHeight/2-110-i, 20);
    circle(windowWidth/2-30, windowHeight/2-110-i, 20);
  
  /*  fill(0);
    stroke(0);
    strokeWeight(10);
    arc(windowWidth/2, windowHeight/2-130, 100, 100, PI/2, 2*PI/2);
    strokeWeight(1);*/
}

function dancer(bob, sway){
  /*fill(0);
  circle(windowWidth/2+sway, windowHeight/2-150+bob*2, 70);
  line(windowWidth/2+sway, windowHeight/2-80+bob, windowWidth/2+sway, windowHeight/2-30+bob);
  line(windowWidth/2+sway, windowHeight/2-50+bob, windowWidth/2-30+sway, windowHeight/2-40+bob);
  line(windowWidth/2+sway, windowHeight/2-50+bob, windowWidth/2+30+sway, windowHeight/2-40+bob);
  line(windowWidth/2+sway, windowHeight/2+20+bob, windowWidth/2-30+sway, windowHeight/2+50+bob);
  line(windowWidth/2+sway, windowHeight/2+20+bob, windowWidth/2+30+sway, windowHeight/2+50+bob);
  */
  background(250);
  noStroke();
  fill(138, 240, 82); //frog green
  ellipse(windowWidth/2, windowHeight/2-100+bob*2, 100, 80); // face
  circle(windowWidth/2-25, windowHeight/2-135+bob*2, 30); //eye socet left
  circle(windowWidth/2+25, windowHeight/2-135+bob*2, 30); //eye socket right
  circle(windowWidth/2, windowHeight/2-15+bob, 80); // body
  circle(windowWidth/2, windowHeight/2-40+bob*1.2, 40);
  circle(windowWidth/2, windowHeight/2-50+bob*1.5, 30);
  stroke(138, 240, 82);
  strokeWeight(10);
  line(windowWidth/2, windowHeight/2-80+bob*1.6, windowWidth/2, windowHeight/2-20+bob*2.2); // neck
  //ellipse(windowWidth/2, windowHeight/2-100+bob*.5, 20, 50+bob*.5);
  stroke(138, 240, 82);
  strokeWeight(3);
  strokeCap(ROUND);
  //fill(100, 240, 50);
  triangle(windowWidth/2, windowHeight/2+bob, windowWidth/2-50, windowHeight/2-90, windowWidth/2-20, windowHeight/2+15+bob*2);//hind leg thighs left
  triangle(windowWidth/2, windowHeight/2+bob, windowWidth/2+50, windowHeight/2-90, windowWidth/2+20, windowHeight/2+15+bob*2); // hind leg thighs right
  strokeWeight(8);
  stroke(100, 240, 50);
  line(windowWidth/2-50, windowHeight/2-95, windowWidth/2-30, windowHeight/2+15);// hind leg shins left
  line(windowWidth/2+50, windowHeight/2-95, windowWidth/2+30, windowHeight/2+15);// hind leg shins right
  
  line(windowWidth/2-10, windowHeight/2-60+bob, windowWidth/2-13, windowHeight/2+20); // front leg left
  line(windowWidth/2+10, windowHeight/2-60+bob, windowWidth/2+13, windowHeight/2+20); // front leg right
  
  triangle(windowWidth/2-33, windowHeight/2+15, windowWidth/2-40, windowHeight/2+20, windowWidth/2-43, windowHeight/2+17);// left foot
  triangle(windowWidth/2+33, windowHeight/2+15, windowWidth/2+40, windowHeight/2+20, windowWidth/2+43, windowHeight/2+17); // right foot
  //triangle
  
  //line(windowWidth/2, windowHeight/2+15+bob*.5, windowWidth/2-60, windowHeight/2-70);
  //line(windowWidth/2, windowHeight/2+15+bob*.5, windowWidth/2+60, windowHeight/2-70);
  
  //ellipse(windowWidth/2, windowHeight/2+10, 100, 150);
  noStroke();
  fill(255);
  ellipse(windowWidth/2+25, windowHeight/2-132+bob*2.1, 22, 30);
  ellipse(windowWidth/2-25, windowHeight/2-132+bob*2.1, 22, 30);
  fill(0);
  ellipse(windowWidth/2+25, windowHeight/2-132+bob*2.1, 10, 20);
  ellipse(windowWidth/2-25, windowHeight/2-132+bob*2.1, 10, 20);
  
  fill(250, 157, 221, 100);
  circle(windowWidth/2+30, windowHeight/2-110+bob*2.1, 20);
  circle(windowWidth/2-30, windowHeight/2-110+bob*2.1, 20);
  
  fill(0);
  stroke(0);
  strokeWeight(10);
  arc(windowWidth/2, windowHeight/2-130, 100, 100, PI/2, 2*PI/2, OPEN);
  strokeWeight(1);
}
