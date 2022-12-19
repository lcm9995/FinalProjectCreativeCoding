//lily mcamis final project creative coding c fall 2022

let myDancer; //frog

var currentAmp; // holds current amplitude level of song playing
var scaledAmp; // the currentAmp mapped to between 0 and 1 so that all the songs have the same range
let song1; //song 1 sound
let song2;// song 2 sound
let song3;//song 3 sound

var songtime1; // curentTime of song1
var songtime2; // currentTime of song2
var songtime3; // currentTime of song3

let danceTime = false; //tells the frog to dance or not for the first song
let danceTime2=false; // tells the frog to dance for the second song
let danceTime3=false; // tells the frog to dance for the third song

let jumping = false; //tells frog to jump
let ascent = false; //true while frog is jumping on the way up
let descent = false; //true while frog is jumping on the way down
var jumpY = 0;//amount the frog's y position is changing by when jumping

let flying = false;
let angelaway = false; // tells frog when to fly away in third song

let leftlight; //leftmost stage light
let rightlight; //right stage light
let midleftlight; //middle left stage light
let midrightlight; //middle right stage light
var reds = []; //hold the red values of the colors for the lights 
var greens=[]; // hold the green values of the colors of the lights
var blues = []; //holds the blue values of the colors of the lights

var topbar = true; //when true, menu of song choices displays at top
let stopplay = false; //true when the pause button has been clicked before the song has been stopped or resumed
var m=0; //curtain speed

let astroworld; // image for the first song's background
let xcx; // image for the second song's background
let xcxworld; //image for the second song's background
let vroomvroom; //image for the second song's background
let saturn; // animation for the first song's background
let wings;
let guitar; //prop for the frog during third song

var rainX=[]; //x values of the rain for the third song
var rainY=[]; //y values of the rain for the third song

function preload() {
	song1 = loadSound('Travis_Scott_SICKO_MODE.mp3'); //all mp3s downloaded from https://myfreemp3.to/
	song2 = loadSound('Charli_XCX_Vroom_Vroom.mp3');
	song3 = loadSound('Purple_Rain.mp3');
	astroworld= loadImage('Astroworld-Logo.png'); // from https://www.google.com/url?sa=i&url=https%3A%2F%2Flogos-world.net%2Fastroworld-logo%2F&psig=AOvVaw24mR7z7WBPGn4_Bqqz5__S&ust=1671529768008000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJiXmOSzhfwCFQAAAAAdAAAAABAD
	xcx = loadImage('asset_1.png'); // from https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ACharli_XCX_Logo.svg&psig=AOvVaw2QFNoL5-5LXHv2F6QVAsgT&ust=1671529798137000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIjQu_OzhfwCFQAAAAAdAAAAABAI
	xcxworld = loadImage('asset_2.png'); // from https://www.google.com/url?sa=i&url=http%3A%2F%2Flanaboards.com%2Ftopic%2F614-charli-xcx%2Fpage%2F5023%2F&psig=AOvVaw1u19ZggGWRycKZyk54OCc5&ust=1671529887616000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIC63p20hfwCFQAAAAAdAAAAABAD
	vroomvroom = loadAni('frame_00.png', 17); //converted to frames from gif from https://media.giphy.com/media/JTz6jJnxo5U91kSf0E/giphy.gif 
	curtainimg = loadImage('istockphoto-172517528-170667a.jpg'); // getty images stock
	saturn = loadAni('saturn_00.png', 12); // converted to frames from gif from https://media.giphy.com/media/OPuSF04oCns4dfuZaK/giphy.gif
	guitar = loadImage('guitar.png'); // https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngfind.com%2Fmpng%2FbwixmT_950-x-527-10-prince-guitar-hd-png%2F&psig=AOvVaw2rsJfSw3o9v-nP35pLCoI8&ust=1671524890601000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCdgdKhhfwCFQAAAAAdAAAAABAD 
	wings = loadImage('frogwings.png'); //https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fpair-beautiful-white-angel-wings-isolated-transparent-background_13128471.htm&psig=AOvVaw1Dh5t7DbzQr7nOW725nKsP&ust=1671542863755000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLC098bkhfwCFQAAAAAdAAAAABAY 
}//preload

