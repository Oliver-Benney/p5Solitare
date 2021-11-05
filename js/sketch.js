//global variables
var cardX,cardY,cardHeight,cardWidth;

function setup() {
    var canvas = createCanvas(600, 400);
    background(0,100,0);
    canvas.parent("p5container");
}

function draw() {
  background(r,g,b) 
  
    //vars
  cardX= width/2;
  cardY= height/2;
  cardWidth=180;
  cardHeight=180;

    fill(255, 255, 255);
    quad(mouseX-40,mouseY-60,mouseX+40,mouseY-60,mouseX+40,mouseY+60,mouseX-40,mouseY+60)

    fill(255,0,0)
    ellipse(mouseX,mouseY,20)

    fill(255,0,0);
    textSize(25);
    text('A', mouseX-35, mouseY-36);

    fill(255,0,0);
    textSize(25);
    text('A', mouseX+19, mouseY+55);

  
}