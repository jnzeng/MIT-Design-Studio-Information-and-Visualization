function setup() {
    createCanvas(414, 736);


}

function draw() { 
  background(255);
let hr = hour();
let mn = minute();
let sc = second();
fill(0);
if(hr>12)
hr-=12;
textAlign(CENTER);
textSize(15);
text(hr + ':' + mn + ':' + sc, 212, 30);
var hw = 14;
var hl = 2.6;
for(i = 1; i<=hr; i++)
line(207, 292 - hw*i, 209.6 + hl*i, 292 - hw*i);
  var mw = 2.8;
var ml = 0.5;
for(i = 1; i<=mn; i++)
line(206.5 - ml*i, 320 + mw*i, 207, 320 + mw*i);
var sw = 2.8;
var sl = 0.5;
for(i = 1; i<=sc; i++)
line(207, 695 - sw*i, 206.5 + sl*i, 695 - sw*i);
}
