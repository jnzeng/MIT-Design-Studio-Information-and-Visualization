function setup() {
    createCanvas(414, 736);


}

function draw() { 
  background(0);
let hr = hour();
let mn = minute();
let sc = second();
fill(255);
noStroke();
textAlign(CENTER);
textSize(100);

if(hr/10<1)
text('0',185,200);
else{
var f = String(hr).charAt(0);
text(f, 185, 200);
}
text(hr%10,240,200);
textSize(15);
if (second() % 2 == 0) {
if(sc/10<1)
text('0',185,222);
else{
var f = String(sc).charAt(0);
text(f, 185, 222);
}
text(sc%10,240,222);
}
textSize(100);
if(mn/10<1)
text('0',185,300);
else{
var f = String(mn).charAt(0);
text(f, 185, 300);
}
text(mn%10,240,300);
}