function setup() {
	 for(var i = 0; i<=7000; i++){ 
    rainX[i] = random(0, windowWidth);//for every i value in the loop an indice representing the x position of that drop of rain is created at a random x location within the screen width. 
    rainY[i] = random(-7000, windowHeight-100); //for every i value in the loop an indice representing the y position of that droplet is created at random y location ranging from -7000 to the bottom of the screen
  }
	createCanvas(windowWidth, windowHeight); 
	amplitude = new p5.Amplitude(); // returns the amplitude of whatever sound is playing in a number between 0 and 1
	myDancer = new Dancer(windowWidth/2, windowHeight/2+200); // this is the frog 
	
	leftlight = new Lights(windowWidth*0.88-30, 30, windowWidth*0.88+25, 35, windowWidth-windowWidth/4-35, windowHeight/2+220, windowWidth/4+300, windowHeight/2+220, true);//leftmost light, gives position and which direction it will move to start with the boolean
	rightlight = new Lights(windowWidth*0.75-30, 30, windowWidth*0.75+25, 35, windowWidth-windowWidth/4, windowHeight/2+220, windowWidth/4+100, windowHeight/2+220, false);
	midleftlight = new Lights(windowWidth/4-20, 35, windowWidth/4+30, 30, windowWidth/2+300, windowHeight/2+220, windowWidth/2-windowWidth/4, windowHeight/2+220,true);
	midrightlight = new Lights(windowWidth/8-35, 35, windowWidth/8+30, 30, windowWidth/2+50, windowHeight/2+220, windowWidth/2-windowWidth/4, windowHeight/2+220, false);
	
	topbar=true; // if true, the song options will display at the top and the curtain will be present
}//setup

