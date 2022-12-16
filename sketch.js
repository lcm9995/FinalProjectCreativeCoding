
// to do
// add frog animation from external source and use p5 play library
// make stage
// add more user input, reintegrate mic and maybe karoake
// add spin and other tricks for frog to do
// also maybe add more music visualization
//make lights on stage move to music
//crowd cheering
//pirouette
//add tongue
// figure out html file and libraries
//make eyes bulge
//dancing lights
//add instructions

let myDancer; 
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

/*let song1time=0;
let song2time=0;
let song3time=0;
let cheering=0;*/

var jumpY = 0;

let baby;

let leftlight;
let rightlight;
let midleftlight;
let midrightlight;
//let sway;
//let bob;

function preload() {
	song1 = loadSound('Travis_Scott_SICKO_MODE.mp3');
	song2 = loadSound('Nicki_Minaj_Pound_The_Alarm_Explicit_.mp3');
	song3 = loadSound('Charli_XCX_Vroom_Vroom.mp3');
	
	cheering = loadSound('Applauding-and-cheering.mp3');
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//background(250);
	//baby = new Dancer();
	amplitude = new p5.Amplitude();
	mic = new p5.AudioIn();
	if(karoakeMode==true){
		mic.start();
	//baby = new Sprite();
	/*baby.draw = () => {
		
	}*/
}
	myDancer = new Dancer(windowWidth/2, windowHeight/2+200);
	
	leftlight = new Lights(windowWidth*0.88-30, 30, windowWidth*0.88+25, 35, windowWidth-windowWidth/4-35, windowHeight/2+200, windowWidth/4+300, windowHeight/2+200, true);
	rightlight = new Lights(windowWidth*0.75-30, 30, windowWidth*0.75+25, 35, windowWidth-windowWidth/4, windowHeight/2+200, windowWidth/4+100, windowHeight/2+200, false);
	midleftlight = new Lights(windowWidth/4-20, 35, windowWidth/4+30, 30, windowWidth/2+300, windowHeight/2+200, windowWidth/2-windowWidth/4, windowHeight/2+200,true);
	midrightlight = new Lights(windowWidth/8-35, 35, windowWidth/8+30, 30, windowWidth/2+50, windowHeight/2+200, windowWidth/2-windowWidth/4, windowHeight/2+200, false);
}

