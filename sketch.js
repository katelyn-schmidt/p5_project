let trees;
let apple;
let apple2;
let basket;
let x1, y1, x2, y2;
let basketX;
let score;
let lives;

function preload() {

  // trees = loadImage("http://localhost:8000/assets/trees.jpg");
  // apple = loadImage("http://localhost:8000/assets/apple6.png");
  // basket = loadImage("http://localhost:8000/assets/basket3.png");
  // apple2 = loadImage("http://localhost:8000/assets/apple6.png");
  trees = loadImage("assets/trees.jpg");
  apple = loadImage("assets/apple6.png");
  basket = loadImage("assets/basket3.png");
  apple2 = loadImage("assets/apple6.png");
}

function setup() {
  // put setup code here
  createCanvas(960, 541);
  //set x starting location for apple at random x
  x1 = random(0, 960-90);
  x2 = random(0, 960-90);
  //set y to top of screen for apple to start falling
  y1 = 0;
  y2 = -400;

  basketX = width/2-60;

  score = 0;
  lives = 3;
}

function draw() {
  // put drawing code here, animation
  background(trees);

  textSize(38);
  fill(255, 255, 255);
  textFont('Kristen ITC');
  text("Score: " + score, 40, 40);
  text("Lives: " + lives, 40, 80);

  image(apple, x1, y1);
  image(apple2, x2, y2);
  image(basket, basketX, height-100);


  //move basket when left and right arrow are pressed
  if ((keyIsPressed == true) && (keyCode === LEFT_ARROW)) {
    //shift basket left
    basketX -= 4;
  }

  if ((keyIsPressed == true) && (keyCode === RIGHT_ARROW)) {
    basketX += 4;
  }

  //move apples
  y1 = y1 + 2;
  y2 = y2 + 2;

  if (y1 == 540) {
    y1 = 0;
    x1 = random(0, 960-90);
    //decrease life count
    lives -= 1;
  } else if (x1+35 >= basketX && x1+50 <=  basketX+168 && y1+64 >= 541-50) { //find a better way to do this
    //increase score count
    y1 = y1 + 100;
    y1 = 0;
    x1 = random(0, 960-90);
    score += 1;
  }

  if (y2 == 540) {
    y2 = -300;
    x2 = random(0, 960-90);
    //decrease life count
    lives -= 1;
  } else if (x2 >= basketX && x2 <=  basketX+168 && y2+64 >= 541-50) {
    //increase score count
    y2 = y2 + 100;
    y2 = 0;
    x2 = random(0, 960-90);
    score += 1;
  }


  if (lives == 0) {
    //print Game Over
    //display total score
    background(trees);
    textSize(60);
    text("GAME OVER", width/2-170, height/2-10)
    textSize(50);
    text("Total Score: " + score, width/2-160, height/2+55);
    noLoop();

  }

}
