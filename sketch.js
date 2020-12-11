var hr, min, sec;
var hrAngleMode, minAngleMode, secAngleMode;

function setup() {
  createCanvas(700,500);
  angleMode(DEGREES);
}

function draw() {
  background(20, 20, 20);  
  translate(350, 250);
  rotate(-90);

  //To calculate time (p5.js)
  hr = hour();
  min = minute();
  sec = second();

  //Map Format
  //map(value, start1, stop1, start2, stop2);

  //To compute the angle for secs, min & hour hand
  secAngleMode = map(sec, 0, 60, 0, 360);
  minAngleMode = map(min, 0, 60, 0, 360);
  hrAngleMode = map(hr%12, 0, 12, 0, 360);

  //To draw seconds hand
  push();
  rotate(secAngleMode);//Rotate it based on the angle
  stroke("red");
  strokeWeight(8);
  line(0, 0, 90, 0);
  pop();

  //To draw mins hand
  push();
  rotate(minAngleMode);//Rotate it based on the angle
  stroke("yellow");
  strokeWeight(8);
  line(0, 0, 75, 0);
  pop();

  //To draw hour hand
  push();
  rotate(hrAngleMode);//Rotate it based on the angle
  stroke("blue");
  strokeWeight(8);
  line(0, 0, 50, 0);
  pop();

  //To focus on center
  strokeWeight(2);
  stroke("white");
  point(0, 0);

  //To draw arcs
  strokeWeight(10);
  noFill();

  stroke("red");
  arc(0, 0, 300, 300, 0, secAngleMode);

 
  stroke("yellow");
  arc(0, 0, 280, 280, 0, minAngleMode);

  stroke("blue");
  arc(0, 0, 260, 260, 0, hrAngleMode);

}