function draw() {
	//smooth(); 
	currentAmp = amplitude.getLevel(); //current amplitude of whatever song is playing
	songtime1 = song1.currentTime(); // stores the current timestamp of song1
	songtime2=song2.currentTime(); //stores the current timestamp of song2
	songtime3= song3.currentTime(); //stores the current timestamp of song3

	if(song1.isPlaying()){ 
		scaledAmp=map(currentAmp, 0.1, 0.5, 0, 1); // maps the average range of the amplitude in song 1 to the range 0 to 1 to make it easier to use in other places 
	}
	if(song2.isPlaying()){
		scaledAmp=map(currentAmp, 0.01, 0.6, 0, 1); //maps the avg range of amp in song 2 to the range 0 to 1
	}
	if(song3.isPlaying()){
		scaledAmp=map(currentAmp, 0, 0.35, 0, 1); //maps the avg range of amp in song 3 to the range 0 to 1
	}
	if(topbar==true){ 
		menu(); //displays the menu of song options and curtain
	}
	if(topbar==false){
		backdrop(); //shows background and lights
		//curtain();
	}
	if(danceTime==true){ //if first song is playing, this will be true, tells frog to dance
			bounce(-1*map(scaledAmp, 0, 1, 20, 200)+110); //calls bounce function, which makes frog move up and down according to the scaled amplitude mapped to a range of numbers and added to y value
		}//ifdance
	
	if(danceTime2==true){ //tells the frog to dance when the second song is playing
			bounce(-1*map(scaledAmp, 0, 1, 0, 200)+110); 
	}//ifdance2
	
	if(danceTime3==true){ //tells the frog to dance when the third song is playing
		if(songtime3<song3.duration()-200){
		bounce(-1*map(scaledAmp, 0, 1, 50, 200)+110);
		flying=false;
		}
		if(songtime3>=50){ //if the current time of the third song is 50 seconds or more triggers the rain to start falling
			rain();
		}
		if(songtime3>=song3.duration()-200){// if less than 200 seconds left of the song the frog starts to float
			fly();
			flying=true;
			if(songtime3>song3.duration()-180){
				angelaway=true; // when less than 100 seconds left of third song the frog flies away
			}//angelaway
		}//fly
	}//ifdancetime3

	if(jumping==true){
		danceTime=false; //pauses the dancing/bobbing of the frog so it can jump
		danceTime2=false;
		danceTime3=false;
		if(ascent==true){ //on its way up in the jump
			jumpY+=1; //y value added to frog's y position increases by 1
			dancerJump(jumpY*map(scaledAmp, 0, 1, 10, 20)); //multiplies y value being added to the frog by between 10 and 20 depending on the amplitude. if amp is higher, frog jumps a little higher. 
			if(jumpY*map(scaledAmp, 0, 1, 12, 30)>250){ //if the y value multiplied by the mapped amplitude is greater than 250 that is the peak of the jump
				ascent=false; //the frog stops moving up
				descent=true; //frog starts moving down
			}//ifjumpY*map
		}//ifascent
		if(descent==true){ //frog is moving down in the jump
			jumpY-=1; // y value added to frog's y position is negative
			dancerJump(jumpY*map(scaledAmp, 0, 1, 10, 20)); // multiplies y value being subtracted by mapped amplitude to keep rate the same from ascent
		}//ifdescent
			if(jumpY==0){ // once it has reached bottom of jump
				descent=false; 
				jumping=false;
				//danceTime=true;
				if(song1.isPlaying()){ 
				 danceTime=true; // frog continues dancing for first song if it is playing
				}//ifsong1
				if(song2.isPlaying()){
			 		danceTime2=true; //frog continues dancing for song2 is song2 is playing
			 }//ifsong2
				if(song3.isPlaying()){
			 		danceTime3=true //frog continues dancing for song 3 if it is playing
			 }//ifsong3
				jumpY=0; //jump y set back to 0 (it should already be at 0 but just in case)
				jumping=false; // jump is over until up arrow clicked again
			}//ifjumpY==0
	}//ifjumping
	if((m<=windowHeight)&&(topbar==false)){ // if the curtain is still down and one of the songs has been clicked and started
		curtain(); //curtain will rise up/open
	}
	//text(currentAmp, windowWidth/6, windowHeight/2);
//	text(scaledAmp, windowWidth/6, windowHeight/3);
	if((song1.isPlaying()==false)&&(song2.isPlaying()==false)&&(song3.isPlaying()==false)&&(topbar==false)){ //if all of the songs are not playing and the menu is not displayed, meaning one of the songs has ended,
		danceTime=false; 
		danceTime2=false;
		danceTime3=false; // frog will turn off
		flying = false;
		angelaway=false;
		myDancer.x=windowWidth/2;
		topbar=true; //menu will display
	}
}//drawloop
function mousePressed() {
		if(topbar==true){ //if menu is displayed/no song playing
			if((mouseY>=15)&&(mouseY<=85)){	//if mouse at height of song button 
				if((mouseX>=windowWidth/4-60) && (mouseX<=windowWidth/4+60)){ // if mouse at first song button xpos
					song1.play(); 
					song1.jump(30); //starts playing at 30 seconds into track
					danceTime=true; //frog will dance for the first song
					topbar=false; //menu turns off
			
				}//ifmousex
				else if((mouseX>= windowWidth/2-60) && (mouseX<=windowWidth/2+60)){ //if mouse at second song button xpos
					song2.play();
					danceTime2=true;
					}//ifmousex
				else if((mouseX>= windowWidth*0.75-60) && (mouseX<=windowWidth*0.75+60)){ //if mouse at third song button xpos
					song3.play();
					danceTime3=true;
					}//ifmousex
			}//ifmouseY
	}//iftopbar
	
		if((mouseX>=73)&&(mouseX<=133)){
			if((mouseY<=windowHeight-68)&&(mouseY>=windowHeight-133)){//stop button clicked
					if(song1.isPlaying()){
						song1.stop(); 
						topbar=true; //tells menu to show
						danceTime=false; //tells frog to stop dancing
					}
					if(song2.isPlaying()){
						song2.stop();
						topbar=true; //tells menu to show
						danceTime2=false; 
					}
				if(song3.isPlaying()){
					 	song3.stop();
						flying=false;
						angelaway=false;
						myDancer.x=windowWidth/2;
						topbar=true;
						danceTime3=false;
					}//ifsong 3 is playing
				}//if mouse Y	
		}//if mousex	
}//mouseClicked

