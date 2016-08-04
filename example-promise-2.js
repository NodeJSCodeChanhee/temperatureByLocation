/*function doWork(shouldFail) {
	return new Promise(function (resolve, reject){
		setTimeout(function (){
			if(typeof shouldFail === 'boolean' && shouldFail === true) {
				reject('error message');
			} else {
				resolve('success');
			}
		}, 1000);
	});
}

doWork(true).then(function(message){
	console.log(message);
	return doWork(true);
}).then(function(message){
	console.log(message);
	
}).catch(function (error) {
	console.log(error);
});*/
var weather = require('./weather.js');
var location = require('./location.js');

var request = require('request');

function getLocation(location) {
	// return promise;
	// resolve(Philadelphia)
	/*var location={

		 };
	return new Promise(function (resolve, reject){
		request({
			url : url,
			json : true
		}, function(error, response, body){
			if(error){
				reject(error);
			} else {
				
				location.city=body.city;
				location.loc=body.loc;
				resolve(location);
			}
		});
	});*/
	return new Promise(function(resolve, reject) {
 		resolve('Philadelphia');
 	});
}

function getWeather (location) {
	// return promise
	// resolve(its 78 in location)
	/*var encodedLocation = encodeURIComponent(location);

	var url = 'http://api.openweathermap.org/data/2.5/weather?appid=d876ed4046ad7d5c43175c5cfa095157&q='+encodedLocation+'&units=imperial';

	if (!location){
		return callback('unable to guess lcoation');
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
 }); */
 	return new Promise(function(resolve, reject){
 		resolve('It is 78 in ' + location + '!');
 	});

}



//getLocation.then
// return getWheather (location)
// then
//  console.log(currentWeather);

getLocation().then(function(location){
	return getWeather(location);
}).then(function(currentWeather){
	console.log(currentWeather);
});