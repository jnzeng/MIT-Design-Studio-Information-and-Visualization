
//plots


// var url = 'https://api.darksky.net/forecast/c6b293fcd2092b65cfb7313424b2f7ff/42.361145,-71.057083'

// d3.json("data/boston_weather.json", draw);

$.ajax({
	url: 'https://api.darksky.net/forecast/26cf26ae841e56e986e34b5087c679d2/42.361145,-71.057083',
	dataType: 'JSONP',
	type: 'GET',
	crossDomain: true,
	complete: function (data) {
		if (data.readyState == '4' && data.status == '200') {
			draw(null, data.responseJSON)
		} else {
			draw(new Error('Failed to fetch data'))
		}
	}
})


var mobile1 = d3.select('#mobile1');
var mobile2 = d3.select('#mobile2');

function formatTime(timestp) {
	var hr = new Date(timestp*1000).getHours();
	var hr_24 = hr
	var ampm = hr >= 12 ? 'pm' : 'am';
	hr = hr % 12;
	hr = hr ? hr : 12; // the hour '0' should be '12'
	var strTime = hr + ampm;
	return {
		hr_12: strTime,
		hr_24: hr_24
	};
}

function iconToImg(icon) {
	var currImg;
	if (icon == 'rain') {
		currImg = 'rain_2.gif'
	} else if (icon == 'snow' || icon == 'sleet') {
		currImg = 'snow_2.png'
	} else if (icon.indexOf('cloudy') !== -1) {
		currImg = 'cloud_2.png'
	} else {
		currImg = ""
	}
	return currImg
}

function backgdColor(hr, cls) {

	const el = document.querySelector('#mobile1 .today ' + cls)

	if ([0, 1, 23, 24].includes(hr)) {
		el.style.background = 'linear-gradient(to right, #bcb8d1, #93a8d1, #93a8d1, #93a8d1)';
	} else if ([2, 3].includes(hr)) {
		el.style.background = 'linear-gradient(to right, #bcb8d1, #93a8d1, #93a8d1, #93a8d1)';
	} else if ([22, 21].includes(hr)) {
		el.style.background = 'linear-gradient(to left, #bcb8d1, #93a8d1, #93a8d1, #93a8d1)';
	} else if ([4, 5].includes(hr)) {
		el.style.background = 'linear-gradient(to right, #cec0cf, #93a8d1, #93a8d1)';
	} else if ([20, 19].includes(hr)) {
		el.style.background = 'linear-gradient(to left, #cec0cf, #93a8d1, #93a8d1)';
	} else if ([6, 7].includes(hr)) {
		el.style.background = 'linear-gradient(to right, #d8c4d0, #b9b7cf, #93a8d1)';
	} else if ([18, 17].includes(hr)) {
		el.style.background = 'linear-gradient(to left, #d8c4d0, #b9b7cf, #93a8d1)';
	} else if ([8, 9].includes(hr)) {
		el.style.background = 'linear-gradient(to right, #e1c7d0, #e1c7d0, #beb8d0, #93a8d1)';
	} else if ([16, 15].includes(hr)) {
		el.style.background = 'linear-gradient(to left, #e1c7d0, #e1c7d0, #beb8d0, #93a8d1)';
	} else if ([10, 11].includes(hr)) {
		el.style.background = 'linear-gradient(to right, #f5cecf, #f5cecf, #cbbed0)';
	} else if ([13, 14].includes(hr)) {
		el.style.background = 'linear-gradient(to left, #f5cecf, #f5cecf, #cbbed0)';
	} else {
		el.style.background = 'linear-gradient(to right, #f5cfcf, #f5cfcf)';
	}
}

