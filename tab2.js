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