function keyPressed(){
	if(keyCode===UP_ARROW){
		jumping=true; //boolean calls jump function from draw loop
		ascent=true; //tells it to start by going up
		}//if keycode up
	if(keyCode==RIGHT_ARROW){ //skip forward
		if(song1.isPlaying()){
			song1.jump(song1.currentTime()+15); //skips to 15 seconds after the current position the playhead is at in the song
		}
		if(song2.isPlaying()){
			song2.jump(song2.currentTime()+15);
		}
		if(song3.isPlaying()){
			song3.jump(song3.currentTime()+15);
		}//if song 3
	}//if right arrow
	if(keyCode==LEFT_ARROW){
		if(song1.isPlaying()){
			song1.jump(song1.currentTime()-15); //skips to 15 seconds after the current position the playhead is at in the song
		}
		if(song2.isPlaying()){
			song2.jump(song2.currentTime()-15);
		}
		if(song3.isPlaying()){
			song3.jump(song3.currentTime()-15);
		}//if song 3
	}//if left arrow
}//keypressed function

function curtain(){
		if(topbar==true){
			m=0;//amount the y position of curtain moves up 
		}
		if(topbar==false){
			m=m+5;
		}
		noStroke();
		fill(132, 10, 1); 
		imageMode(CENTER);
		image(curtainimg, windowWidth/2, windowHeight/2-m, windowWidth, windowHeight-m); //image of curtain across the screen will move up when m becomes greater
		//rect(0, 0-m, windowWidth, windowHeight-m);
}//curtain 

let menumove=1; //enlarges and deenlarges the size of the rectangles that have the names of the songs on the menu bar
let bigger=true; // tells menu move to either get bigger or get smaller
function menu(){
	//curtain
	topbar=true;
	curtain(); //calls curtain to appear
	
	//button sizing
	if(bigger==true){ 
		menumove+=0.005; //size of rectangles gets bigger a little
	}
	if(bigger==false){
		menumove-=0.005; //rect size goes smaller 
	}
	if(menumove>=1.1){
		bigger=false; //if more than 1.1 times the normal size of rectangle it will stop getting bigger
	}
	if(menumove<1){
		bigger=true; //if less than the normal size of rectangle it will start getting bigger
	}
	//menu /selection bar
	fill(210, 100);
	rectMode(CORNER); 
	rect(0, 0, windowWidth, 150); //background/bar for buttons
	fill(50);
	//song buttons
	rectMode(CENTER);
	stroke(250);
	strokeWeight(2);
	fill(176, 6, 255);
	rect(windowWidth/4, 50, 120*menumove, 70*menumove); //left button
	rect(windowWidth/2, 50, 120*menumove, 70*menumove); // middle button
	rect(windowWidth*0.75, 50, 120*menumove, 70*menumove); //right button
	//song button text
	stroke(0);
	strokeWeight(0.5);
	fill(250);
	textAlign(CENTER); 
	textSize(12*menumove); //font size is multiplied by menumove to grow and shrink with the button size
	text("SICKO MODE", windowWidth/4, 50);
	text("VROOM VROOM", windowWidth/2, 50);
	text("PURPLE RAIN", windowWidth*0.75, 50);
	//directions
	fill(0);
	textSize(17);
	text('Choose A Song', windowWidth/2, 130);
}

