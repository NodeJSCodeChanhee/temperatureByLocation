// function doWork(data, callback){
// 	callback('done');
// 	callback('done second');
// }

// function doWorkPromise(data){
// 	return new Promise(function(resolve, reject){
	
// 		setTimeout(function(){
// 			reject('Everything is broken!');
// 		}, 1000);
// 		// reject({
// 		// 	error: 'something bad happened'
// 		// });
// 	});
// }

// doWorkPromise('some data').then(function (data){
// 	console.log(data);
// }, function(err){
// 	console.log(err);
// });
/*
var weather = require('./weather.js');

function getWeather(location){
	// return promise
	//
	return new Promise(function(resolve, reject){
		weather(location, function(currentWeather){
			if(!currentWeather) {
				reject('no location detected!');
			} else {
				resolve(currentWeather);
			}
		});
	});
}*/

var request = require('request');

function getWeather(location){
	return new Promise(function(resolve, reject) {

	var encodedLocation = encodeURIComponent(location);

	var url = 'http://api.openweathermap.org/data/2.5/weather?appid=d876ed4046ad7d5c43175c5cfa095157&q='+encodedLocation+'&units=imperial';

	if (!location){
		return reject('unable to guess lcoation');
	}
	request({
	url: url, 
	json:true
	}, function(error, response, body){
		if(error){
			reject('Unable to fetch weather.');	
		} else {
				//console.log(JSON.stringify(body, null, 4));
				// It's 77.77 in Philadelphia.
			resolve('It\'s ' + body.main.temp + ' in  ' + body.name + '!');
		}
     });


	}); 
}









getWeather('san francisco').then(function (currentWeather){
	console.log(currentWeather);
}, function(err){
	console.log(err);
})