function draw() {
	//background(250);
	//myDancer.display();
	backdrop();
	smooth();
	let currentAmp = amplitude.getLevel();
	//let micVol = mic.getLevel();
	//let totalAmp = currentAmp+micVol*2;
	if(danceTime==true){
		//if(karoakeMode==true){
		//if(micVol>=0.09){
		//	dancer(-1*map(totalAmp, .008, 1, 0, 150), 0);
			//song1time+=1;
	//	}
		if(karoakeMode==false){
			//dancer(-1*map(currentAmp, 0, 0.5, -50, 150)+110, 0);
			bounce(-1*map(currentAmp, 0, 0.5, -50, 150)+110);
		}
		
		//}
		//else{
			//dancer(map(currentAmp, 0, 0.5, -50, 20), 0);
		//}
	}
	if(danceTime2==true){
		if(karoakeMode==false){
			bounce(1*map(currentAmp, .2, .5, -50, 200)+110);
		}
		//dancer(-1*map(currentAmp, 0, 0.5, 0, 150), map(totalAmp, 0, 0.5, -50, 50));
		//song2time+=1;
	}
	if(danceTime3==true){
		if(karoakeMode==false){
			bounce(1*map(currentAmp, 0, 0.3, 50, 200)+110);
		}
		//dancer(0, map(currentAmp, 0, 0.5, -100, 100));
	//	 dancer(-1*map(currentAmp, 0, 0.5, 0, 150), 0);
		//song3time+=1;
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
				danceTime=true;
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
	if((mouseY>=15)&&(mouseY<=85)){
		if(song1.isPlaying()){
			song1.stop();
			danceTime=false;
		}
		if(song2.isPlaying()){
			song2.stop();
			danceTime=false;
		}
		if(song3.isPlaying()){
			song3.stop();
			danceTime=false;
		}
		if((mouseX>=windowWidth/4-60) && (mouseX<=windowWidth/4+60)){
			song1.play();
			song1.jump(30);
			danceTime=true;
			//mic.start();
			
		}
		else if((mouseX>= windowWidth/2-60) && (mouseX<=windowWidth/2+60)){
			song2.play();
			danceTime=true;
		}
		else if((mouseX>= windowWidth*0.75-60) && (mouseX<=windowWidth*0.75+60)){
			song3.play();
			danceTime=true;
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

function backdrop(){
	//background
	fill(0);
	noStroke();
	rectMode(CORNER);
	rect(0, 150, windowWidth, windowHeight);
	fill(250);
	rect(0, 0, windowWidth, 150);
	
	fill(210, 100);
	//rect(0, 150, windowWidth, windowHeight);
	//ellipse(windowWidth/2, windowHeight/2+200, windowWidth/2);
	fill(250);
	
	//lights
	leftlight.fill(250, 10, 180, 80);
	leftlight.move(10);
	rightlight.fill(150, 30, 200, 100);
	rightlight.move(10);
	midleftlight.fill(50, 250, 250, 100);	
	midleftlight.move(10);
	midrightlight.fill(50, 250, 250, 100);
	midrightlight.move(10);
	
	//song buttons
	rectMode(CENTER);
	stroke(0);
	strokeWeight(2);
	fill(176, 6, 255);
	rect(windowWidth/4, 50, 120, 70);
	rect(windowWidth/2, 50, 120, 70);
	rect(windowWidth*0.75, 50, 120, 70);
	
	stroke(0);
	fill(0);
	textAlign(CENTER);
	text("SICKO MODE", windowWidth/4, 50);
	text("BOOM BOOM POW", windowWidth/2, 50);
	text("VROOM VROOM", windowWidth*0.75, 50);
}

function dancerJump(i){
		//background(255);
		backdrop();
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
			triangle(windowWidth/2, windowHeight/2-i, windowWidth/2-50, windowHeight/2+10, windowWidth/2-20, windowHeight/2+15-i);//hind leg thighs left
			triangle(windowWidth/2, windowHeight/2-i, windowWidth/2+50, windowHeight/2+10, windowWidth/2+20, windowHeight/2+15-i); // hind leg thighs right
			strokeWeight(8);
			stroke(100, 240, 50);
			line(windowWidth/2-50, windowHeight/2-95, windowWidth/2-30, windowHeight/2+115);// hind leg shins left
			line(windowWidth/2+50, windowHeight/2-95, windowWidth/2+30, windowHeight/2+115);// hind leg shins right
	
			line(windowWidth/2-10, windowHeight/2-60-i, windowWidth/2-13, windowHeight/2+120); // front leg left
			line(windowWidth/2+10, windowHeight/2-60-i, windowWidth/2+13, windowHeight/2+120); // front leg right
			
			triangle(windowWidth/2-33, windowHeight/2+115, windowWidth/2-40, windowHeight/2+120, windowWidth/2-43, windowHeight/2+117);// left foot
			triangle(windowWidth/2+33, windowHeight/2+115, windowWidth/2+40, windowHeight/2+120, windowWidth/2+43, windowHeight/2+117); // right foot
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
	
	/*	fill(0);
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
	//background(250);
	stage();
	noStroke();
	fill(138, 240, 82); //frog green
	ellipse(windowWidth/2, windowHeight/2-100+bob*2, 100, 80); // face
	circle(windowWidth/2-25, windowHeight/2-135+bob*2, 30); //eye socet left
	circle(windowWidth/2+25, windowHeight/2-135+bob*2, 30); //eye socket right
	circle(windowWidth/2, windowHeight/2+55+bob, 80); // body
	circle(windowWidth/2, windowHeight/2+5+bob*1.2, 40);
	circle(windowWidth/2, windowHeight/2+bob*1.5, 30);
	stroke(138, 240, 82);
	strokeWeight(10);
	line(windowWidth/2, windowHeight/2-80+bob*1.6, windowWidth/2, windowHeight/2-20+bob*2.2); // neck
	//ellipse(windowWidth/2, windowHeight/2-100+bob*.5, 20, 50+bob*.5);
	stroke(138, 240, 82);
	strokeWeight(3);
	strokeCap(ROUND);
	//fill(100, 240, 50);
	triangle(windowWidth/2, windowHeight/2+bob, windowWidth/2-50, windowHeight/2+110, windowWidth/2-20, windowHeight/2+15+bob*2);//hind leg thighs left
	triangle(windowWidth/2, windowHeight/2+bob, windowWidth/2+50, windowHeight/2+110, windowWidth/2+20, windowHeight/2+15+bob*2); // hind leg thighs right
	strokeWeight(8);
	stroke(100, 240, 50);
	line(windowWidth/2-50, windowHeight/2+105, windowWidth/2-30, windowHeight/2+215);// hind leg shins left
	line(windowWidth/2+50, windowHeight/2+105, windowWidth/2+30, windowHeight/2+215);// hind leg shins right
	
	line(windowWidth/2-10, windowHeight/2+20+bob, windowWidth/2-13, windowHeight/2+220); // front leg left
	line(windowWidth/2+10, windowHeight/2+20+bob, windowWidth/2+13, windowHeight/2+220); // front leg right
	
	triangle(windowWidth/2-33, windowHeight/2+215, windowWidth/2-40, windowHeight/2+220, windowWidth/2-43, windowHeight/2+217);// left foot
	triangle(windowWidth/2+33, windowHeight/2+215, windowWidth/2+40, windowHeight/2+220, windowWidth/2+43, windowHeight/2+217); // right foot
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
	
	fill(10);
	ellipse(windowWidth/2-5, windowHeight/2-110+bob*2, 2, 5);
	ellipse(windowWidth/2+5, windowHeight/2-110+bob*2, 2, 5);
	
	fill(240, 140, 190);
	noStroke();
	circle(windowWidth/2-2, windowHeight/2-85+bob*2, 6);
	circle(windowWidth/2+2, windowHeight/2-85+bob*2, 6);
	circle(windowWidth/2-2, windowHeight/2-90+bob*2, 4);
	circle(windowWidth/2+2, windowHeight/2-90+bob*2, 4);
	
	//ellipse(windowWidth/2, windowHeight/2-85+bob*2, 20, 5);
	//ellipse(windowWidth/2, windowHeight/2-92+bob*2, 15, 5);
}


function lights(){
	circle(windowWidth/8, 180, 60);
	circle(windowWidth*0.88, 180, 60);
	circle(windowWidth/4, 180, 60);
	circle(windowWidth*0.75, 180, 60);
	
	fill(240, 140);
	noStroke();
	quad(windowWidth/4+300, windowHeight/2+200, windowWidth*0.88-30, 30, windowWidth*0.88+25, 35, windowWidth-windowWidth/4-35, windowHeight/2+250);//rightmost stagelight
	quad(windowWidth/4+100, windowHeight/2+200, windowWidth*0.75-30, 30, windowWidth*0.75+25, 35, windowWidth-windowWidth/4, windowHeight/2+200); //right center staglight
	quad(windowWidth/2+300, windowHeight/2+200, windowWidth/4+30, 30, windowWidth/4-20, 35, windowWidth/2-windowWidth/4, windowHeight/2+200);//left cetner stagelight
	quad(windowWidth/2+50, windowHeight/2+200, windowWidth/8+30, 30, windowWidth/8-35, 35, windowWidth/2-windowWidth/4, windowHeight/2+200);//leftmost stagelight
}
function bounce(bob){
	backdrop();
	myDancer.body(bob*1.5);
	myDancer.legs(bob);
	myDancer.feet(0);
	myDancer.head(bob*2);
}

class Dancer {
	constructor(x,y){
		//this.bob= bob;
		//this.i = i;
		this.x=x;
		this.y=y;
	}
	/*display(){
		stage();
		face(0);
		body(0);
		legs(0);
		feet(0);
	}*/
	/*bounce(bob){
		this.bob=bob;
		stage();
		//head(this.bob*2);
		body(this.bob*1.5);
		legs(this.bob);
		feet(0);
	}*/
	
	/*jump(){

	}*/
	
	head(w){
		this.w=w;
		//noStroke();
		stroke(118, 200, 72);
		strokeWeight(1);
		fill(138, 240, 82);
		ellipse(this.x, this.y-230+this.w, 100, 80); //head
		noStroke();
		circle(this.x-25, this.y-265+this.w, 30); //eyesocket left
		circle(this.x+25, this.y-265+this.w, 30); //eye socket right
		
		noStroke();
		fill(255);
		ellipse(this.x+25, this.y-262+this.w, 22, 30); //eyeball right
		ellipse(this.x-25, this.y-262+this.w, 22, 30); //eyeball left
		
		fill(0);
		ellipse(this.x+25, this.y-262+this.w, 10, 20); //pupil right
		ellipse(this.x-25, this.y-262+this.w, 10, 20); //pupil left
	
		fill(250, 157, 221, 100);
		circle(this.x+30, this.y-240+this.w, 20); //cheek right
		circle(this.x-30, this.y-240+this.w, 20);// left cheek
	
		fill(10);
		ellipse(this.x-5, this.y-240+this.w, 2, 5); //nose
		ellipse(this.x+5, this.y-240+this.w, 2, 5); //nose
	
		fill(240, 140, 190);
		noStroke();
		circle(this.x-2, this.y-215+this.w, 6); //bottom lip
		circle(this.x+2, this.y-215+this.w, 6); //bottom lip
		circle(this.x-2, this.y-220+this.w, 4); //top lip
		circle(this.x+2, this.y-220+this.w, 4); //top lip
		
		stroke(138, 240, 82);
		strokeWeight(10);
		line(this.x, this.y-190+this.w, this.x, this.y-170+this.w); // neck
	}
	
	body(e){
		this.e=e;
		noStroke();
		fill(138, 240, 82);
		circle(this.x, this.y-110+this.e, 80); // body
		circle(this.x, this.y-130+this.e, 40);
		circle(this.x, this.y-150+this.e, 30);
		
		stroke(118, 200, 72);
		strokeWeight(10);
		line(this.x-10, this.y-100+this.e, this.x-13, this.y+20); // front leg left
		line(this.x+10, this.y-100+this.e, this.x+13, this.y+20); // front leg right
	}
	legs(r){
			this.r=r;
			fill(138, 240, 82);
			stroke(138, 240, 82);
			strokeWeight(3);
			strokeCap(ROUND);
			triangle(this.x, this.y-130+this.r, this.x-50, this.y-105, this.x-20, this.y-120+this.r*2);//hind leg thighs left
			triangle(this.x, this.y-130+this.r, this.x+50, this.y-105, this.x+20, this.y-120+this.r*2); // hind leg thighs right
			
		}
	feet(t){
		this.t=t;
		fill(138, 240, 82);
		strokeWeight(8);
		//stroke(100, 240, 50);
		stroke(118, 200, 72);
		fill(118, 200, 72);
		line(this.x-50, this.y-105, this.x-30,this.y+15);// hind leg shins left
		line(this.x+50, this.y-105, this.x+30, this.y+15);// hind leg shins right
		triangle(this.x-33, this.y+15, this.x-40, this.y+20, this.x-43,this.y+17);// left foot
		triangle(this.x+33, this.y+15, this.x+40, this.y+20, this.x+43, this.y+17); // right foot
	}
	
	/*bounce(bob){
		this.bob=bob;
		face(bob*2);
		body(bob*1.5);
		limbs(bob*1.7);
	}
	jump(i){
		this.i=i;
		stage();
		noStroke();
		fill(138, 240, 82);
		stage();
		noStroke();
		fill(138, 240, 82);
		ellipse(this.x, this.y-200+this.bob*2, 100, 80);
		circle(this.x-25, this.y-235+this.bob*2, 30);
		circle(this.x+25, this.y-235+this.bob*2, 30); //eye socket right
		circle(this.x, this.y-40+this.bob, 80); // body
		circle(this.x, this.y-80+this.bob*1.2, 40);
		circle(this.x, this.y-90+this.bob*1.5, 30);
		
		stroke(138, 240, 82);
		strokeWeight(10);
		line(this.x, this.y-130+this.bob*1.6, this.x, this.y-120+this.bob*2.2); // neck
		strokeWeight(3);
		strokeCap(ROUND);
		triangle(this.x, this.y-100+this.bob, this.x-50, this.y-90, this.x-20, this.y-90+this.bob*2);//hind leg thighs left
		triangle(this.x, this.y-100+this.bob, this.x+50, this.y-90, this.x+20, this.y-90+this.bob*2); // hind leg thighs right
		
		strokeWeight(8);
		stroke(100, 240, 50);
		line(this.x-50, this.y-95, this.x-30,this.y+15);// hind leg shins left
		line(this.x+50, this.y-95, this.x+30, this.y+15);// hind leg shins right
		line(this.x-10, this.y-60+this.bob, this.x-13, this.y+20); // front leg left
		line(this.x+10, this.y-60+this.bob, this.x+13, this.y+20); // front leg right
	
		triangle(this.x-33, this.y+15, this.x-40, this.y+20, this.x-43,this.y+17);// left foot
		triangle(this.x+33, this.y+15, this.x+40, this.y+20, this.x+43, this.y+17); // right foot
		
		noStroke();
		fill(255);
		ellipse(this.x+25, this.y-232+this.bob*2.1, 22, 30);
		ellipse(this.x-25, this.y-232+this.bob*2.1, 22, 30);
		fill(0);
		ellipse(this.x+25, this.y-232+this.bob*2.1, 10, 20);
		ellipse(this.x-25, this.y-232+this.bob*2.1, 10, 20);
	
		fill(250, 157, 221, 100);
		circle(this.x+30, this.y-210+this.bob*2.1, 20);
		circle(this.x-30, this.y-210+this.bob*2.1, 20);
	
		fill(0);
		stroke(0);
		strokeWeight(10);
		arc(this.x, this.y-230, 100, 100, PI/2, 2*PI/2, OPEN);
		strokeWeight(1);
	
		fill(10);
		ellipse(this.x-5, this.y-210+this.bob*2, 2, 5);
		ellipse(this.x+5, this.y-210+this.bob*2, 2, 5);
	
		fill(240, 140, 190);
		noStroke();
		circle(this.x-2, this.y-185+this.bob*2, 6);
		circle(this.x+2, this.y-185+this.bob*2, 6);
		circle(this.x-2, this.y-190+this.bob*2, 4);
		circle(this.x+2, this.y-190+this.bob*2, 4);
	}
	
	turn(){
	}*/
}

class Lights {
	constructor(x1, y1, x2, y2, x3, y3, x4, y4, left){
		this.x1=x1;
		this.y1=y1;
		this.x2=x2;
		this.y2=y2;
		this.x3=x3;
		this.y3=y3;
		this.x4=x4;
		this.y4=y4;
		this.left=left;
		this.width=this.x3-this.x4;
	}
	fill(r, g, b, a){
		this.r=r;
		this.g=g;
		this.b=b;
		this.a=a;
		fill(this.r, this.g, this.b, this.a);
		noStroke();
	}
	move(speed){
		this.speed=speed;
		//this.left=left;
		if(this.x3+this.speed>=windowWidth){
			this.left=true;
		}
		if(this.x4+this.speed<=0){
			this.left=false;
		}
		if(this.left==true){
			this.x3=this.x3-this.speed;
			this.x4=this.x4-this.speed;	
			ellipseMode(CENTER);
			//ellipse((this.x3+this.x4)/2, this.y3, (this.x4+this.speed)-(this.y3+this.speed), 60);
		}
		if(this.left==false){
			this.x3=this.x3+this.speed;
			this.x4=this.x4+this.speed;
			ellipseMode(CENTER);
			//ellipse((this.x3+this.x4)/2, this.y3, (this.x3-this.speed)-(this.x4-this.speed) , 60);
			
			//this.speed+speed;
		}
	//	this.x3=this.x3+this.speed;
		//this.x4=this.x4+this.speed;
		//fill(250, 210, 50, 100);
		//noStroke();
		//this.color=color;
		circle((this.x1+this.x2)/2, this.y1, 60);
		quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
		ellipse((this.x3+this.x4)/2, this.y3, this.width, 60);
		}
	
}