let i=0; //index of half of the lights colors
let p=3; //index of other half's colors
//let saturnmove=0; //
//let saturnmoveright=true;
function backdrop(){
		topbar=false; //means selection bar is gone, curtain can rise
		background(0);
	//lights - color palletes
		if(song1.isPlaying()){
			scaledAmp=map(currentAmp, 0.1, 0.5, 0, 1); //resetting scaled amp for this scope
			reds=[255, 222, 245, 161, 3, 5, 5];
			greens=[169, 73, 7, 4, 0, 255, 159];
			blues=[5, 4, 59, 222, 250, 60, 255];
		}
		if(song2.isPlaying()){
			scaledAmp=map(currentAmp, 0.01, 0.4, 0, 1); //resetting scaled amp for this scope
			reds=[250, 150, 50, 9, 0, 249, 255];
			greens=[10, 30, 250, 250, 250, 47, 238];
			blues=[180, 200, 250, 81, 244, 255, 46];
		}
		if(song3.isPlaying()){
			scaledAmp=map(currentAmp, 0, 0.35, 0, 1); //resetting scaled amp for this scope
			reds=[37, 130, 85, 56, 65, 183, 202];
			greens=[1, 72, 2, 31, 1, 25, 202];
			blues=[99, 232, 227, 99, 179, 227, 227];
		}
		if(scaledAmp>=0.6){ //if the amplitude is greater than 60% of its avg, color of lights will change
			if(i==6){ // if equal to last indice loop back to 0
				i=0; 
			}
			else{
				i=i+1; 
			}
			if(p==6){
				p=0; //if equal to last indice loop back to 0
			}
			else{
				p=p+1;
			}
		}
		else{ //if the current amplitude is not greater than its average the lights won't change colors
			i=i;
			p=p;
		}
		colorMode(RGB, 255); // just making sure
		if(scaledAmp<=0.8){ //if at less than 80% of amplitude range lights will be two different colors
		leftlight.fill(reds[i], greens[i], blues[i], 100); // 
		leftlight.move(map(scaledAmp, 0, 1, 0, 70));
		rightlight.fill(reds[p], greens[p], blues[p], 100);
		rightlight.move(map(scaledAmp, 0, 1, 0, 70));
		midleftlight.fill(reds[i], greens[i],blues[i], 100);	
		midleftlight.move(map(scaledAmp, 0, 1, 0, 60));
		midrightlight.fill(reds[p], greens[p], blues[p],  100);
		midrightlight.move(map(scaledAmp, 0, 1, 0, 60));
		}
		if(scaledAmp>=0.8){ //when amplitude is greater than 80% of range the lights change to the same color at the indices of i
			leftlight.fill(reds[i], greens[i], blues[i], 100);
			leftlight.move(map(scaledAmp, 0, 1, 0, 70));
			rightlight.fill(reds[i],greens[i], blues[i], 100);
			rightlight.move(map(scaledAmp, 0, 1, 0, 70));
			midleftlight.fill(reds[i], greens[i], blues[i], 100);	
			midleftlight.move(map(scaledAmp, 0, 1, 0, 60));
			midrightlight.fill(reds[i], greens[i], blues[i], 100);
			midrightlight.move(map(scaledAmp, 0, 1, 0, 60));
		}
	
	//stop button
		fill(176, 6, 255);
		stroke(250);
		strokeWeight(5);
		circle(100, windowHeight-100, 65); //button
		noStroke();
		fill(250);
		rectMode(CENTER);
		rect(100, windowHeight-100, 20);//stop symbol
			
	//song animations
	
		if(song1.isPlaying()){
			imageMode(CENTER); 
			image(astroworld, windowWidth/2, windowHeight-90, windowWidth/3*map(currentAmp, 0, 0.5, 1, 1.5), 250);//astroworld logo below frog, grows and shrinks with amp
			//image(astroworld, random(100, windowWidth-100), random(100, windowHeight-200), windowWidth/4, 150);
			push();
			scale(0.4);
			animation(saturn, windowWidth/2, windowHeight/2+200); //planet on screen behind/above frog, 
			pop();
			//animation(sickomode,windowWidth-300, windowHeight/2);
			/*if(saturnmoveright==true){
				saturnmove+=5;
			}
			else if(saturnmoveright==false){
				saturnmove=saturnmove-5;
			}
			if(saturnmove>=windowWidth*2-100){
				saturnmoveright=false;
			}
			if(saturnmove<=0){
				saturnmoveright=true;
			}*/
		}
	//second song animations
		if(song2.isPlaying()){
			imageMode(CENTER);
			image(xcx, windowWidth/2, 150, windowWidth/5*map(currentAmp, 0, 0.4, 1, 2), 150); // xcx behind frog grows and shrinks with amp
			image(xcxworld, 200, windowHeight/2, windowWidth/8*map(currentAmp, 0, 0.4, 1, 2), windowHeight/8*map(currentAmp, 0, 0.4, 1, 1.2)); //vroom vroom image to the left of frog
			//image(vroom, windowWidth-200, windowHeight/2);
			animation(vroomvroom, windowWidth-200, windowHeight/2); //animation rotating vroom vroom to the right of frog
		}
	//instructions
		noStroke();
		fill(220);
		textSize(15);
		text('Press up arrow to jump', windowWidth-150, windowHeight-60);
		text('Press right arrow to skip forward', windowWidth-150, windowHeight-40);
		text('Press left arrow to skip backwards', windowWidth-150, windowHeight-20);
		text('Stop', 100, windowHeight-45);
}//backdrop function

