
// to do
// make stage
// add more user input, reintegrate mic and maybe karoake
// add spin and other tricks for frog to do
// also maybe add more music visualization
//crowd cheering - button
//pirouette - button 
//add tongue - button 
// figure out html file and libraries
//make eyes bulge 
//add instructions
//add when song ends

let myDancer; //frog
let song1; //song 1 sound
let song2;// song 2 sound
let song3;//song 3 sound

let danceTime = false; //tells the frog to dance or not
let danceTime2=false;
let danceTime3=false;

let jumping = false; //tells frog to jump
let ascent = false; //true while frog is jumping on the way up
let descent = false; //true while frog is jumping on the way down

var jumpY = 0;

let baby;

let leftlight; //leftmost stage light
let rightlight; //right stage light
let midleftlight; //middle left stage light
let midrightlight; //middle right stage light

var topbar = true; //when true, menu of song choices displays at top
var songbutton1=false; //true button of that song has been clicked before play is clicked
var songbutton2=false;
var songbutton3 = false;
var m=0;//curtain speed

var reds=[250, 150, 50, 9, 0, 249, 255];
var greens=[10, 30, 250, 250, 250, 47, 238];
var blues=[180, 200, 250, 81, 244, 255, 46];
let astroworld;
let xcx;

var scaledAmp;

function preload() {
	song1 = loadSound('Travis_Scott_SICKO_MODE.mp3');
	song2 = loadSound('Nicki_Minaj_Pound_The_Alarm_Explicit_.mp3');
	song3 = loadSound('Charli_XCX_Vroom_Vroom.mp3');
	//cheering = loadSound('Applauding-and-cheering.mp3');
	astroworld= loadImage('Astroworld-Logo.png');
	xcx = loadImage('asset_1.png');
	curtainimg = loadImage('istockphoto-172517528-170667a.jpg');
}//preload

function setup() {
	createCanvas(windowWidth, windowHeight);
	amplitude = new p5.Amplitude();
	myDancer = new Dancer(windowWidth/2, windowHeight/2+200);
	
	leftlight = new Lights(windowWidth*0.88-30, 30, windowWidth*0.88+25, 35, windowWidth-windowWidth/4-35, windowHeight/2+220, windowWidth/4+300, windowHeight/2+220, true);
	rightlight = new Lights(windowWidth*0.75-30, 30, windowWidth*0.75+25, 35, windowWidth-windowWidth/4, windowHeight/2+220, windowWidth/4+100, windowHeight/2+220, false);
	midleftlight = new Lights(windowWidth/4-20, 35, windowWidth/4+30, 30, windowWidth/2+300, windowHeight/2+220, windowWidth/2-windowWidth/4, windowHeight/2+220,true);
	midrightlight = new Lights(windowWidth/8-35, 35, windowWidth/8+30, 30, windowWidth/2+50, windowHeight/2+220, windowWidth/2-windowWidth/4, windowHeight/2+220, false);
	
	topbar=true;
}//setup
var currentAmp;
var songlength;
var songtime;
function draw() {
	//background(250);
	//myDancer.display();
	//backdrop();
	smooth(); 
	currentAmp = amplitude.getLevel();
	//songtime = currentTime();
//	songlength = duration();
	if(song1.isPlaying()){
		scaledAmp=map(currentAmp, 0.1, 0.5, 0, 1);
	}
	if(song2.isPlaying()){
		scaledAmp=map(currentAmp, 0, 0.35, 0, 1);
	}
	if(song3.isPlaying()){
		scaledAmp=map(currentAmp, 0.01, 0.4, 0, 1);
	}
	if(topbar==true){
		menu();
	}
	if(topbar==false){
		backdrop();
		//curtain();
	}
	if(danceTime==true){
			bounce(-1*map(scaledAmp, 0, 1, -50, 150)+110);
		}//ifdance
	
	if(danceTime2==true){
			bounce(-1*map(scaledAmp, 0, 1, 50, 200)+110);
	}//ifdance2
	
	if(danceTime3==true){
			//bounce(1*map(currentAmp, 0, 0.3, 50, 200)+110);//vroom vroom
		bounce(-1*map(scaledAmp, 0, 1, 0, 200)+110);
	}//ifdancetime3

	if(jumping==true){
		danceTime=false;
		danceTime2=false;
		danceTime3=false;
		if(ascent==true){
			jumpY+=1;
			if(jumpY*map(scaledAmp, 0, 1, 12, 30)>250){
				ascent=false;
				descent=true;
			}//ifjumpY*map
		}//ifascent
		if(descent==true){
			jumpY-=1;
			if(jumpY==0){
				descent=false;
				jumping=false;
				danceTime=true;
				if(song1.isPlaying()){
				 danceTime=true;
				}//ifsong1
				if(song2.isPlaying()){
			 		danceTime2=true;
			 }//ifsong2
				if(song3.isPlaying()){
			 		danceTime3=true
			 }//ifsong3
			}//ifjumpY==0
		}//ifdescent
		dancerJump(jumpY*map(scaledAmp, 0, 1, 10, 20));
		text(jumpY, 100, 200);
	}//ifjumping
	if((m<=windowHeight)&&(topbar==false)){
		curtain();
	}
	text(currentAmp, windowWidth/6, windowHeight/2);
	if((song1.isPlaying()==false)&&(song2.isPlaying()==false)&&(song3.isPlaying()==false)&&(topbar==false)){
		danceTime=false;
		danceTime2=false;
		danceTime3=false;
		topbar=true;
	}
}//drawloop

