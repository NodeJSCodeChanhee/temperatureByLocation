var request = require('request');

var url = 'http://api.openweathermap.org/data/2.5/weather?appid=d876ed4046ad7d5c43175c5cfa095157&q=Philadelphia&units=imperial';



var weather = require('./weather.js');
var location = require('./location.js');




var argv = require('yargs')
		.option('location', {
			alias : 'l',
			demand : false,
			describe : 'location to fetch weather for',
			type : 'string'
		})
		.help('help')
		.argv;
// setup yargs to have a --location or -l argument
/*
var argv = require('yargs')
			.command('location', 'Get a weather information from a new location', function(yargs){
				yargs.options({
					location : {
						demand : true,
						alias : 'l',
						description : 'location name',
						type: 'string'
					}
				}).help('help');
			}).help('help').argv;

var command = argv_[0]; */


/*
weather(function(currentWeather){
	console.log(currentWeather);
});

location(function(location){
	if(!location){
		console.log('unable to guess locations');
	} else {
		console.log('city: ' + location.city);
		console.log('log/lat :' + location.loc);	
	}
}); */

// if location provided 
// 		call weather (location, callback)
// else 
// call location 
// 		call weather(location, callback)
if(typeof argv.l === 'string' && argv.l.length > 0){
	console.log('has location');
	/*weather(argv.l, function(currentWeather){
			console.log(currentWeather);
	});*/
	weather(argv.l).then(function(currentWeather){
		console.log(currentWeather);
	}).catch(function(error){
		console.log(error);
	});
} else {
	console.log('no location given');
	// location(function(location){
	// 	if(location){
	// 		weather(location.city, function(currentWeather){
	// 			console.log(currentWeather);
	// 		});
	// 	} else {
	// 		console.log('Unable to guess location');
	// 	}
	// });
	location().then(function(loc){
		return weather(loc.city);
	}).then(function(currentWeather){
		console.log(currentWeather);
	}).catch(function(error){
		console.log(error);
	});
}