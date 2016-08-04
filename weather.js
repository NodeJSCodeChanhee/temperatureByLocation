var request = require('request');


module.exports = function (location){
	//console.log('Got weather!');
	// move url into here.
	// somesite.com/a%20test
	// a test
	// encodeURIComponent(location);
	return new Promise(function(resolve, reject){
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