//let flying =true;
function bounce(bob){ //makes from move up and down according to amplitude, used in all songs. bob is the y value that is added but is scaled differently for different partsof the frog
	backdrop(); 
	myDancer.body(bob*1.5); 
	myDancer.legs(bob);
	myDancer.feet(0);
	myDancer.head(bob*2); //head changes the most, y value added times 2
	if(song3.isPlaying()){
		myDancer.frogguitar(bob*1.5); //guitar only for prince
	}
	if(song1.isPlaying()){ //strobe light, wanted it seperate from backdrop function so it would go over 
		if((songtime1>60)&&(songtime1<75)){
			if(bob<=0.4){ // whites out as the frog goes down with the amplitude, but the overall amplitude during this part of song is high so we see the frog up and then it goes white
				//background(0);
				background(255, 190); // white background 
			}//if bob
		} // if songtime
	} // if song 1 is playing
}//bounce function

//var t =0; 
//var out=true;
var up=10; // initial amount the frog levitates by
var side = 0; // moves frog side to side as it floats up
var leftfly=true; // tells side which direction to move 

function fly(){ 
	
	if(side<=-200){
		leftfly=false;
	}
	if(side>=200){
		leftfly=true;
	}
	if(leftfly==true){
		side-=1; //increments side movement by negative .8 when moving in left direction
	}
	if(leftfly==false){
		side+=1; // increments side movement by .8 when moving in right direction
	}
	if(angelaway==false){
		if(up<50){ // if not time to fly away yet the frog will float up to 50 and hover there
			up+=0.5;
		}
	}
	if(angelaway==true){
		up+=0.5; // when time to flyaway frog will float up by increments of .5 until it is off screen
	}
			myDancer.floating(side); // moves x position of frog
			myDancer.angelwings(-up); // up is amount the frog's y value shifts up
			//myDancer.angelwings(-up);
			myDancer.body(-up);
			myDancer.legs(-up);
			myDancer.feet(-up);
			myDancer.head(-up);
			myDancer.frogguitar(-up);
}

