let trees;
let apple;
//add more apples? how many?
let basket;
let x, y;

function preload() {
  trees = loadImage('assets/trees.jpg');
  apple = loadImage('assets/apple.png');
  basket = loadImage('assets/basket.png');
}

function setup() {
  // put setup code here
  // trees = loadImage('assets/trees.jpg');
  // apple = loadImage('assets/apple.png');
  // basket = loadImage('assets/basket.png');
  createCanvas(280, 180);
  //set x starting location for apple at random x
  x = random(0, 280);
  //set y to top of screen for apple to start falling
  y = 0;
}

function draw() {
  // put drawing code here, animation
  //set background
  background(trees);
  //move the apple?
  apple(x, y);
  y = y + 1;

  //move basket when left and right arrow are pressed
  if ((keyIsPressed == true) && (keyCode === LEFT_ARROW)) {
    //shift basket left
  } else if ((keyIsPressed == true) && (keyCode === RIGHT_ARROW)) {
    //shift basket right
  }
  else {
    // do nothing
  }

  //if apple hits bottom of screen, put back at top at random x location and decrease lives
  //if apple touches basket, put back at top at random x location and increase score
  //how many apples to fall at once? how far apart (timewise)
  //what if you touch the apple with the side of the basket?
  //how to move images?
  //why won't my trees show up?


}