function draw(error, data){
	if (error) {
		throw error
	}
	// console.log(data)
	var fahrenheit = true;
	var nowTime = new Date(data.currently.time * 1000);
	var currTemp = data.currently.temperature;
	mobile1.select('.currTemp').text(Math.floor(currTemp));
    mobile2.select('.currTemp').text(Math.floor(currTemp));
	mobile1.select('.iconName').text(data.currently.icon);
	mobile1.select('.range').text('▲ ' + Math.floor(data.daily.data[0].temperatureHigh) + '   ▼ ' + Math.floor(data.daily.data[0].temperatureLow));
    mobile2.select('.range').text(Math.floor(data.daily.data[0].temperatureHigh) + '   ~ ' + Math.floor(data.daily.data[0].temperatureLow));
	mobile1.select('.feelsLike').text(Math.floor(data.currently.apparentTemperature));
    mobile2.select('.feelsLike').text('Feels like ' + Math.floor(data.currently.apparentTemperature) + '°F,');
    mobile2.select('.humidityy').text('humidity ' + Math.floor(data.currently.humidity * 100) + '°%,');
    mobile2.select('.windSpd').text('wind speed ' + Math.floor(data.currently.windSpeed) + 'm/s,');
	
	var todayIcon = data.currently.icon;
	
	currImg = iconToImg(todayIcon)

	// currImg = 'cloud_2.png'
	// todayIcon = 'fog'
	document.getElementById("weather").src = currImg;

	backgdColor(nowTime.getHours(), '.circle')

	// if (todayIcon == 'fog') {
	// 	document.getElementById("circle").style.opacity = 0.5;
	// }
	   // document.getElementById("weather").src = 'cloud.png';
		 //document.getElementById("weather").src = 'snow.png';
		 
	 var tm1 = nowTime.getHours() + 1;

	 var time1 = formatTime(data.hourly.data[0].time);
	 curr_before1 = time1.hr_12;
	 curr_before1_24 = time1.hr_24;

	 var time_n = formatTime(data.hourly.data[1].time);
	 curr_n = time_n.hr_12;
	 curr_n_24 = time_n.hr_24;

	 var time2 = formatTime(data.hourly.data[2].time);
	 curr_after1 = time2.hr_12;
	 curr_after1_24 = time2.hr_24;

	 var time3 = formatTime(data.hourly.data[3].time);
	 curr_after2 = time3.hr_12;
	 curr_after2_24 = time3.hr_24;

	 // curr_after1 = formatTime(data.hourly.data[2].time)
	 // curr_after2 = formatTime(data.hourly.data[3].time)
	 
	 mobile1.select('.tempm1').text(Math.floor(data.hourly.data[0].temperature)+'°F');
	 mobile1.select('.curr_before1').text(curr_before1);

	 backgdColor(curr_before1_24, '.circle-small1');
	 backgdColor(curr_n_24, '.circle-small2');
	 backgdColor(curr_after1_24, '.circle-small3')
	 backgdColor(curr_after2_24, '.circle-small4')

	 mobile1.select('.temp').text(Math.floor(data.hourly.data[1].temperature)+'°F');
	 mobile1.select('.temp1').text(Math.floor(data.hourly.data[2].temperature)+'°F');
	 mobile1.select('.curr_after1').text(curr_after1);
	 mobile1.select('.temp2').text(Math.floor(data.hourly.data[3].temperature)+'°F');
	 mobile1.select('.curr_after2').text(curr_after2);


	 
	 document.getElementById("weatherm1").src = iconToImg(data.hourly.data[0].icon);
	 document.getElementById("weathern").src = iconToImg(data.hourly.data[1].icon);
	 document.getElementById("weather1").src = iconToImg(data.hourly.data[2].icon);
	 document.getElementById("weather2").src = iconToImg(data.hourly.data[3].icon);
	 
	//mobile1.select('.tm1').text('1：00')；
	
	mobile1.select('.hour2').style('background', 'linear-gradient(to right, #bcb8d1, #93a8d1, #93a8d1, #93a8d1)');
	
	//    mobile1.select('.weeklyTemp').text(Math.floor(data.daily.data[1].temperatureLow) + '        ' + Math.floor(data.daily.data[2].temperatureLow)+ '        ' + Math.floor(data.daily.data[3].temperatureLow)+ '        ' + Math.floor(data.daily.data[4].temperatureLow));

	document.getElementById("art").src = 'artwork.png';
	document.getElementById("weatherw").src = 'rainwindow.png';


}