class Dancer {
	constructor(x,y){
		this.x=x; //initial/resting x pos
		this.y=y; //initial/resting y pos
	} //constructor
	floating(up){ // only called when flying, moves x position
		this.up=up; //side movement
		this.x=windowWidth/2+this.up;
	}
	head(w){
		this.w=w; //change in y pos
		if(flying==true){ //halo only appears when frog is floating
			stroke(200, 140, 5);
			strokeWeight(4);
			noFill();
			ellipse(this.x, this.y-280+this.w, 60, 30); //halo
		}
		stroke(118, 200, 72);
		strokeWeight(1);
		fill(138, 240, 82);
		ellipse(this.x, this.y-230+this.w, 100, 80); //head
		noStroke();
		circle(this.x-25, this.y-265+this.w, 30); //eyesocket left//*map(currentAmp, 0, 0.5, 0.9, 1.2)
		circle(this.x+25, this.y-265+this.w, 30); //eye socket right *map(currentAmp, 0, 0.5, 0.9, 1.2)
		
		noStroke();
		fill(255);
		ellipse(this.x+25, this.y-262+this.w, 22+map(scaledAmp, 0.1, 0.4, 0, 7), 30+map(scaledAmp, 0.25, 0.5, 0, 10)); //eyeball right
		ellipse(this.x-25, this.y-262+this.w, 22+map(scaledAmp, 0.1, 0.4, 0, 7), 30+map(scaledAmp, 0.25, 0.5, 0, 10)); //eyeball left
		
		fill(0);
		ellipse(this.x+25, this.y-262+this.w, 10+map(scaledAmp, 0.1, 0.4, 0, 2), 20 + map(scaledAmp, 0.3, 0.5, 0, 4)); //pupil right
		ellipse(this.x-25, this.y-262+this.w, 10+map(scaledAmp, 0.1, 0.4, 0, 2), 20+ map(scaledAmp, 0.3, 0.5, 0, 4)); //pupil left
	
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
		line(this.x, this.y-190+this.w, this.x, this.y-170+this.w*0.7); // neck
	}//head
		legs(r){ 
			this.r=r; //change in y pos
			fill(138, 240, 82);
			stroke(138, 240, 82);
			strokeWeight(3);
			strokeCap(ROUND);
			if(flying==false){
			triangle(this.x-10, this.y-110+this.r, this.x-49, this.y-93, this.x-20, this.y-105+this.r*2);//hind leg thighs left
			triangle(this.x+10, this.y-110+this.r, this.x+49, this.y-93, this.x+20, this.y-105+this.r*2); // hind leg thighs right
		}
			if(flying==true){
			triangle(this.x-10, this.y-110+this.r, this.x-49, this.y-93+this.r, this.x-20, this.y-105+this.r);//hind leg thighs left
			triangle(this.x+10, this.y-110+this.r, this.x+49, this.y-93+this.r, this.x+20, this.y-105+this.r); // hind leg thighs right
		}
		}
	body(e){
		this.e=e;//change in y pos
		noStroke();
		fill(138, 240, 82);
		circle(this.x, this.y-110+this.e, 80); // body
		circle(this.x, this.y-140+this.e, 45);
		circle(this.x, this.y-160+this.e, 35);
		stroke(118, 200, 72);
		strokeWeight(8);
		if(flying==true){
		line(this.x-10, this.y-110+this.e, this.x-13, this.y+20+this.e); // front leg left
		line(this.x+10, this.y-110+this.e, this.x+13, this.y+20+this.e); // front leg right
		}
		else{
		line(this.x-10, this.y-110+this.e, this.x-13, this.y+20); // front leg left
		line(this.x+10, this.y-110+this.e, this.x+13, this.y+20); // front leg right
		}
	}//body
		
	feet(t){
		this.t=t; //change in y pos
		fill(138, 240, 82);
		strokeWeight(8);
		//stroke(100, 240, 50);
		stroke(118, 200, 72);
		fill(118, 200, 72);
		line(this.x-50, this.y-95+this.t, this.x-30,this.y+15+this.t);// hind leg shins left
		line(this.x+50, this.y-95+this.t, this.x+30, this.y+15+this.t);// hind leg shins right
		triangle(this.x-42, this.y+22+this.t, this.x-47, this.y+25+this.t, this.x-50,this.y+23+this.t);// left foot
		triangle(this.x+42, this.y+22+this.t, this.x+47, this.y+25+this.t, this.x+50, this.y+23+this.t); // right foot
	}//feet
	
	frogguitar(g){ //only for third song
		this.g=g;
		image(guitar, this.x+20, this.y-140+this.g);
	}
	angelwings(a){ //only used for third song
		this.a=a;
		image(wings, this.x, this.y-160+this.g);
	}
}//class dancer

