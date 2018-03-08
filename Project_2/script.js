
//plots


// var url = 'https://api.darksky.net/forecast/c6b293fcd2092b65cfb7313424b2f7ff/42.361145,-71.057083'

d3.json("data/boston_weather.json",draw);

function draw(error,data){
  

}


// Define the gradient
var gradient = svg.append("svg:defs")
    .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

// Define the gradient colors
gradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "#a00000")
    .attr("stop-opacity", 1);

gradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "#aaaa00")
    .attr("stop-opacity", 1);

// Fill the circle with the gradient
var circle = svg.append('circle')
    .attr('cx', width / 2)
    .attr('cy', height / 2)
    .attr('r', height / 3)
    .attr('fill', 'url(#gradient)');