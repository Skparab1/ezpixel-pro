function setup() {
  createCanvas(2048,846);
}

var changingcolor = 0;
var countervar = 0;

function draw() {
  red = (255-Math.abs(255-changingcolor))+100; //   0          255              
  green = (255-Math.abs(510-changingcolor))+100; // 100        100 
  blue = (255-Math.abs(765-changingcolor))+100; //  255         0       
  if (changingcolor >= 765){                                                        // @765    @1020
    red = (255-Math.abs(1020-changingcolor)) + (255 * ((changingcolor-765)/255)); //   ok        255+255
    green = 100;                                                                  //    ok       
    blue = (255-Math.abs(765-changingcolor)) + (255-(changingcolor-765));           //   ok     
  }
  background(0);
  
  if (changingcolor >= 1020){
    changingcolor = 255;
  }
  
  changingcolor += 5;
 
  countervar += 20;
  
  
  let i = countervar-700;
  
  while (i > 0){
    fill((255-Math.abs(255-changingcolor+i))+200,(255-Math.abs(510-changingcolor+i))+200,(255-Math.abs(710-changingcolor+i))+200);

    stroke((255-Math.abs(255-changingcolor+i))+200,(255-Math.abs(510-changingcolor+i))+200,(255-Math.abs(710-changingcolor+i))+200);
    ellipse(1000,400,i,i);
    i -= 1;
  }
  
  i = 2500-countervar;
  
  if (countervar >= 2000){
    fill(0);
    stroke(0);
    strokeWeight(100);
    rect((countervar)/5,0,600,800);
    
    fill((255-Math.abs(255-changingcolor+i))+200,(255-Math.abs(510-changingcolor+i))+200,(255-Math.abs(710-changingcolor+i))+200);

    stroke((255-Math.abs(255-changingcolor+i))+200,(255-Math.abs(510-changingcolor+i))+200,(255-Math.abs(710-changingcolor+i))+200);

     
    i -= 1;
  }
  
  strokeWeight(1);
  
  fill(0);
  
  textSize(70);
  stroke(0);
  text('Skparab1',870,420);
  
  i = 700-countervar;
  
  while (i > 0){
    fill((255-Math.abs(510-changingcolor+i))+200,(255-Math.abs(710-changingcolor+i))+200,(255-Math.abs(255-changingcolor+i))+200);

    stroke((255-Math.abs(510-changingcolor+i-150))+250,(255-Math.abs(710-changingcolor+i-150))+250,(255-Math.abs(255-changingcolor+i-150))+250);
    ellipse(1000,400,i,i);
    i -= 1;
  }
  
}