class Lights {
	constructor(x1, y1, x2, y2, x3, y3, x4, y4, left){
		this.x1=x1; // top left cord
		this.y1=y1;
		this.x2=x2; //top right cord
		this.y2=y2;
		this.x3=x3; //bottom right cord
		this.y3=y3;
		this.x4=x4; // bottom left cord
		this.y4=y4;
		this.left=left; //tells which direction to move first
		this.width=this.x3-this.x4; // difference between two bottom cords determines width of ellipse
	}//constructor
	fill(r, g, b, a){
		this.r=r; 
		this.g=g;
		this.b=b;
		this.a=a; //opacity of lights fill
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
		}//if left
		if(this.left==false){
			this.x3=this.x3+this.speed;
			this.x4=this.x4+this.speed;
			ellipseMode(CENTER);
		} // if left false 
		fill(this.r, this.g, this.b, this.a);
		noStroke();
		circle((this.x1+this.x2)/2, this.y1, 60); //actual lightsource at top of screen
		fill(this.r, this.g, this.b, this.a);
		quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4); //light
		ellipse((this.x3+this.x4)/2, this.y3, this.width, 60); //pool of light on stage
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
		if(i>=40){ //if far enough above the ground, the knees will lift off the ground too but after everything else
			triangle(windowWidth/2, windowHeight/2-i, windowWidth/2-50, windowHeight/2-95-i+100, windowWidth/2-20, windowHeight/2+15-i);//hind leg thighs left
			triangle(windowWidth/2, windowHeight/2-i, windowWidth/2+50, windowHeight/2-95-i+100, windowWidth/2+20, windowHeight/2+15-i); // hind leg thighs right
			strokeWeight(8);
			stroke(100, 240, 50);
			line(windowWidth/2-50, windowHeight/2-95-i+100, windowWidth/2-30, windowHeight/2+15-i+100);// hind leg shins left
			line(windowWidth/2+50, windowHeight/2-95-i+100, windowWidth/2+30, windowHeight/2+15-i+100);// hind leg shins right
	
			line(windowWidth/2-10, windowHeight/2-60-i, windowWidth/2-13, windowHeight/2+20-i+40); // front leg left
			line(windowWidth/2+10, windowHeight/2-60-i, windowWidth/2+13, windowHeight/2+20-i+40); // front leg right
			
			triangle(windowWidth/2-33, windowHeight/2+15-i+100, windowWidth/2-40, windowHeight/2+20-i+100, windowWidth/2-43, windowHeight/2+17-i+100);// left foot
			triangle(windowWidth/2+33, windowHeight/2+15-i+100, windowWidth/2+40, windowHeight/2+20-i+100, windowWidth/2+43, windowHeight/2+17-i+100); // right foot
		}
		else { //when jump start or is landing, below the knees doesnt move
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
		circle(windowWidth/2+30, windowHeight/2-110-i, 20); //lips
		circle(windowWidth/2-30, windowHeight/2-110-i, 20); //lips
		fill(240, 140, 190);
		noStroke();
		if(song3.isPlaying()){
			image(guitar, windowWidth/2+20, windowHeight/2-40-i); //guitar for jump
		}
}
let A = 0; //increment for rain to fall 
function rain(){
	stroke(200, 50, 210, 130); 
	strokeWeight(2);
  for (var c = 0; c<=7000; c++){ // 
    if(rainY[c]+A >= height-100){ //rain falls until 100 above window height to make look more real
      line(rainX[c], rainY[c]+ ((height-100)-rainY[c]+A), rainX[c], rainY[c]-4+((height-100)-rainY[c]+A)); // line of length 4 drawn from x and y positions from the indexes that correspond to c value
    } else {
        line(rainX[c], rainY[c]+A, rainX[c], rainY[c]-4+A); //if it is not below 100 it will just fall as normal
        }
  }
  A=A+2; //ypos falls by 2
}