function mousePressed() {
		if(topbar==true){ 
			if((mouseY>=15)&&(mouseY<=85)){	//if mouse at height of song button 
				if((mouseX>=windowWidth/4-60) && (mouseX<=windowWidth/4+60)){ // if mouse at first song button xpos
					songbutton1=true;
					song1.play();
					song1.jump(30);
					danceTime=true;
					topbar=false;
					songbutton1=false;
				}//ifmousex
				else if((mouseX>= windowWidth/2-60) && (mouseX<=windowWidth/2+60)){ //if mouse at second song button xpos
					songbutton2=true;
					song2.play();
					danceTime2=true;
					}//ifmousex
				else if((mouseX>= windowWidth*0.75-60) && (mouseX<=windowWidth*0.75+60)){ //if mouse at third song button xpos
					songbutton3=true;
					song3.play();
					song3.jump(70);
					danceTime3=true;
					}//ifmousex
			}//ifmouseY
	}//ifmenu
	
		if((mouseY<=windowHeight-70) && (mouseY>=windowHeight-130)){ //pause button is clicked
					if(song1.isPlaying()){
							song1.stop();
							danceTime=false;
							topbar = true;
						}//ifsong1
					if(song2.isPlaying()){
							song2.stop();
							danceTime2=false;
							topbar = true;
						}//ifsong2
					if(song3.isPlaying()){
							song3.stop();
							danceTime3=false;
							topbar = true;
						}//ifsong3
				}//if mouse x
				//}//ifmenufalse
			//}//ifmousex
		//}//ifmousey
			
}//mouseClicked

function keyPressed(){
	if(keyCode===UP_ARROW){
		jumping=true;
		ascent=true;
		}//if keycode up
}//keypressed function

function curtain(){
		if(topbar==true){
			m=0;
		}
		if(topbar==false){
			m=m+5;
	}
		noStroke();
		fill(132, 10, 1);
		imageMode(CENTER);
		image(curtainimg, windowWidth/2, windowHeight/2-m, windowWidth, windowHeight-m);
		//rect(0, 0-m, windowWidth, windowHeight-m);
}

function menu(){
	//topbar=true;
	/*fill(100);
	noStroke();
	rectMode(CORNER);
	rect(0, 150, windowWidth, windowHeight);
	fill(250);
	rect(0, 0, windowWidth, 150);*/
	curtain();
	fill(210);
	rectMode(CORNER);
	rect(0, 0, windowWidth, 150);
	fill(250);
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
		fill(176, 6, 255);
		circle(100, windowHeight-100, 60);
		fill(250);
		noStroke();
		triangle(90, windowHeight-115, 120, windowHeight-100, 90, windowHeight-85);
}
let i=0;
let p=1;

function backdrop(){
	//background
		if(song1.isPlaying()){
			scaledAmp=map(currentAmp, 0.1, 0.5, 0, 1);
		}
		if(song2.isPlaying()){
			scaledAmp=map(currentAmp, 0, 0.35, 0, 1);
		}
		if(song3.isPlaying()){
			scaledAmp=map(currentAmp, 0.01, 0.4, 0, 1);
		}
		if(m>=0.7){
			if(i==6){
				i=0;
			}
			else{
				i=i+1;
			}
			if(p==6){
				p=0;
			}
			else{
				p=p+1;
			}
		}
		topbar=false;
		background(0);
		//lights
		leftlight.fill(reds[i], blues[i], greens[i], 80);
		leftlight.move(map(scaledAmp, 0, 1, 0, 70));
		rightlight.fill(reds[p], blues[p], greens[p], 100);
		rightlight.move(map(scaledAmp, 0, 1, 0, 70));
		midleftlight.fill(reds[i], blues[i], greens[i], 100);	
		midleftlight.move(map(scaledAmp, 0, 1, 0, 60));
		midrightlight.fill(reds[p], blues[p], greens[p], 100);
		midrightlight.move(map(scaledAmp, 0, 1, 0, 60));
		fill(176, 6, 255);
		circle(100, windowHeight-100, 60);
		stroke(250);
		strokeWeight(10);
		line(90, windowHeight-120, 90, windowHeight-80);
		line(110, windowHeight-120, 110, windowHeight-80);
		if(song1.isPlaying()){
			imageMode(CENTER);
			image(astroworld, windowWidth/2, windowHeight-100, windowWidth/3*map(currentAmp, 0, 0.5, 1, 1.5), 200);
			//image(astroworld, random(100, windowWidth-100), random(100, windowHeight-200), windowWidth/4, 150);
		}
		if(song3.isPlaying()){
			imageMode(CENTER);
			image(xcx, windowWidth/2, 150, windowWidth/5*map(currentAmp, 0, 0.4, 1, 2), 150);
			tint(250);
		}
}//mouseclicked function
	
