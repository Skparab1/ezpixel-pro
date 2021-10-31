let input;
let img;

function setup() {
  
  createCanvas(1000,420);  
  textSize(18);
  //text("Click on the file input and select a file.", 20, 20);
  
  input = createFileInput(handleFile);
  input.position(650, 365);

}

var changingcolor = 0;
var countervar = 680;
var barcolor = 0;
var startedupload = false;

function draw() {
  clear();
  
  if (!img && !startedupload){
  
  let i = countervar-700;
  
  background((255-Math.abs(255-changingcolor+i))+200,(255-Math.abs(510-changingcolor+i))+200,(255-Math.abs(710-changingcolor+i))+200);
  
  red = (255-Math.abs(255-changingcolor))+100; //   0          255              
  green = (255-Math.abs(510-changingcolor))+100; // 100        100 
  blue = (255-Math.abs(765-changingcolor))+100; //  255         0       
  if (changingcolor >= 765){                                                        // @765    @1020
    red = (255-Math.abs(1020-changingcolor)) + (255 * ((changingcolor-765)/255)); //   ok        255+255
    green = 100;                                                                  //    ok       
    blue = (255-Math.abs(765-changingcolor)) + (255-(changingcolor-765));           //   ok     
  }
  background(0);
  
 if (countervar <= 1000){
    countervar += 1.5;
    changingcolor += 1.5;
  } else {
    barcolor += 2;
  }
  
  textSize(50);
  stroke(countervar-680) ;
  fill(countervar-680) ;
  text('Ezpixel Pro',400,50);    
  
  while (i > 0){
    fill((255-Math.abs(255-changingcolor+i))+200,(255-Math.abs(510-changingcolor+i))+200,(255-Math.abs(710-changingcolor+i))+200);

    stroke((255-Math.abs(255-changingcolor+i))+200,(255-Math.abs(510-changingcolor+i))+200,(255-Math.abs(710-changingcolor+i))+200);
    ellipse(500,200,i,i);
    i -= 1;
  }
  
  i = countervar-750;
  while (i > 0){
    fill((255-Math.abs(510-changingcolor+i))+200,(255-Math.abs(710-changingcolor+i))+200,(255-Math.abs(255-changingcolor+i))+200);

    stroke((255-Math.abs(510-changingcolor+i))+200,(255-Math.abs(710-changingcolor+i))+200,(255-Math.abs(255-changingcolor+i))+200);
    ellipse(200,200,i,i);
    i -= 1;
  }
  
  if (mouseY > 350 && mouseY < 400){
    fill(200,255,0);
  } else {
    fill(countervar-790);
  }
  stroke(0);
  rect(0,350,1000,50);
  textSize(30);
  
  if (barcolor > 0){
    fill(barcolor,(255-Math.abs(510-changingcolor+i))+200,(255-Math.abs(710-changingcolor+i))+200);
    stroke(barcolor,(255-Math.abs(510-changingcolor+i))+200,(255-Math.abs(710-changingcolor+i))+200);
    rect(0,350,barcolor,50);
    rect(1000,350,-barcolor,50);
  }
  
  fill(0);
  text('Select file and get started',250,390);
  
  i = countervar-800;
  while (i > 0){
    fill((255-Math.abs(710-changingcolor+i))+200,(255-Math.abs(255-changingcolor+i))+200,(255-Math.abs(510-changingcolor+i))+200);

    stroke((255-Math.abs(710-changingcolor+i))+200,(255-Math.abs(255-changingcolor+i))+200,(255-Math.abs(510-changingcolor+i))+200);
    ellipse(800,200,i,i);
    i -= 1;
  }
  
  textSize(40);
  stroke(countervar-750) ;
  fill(countervar-750) ;
  text('High Quality Free and open source photo editing',50,100);
  
  stroke(countervar-790) ;
  fill(countervar-790) ;
  
  if (countervar >= 800){
    //input = createFileInput(handleFile);
    //input.position(650, 365);
    //input.size(100,100);
  }
  
  } else if (!img){
    fill(150);
    rect(0,0,1000,500);
    fill(200,0,0);
    textSize(60);
    text('Uploading....',500,200);
    text('Wait for it',300,300);
  } else if (img) {
    if (img.height < img.width){
      image(img, 0, 0, width, (width*img.height)/img.width);
    } else {
      image(img, 0, 0, (height*img.width)/img.height, height);
    }
    
    fill(150);
    rect(750,0,300,600);
    
    let cplus = 0;
    let ypos = 0;
    
    while (ypos < 510){
      let xpos = 750;
      let cc = 0;
      while (xpos <= 1300){
        red = (255-Math.abs(255-cc))+100;
        green = (255-Math.abs(510-cc))+100;
        blue = (255-Math.abs(765-cc))+100;
        stroke(red+cplus,green+cplus,blue+cplus);
        fill(red+cplus,green+cplus,blue+cplus);
        rect(xpos,ypos,1,1);
        cc += 4;
        xpos += 1;
      }
      cplus += 0;
      ypos += 1;
    }
    
  }
  
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}

function mousePressed(){
  if (mouseX > 600 && mouseX < 700 && mouseY > 300 && mouseY < 450){
    startedupload = true;
  }
}
