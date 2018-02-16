function setup() {
    createCanvas(414, 736);


}

function draw() { 
let hr = hour();
let mn = minute();
let sc = second();
  background(255);
fill(0);
if(hr>12)
hr-=12;
textAlign(CENTER);
textSize(15);
text(hr + ':' + mn + ':' + sc, 212, 30);
  rect(70, 358, 274, 1);
var h = 16;
for(i=0; i<12-hr; i++) //loop for hours fill circles
{
fill(0);
    ellipse(135, 350.5 - h*i, 15, 15);
}
var m = 5.3;
for(i=0; i<60-mn; i++) //loop for minutes fill circles
{
fill(0);
    ellipse(207, 355.5 - m*i, 5, 5);
}
var s = 5.3;
for(i=0; i<60-sc; i++) //loop for seconds fill circles
{
fill(0);
    ellipse(284, 355.5 - s*i, 5, 5);
}
for(i=0; i<hr; i++) //loop for hours empty circles
{
fill(255);
    ellipse(135, 367.5 + h*i, 15, 15);
}
for(i=0; i<mn; i++) //loop for minutes empty circles
{
fill(255);
    ellipse(207, 362.5 + m*i, 5, 5);
}
for(i=0; i<sc; i++) //loop for seconds empty circles
{
fill(255);
    ellipse(284, 362.5 + s*i, 5, 5);
}
}
