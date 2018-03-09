
//plots


// var url = 'https://api.darksky.net/forecast/c6b293fcd2092b65cfb7313424b2f7ff/42.361145,-71.057083'

d3.json("data/boston_weather.json", draw);


var mobile1 = d3.select('#mobile1');

function draw(error, data){

    var fahrenheit = true;
    var nowTime = new Date(data.currently.time * 1000);
    var todayTemp = data.currently.temperature;
   // mobile1.select('.todayTemp').text(Math.floor(todayTemp));
    mobile1.select('.todayTemp').text(nowTime.getHours);
    
    if (nowTime.getHours>=10 && nowTime.getHours <=24)
        //mobile1.select('.hour0').style('background', 'linear-gradient(to right, #93a8d1, #93a8d1)');
    
    if (nowTime.getHours>=0 && nowTime.getHours <=10)
        mobile1.select('.hour0').style('background', 'linear-gradient(to right, #bcb8d1, #93a8d1, #93a8d1, #93a8d1)');
    
    var todayIcon = data.currently.icon;
    

}