function bounce(bob){
	backdrop();
	myDancer.body(bob*1.5);
	myDancer.legs(bob);
	myDancer.feet(0);
	myDancer.head(bob*2);
}//bounce function

class Dancer {
	constructor(x,y){
		this.x=x;
		this.y=y;
	} //constructor
	head(w){
		this.w=w;
		stroke(118, 200, 72);
		strokeWeight(1);
		fill(138, 240, 82);
		ellipse(this.x, this.y-230+this.w, 100, 80); //head
		noStroke();
		circle(this.x-25, this.y-265+this.w, 30); //eyesocket left//*map(currentAmp, 0, 0.5, 0.9, 1.2)
		circle(this.x+25, this.y-265+this.w, 30); //eye socket right *map(currentAmp, 0, 0.5, 0.9, 1.2)
		
		noStroke();
		fill(255);
		ellipse(this.x+25, this.y-262+this.w, 22+map(scaledAmp, 0.1, 0.4, 0, 10), 30+map(scaledAmp, 0.25, 0.5, 0, 10)); //eyeball right
		ellipse(this.x-25, this.y-262+this.w, 22+map(scaledAmp, 0.1, 0.4, 0, 10), 30+map(scaledAmp, 0.25, 0.5, 0, 10)); //eyeball left
		
		fill(0);
		ellipse(this.x+25, this.y-262+this.w, 10+map(scaledAmp, 0.1, 0.4, 0, 10), 20 + map(scaledAmp, 0.3, 0.5, 0, 10)); //pupil right
		ellipse(this.x-25, this.y-262+this.w, 10+map(scaledAmp, 0.1, 0.4, 0, 10), 20+ map(scaledAmp, 0.3, 0.5, 0, 10)); //pupil left
	
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
	}//head
	
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
	}//body
	
	legs(r){
			this.r=r;
			fill(138, 240, 82);
			stroke(138, 240, 82);
			strokeWeight(3);
			strokeCap(ROUND);
			triangle(this.x, this.y-130+this.r, this.x-50, this.y-105, this.x-20, this.y-120+this.r*2);//hind leg thighs left
			triangle(this.x, this.y-130+this.r, this.x+50, this.y-105, this.x+20, this.y-120+this.r*2); // hind leg thighs right
		}//legs 
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
	}//feet
}//class dancer

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
	}//constructor
	fill(r, g, b, a){
		this.r=r;
		this.g=g;
		this.b=b;
		this.a=a;
	}//fill
	move(speed){
		this.speed=speed;
		//this.left=left;
		if(this.x3+this.speed>=windowWidth){
			this.left=true;
		}//if >= windowWidth
		if(this.x4+this.speed<=0){
			this.left=false;
		}// if <= 0
		if(this.left==true){
			this.x3=this.x3-this.speed;
			this.x4=this.x4-this.speed;	
			ellipseMode(CENTER);
			//ellipse((this.x3+this.x4)/2, this.y3, (this.x4+this.speed)-(this.y3+this.speed), 60);
		}//if left
		if(this.left==false){
			this.x3=this.x3+this.speed;
			this.x4=this.x4+this.speed;
			ellipseMode(CENTER);
			//ellipse((this.x3+this.x4)/2, this.y3, (this.x3-this.speed)-(this.x4-this.speed) , 60);
			
			//this.speed+speed;
		} // if left false 
	//	this.x3=this.x3+this.speed;
		//this.x4=this.x4+this.speed;
		//fill(250, 210, 50, 100);
		//noStroke();
		//this.color=color;
		fill(this.r, this.g, this.b, 200);
		noStroke();
		circle((this.x1+this.x2)/2, this.y1, 60);
		fill(this.r, this.g, this.b, this.a);
		quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
		ellipse((this.x3+this.x4)/2, this.y3, this.width, 60);
	}//move
	
} //lights class

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
}
