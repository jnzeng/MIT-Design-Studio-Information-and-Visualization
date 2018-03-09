
//plots


// var url = 'https://api.darksky.net/forecast/c6b293fcd2092b65cfb7313424b2f7ff/42.361145,-71.057083'

d3.json("data/boston_weather.json", draw);


var mobile1 = d3.select('#mobile1');
var mobile2 = d3.select('#mobile2');

function draw(error, data){

    var fahrenheit = true;
    var nowTime = new Date(data.currently.time * 1000);
    var todayTemp = data.currently.temperature;
   mobile1.select('.todayTemp').text(Math.floor(todayTemp));
    mobile1.select('.iconName').text(data.currently.icon);
    mobile1.select('.range').text('▲ ' + Math.floor(data.daily.data[0].temperatureHigh) + '  ▼ ' + Math.floor(data.daily.data[0].temperatureLow));
    mobile1.select('.feelsLike').text(Math.floor(data.currently.apparentTemperature));
    
    var hours = nowTime.getHours;
   // mobile1.select('.todayTemp').text(hours);
//    if (nowTime.getHours>=0 && nowTime.getHours <=2)
//        mobile1.select('.hour0').style('background', 'linear-gradient(to right, #93a8d1, #93a8d1)');
//    
//    if (nowTime.getHours>=2 && nowTime.getHours <=4)
//        mobile1.select('.hour0').style('background', 'linear-gradient(to right, #bcb8d1, #93a8d1, #93a8d1, #93a8d1)');
    
      if (nowTime.getHours>=0 && nowTime.getHours <=2)
       mobile1.select('.hour0').style('background', 'linear-gradient(to right, #bcb8d1, #93a8d1, #93a8d1, #93a8d1)');
//    
//      if (nowTime.getHours>=0 && nowTime.getHours <=2)
//        mobile1.select('.hour0').style('background', 'linear-gradient(to right, #93a8d1, #93a8d1)');
//    
//      if (nowTime.getHours>=0 && nowTime.getHours <=2)
//        mobile1.select('.hour0').style('background', 'linear-gradient(to right, #93a8d1, #93a8d1)');
//    
//      if (nowTime.getHours>=0 && nowTime.getHours <=2)
//        mobile1.select('.hour0').style('background', 'linear-gradient(to right, #93a8d1, #93a8d1)');
//    
//      if (nowTime.getHours>=0 && nowTime.getHours <=2)
//        mobile1.select('.hour0').style('background', 'linear-gradient(to right, #93a8d1, #93a8d1)');
//    
//      if (nowTime.getHours>=0 && nowTime.getHours <=2)
//        mobile1.select('.hour0').style('background', 'linear-gradient(to right, #93a8d1, #93a8d1)');
//    
//      if (nowTime.getHours>=0 && nowTime.getHours <=2)
//        mobile1.select('.hour0').style('background', 'linear-gradient(to right, #93a8d1, #93a8d1)');
//    
//      if (nowTime.getHours>=0 && nowTime.getHours <=2)
//        mobile1.select('.hour0').style('background', 'linear-gradient(to right, #93a8d1, #93a8d1)');
//    
//      if (nowTime.getHours>=0 && nowTime.getHours <=2)
//        mobile1.select('.hour0').style('background', 'linear-gradient(to right, #93a8d1, #93a8d1)');
//    
//      if (nowTime.getHours>=0 && nowTime.getHours <=2)
//        mobile1.select('.hour0').style('background', 'linear-gradient(to right, #93a8d1, #93a8d1)');
//    
    var todayIcon = data.currently.icon;
    document.getElementById("weather").src = 'raining.gif';
   // document.getElementById("weather").src = 'cloud.png';
     //document.getElementById("weather").src = 'snow.png';
    
    var tm1 = nowTime.getHours + 1;
    
    mobile1.select('.tempm1').text(Math.floor(data.hourly.data[0].temperature)+'°F');
    mobile1.select('.temp').text(Math.floor(data.hourly.data[1].temperature)+'°F');
    mobile1.select('.temp1').text(Math.floor(data.hourly.data[2].temperature)+'°F');
    mobile1.select('.temp2').text(Math.floor(data.hourly.data[3].temperature)+'°F');
    
    document.getElementById("weatherm1").src = 'clear.png';
    document.getElementById("weathern").src = 'raining.gif';
    document.getElementById("weather1").src = 'cloud.png';
    document.getElementById("weather2").src = 'snow.png';
    
    //mobile1.select('.tm1').text('1：00')；
    
     mobile1.select('.hour2').style('background', 'linear-gradient(to right, #bcb8d1, #93a8d1, #93a8d1, #93a8d1)');
    
//    mobile1.select('.weeklyTemp').text(Math.floor(data.daily.data[1].temperatureLow) + '        ' + Math.floor(data.daily.data[2].temperatureLow)+ '        ' + Math.floor(data.daily.data[3].temperatureLow)+ '        ' + Math.floor(data.daily.data[4].temperatureLow));
    
    document.getElementById("art").src = 'artwork.png';
    document.getElementById("weatherw").src = 'rainwindow.png';
    

}


