var url = 'http://ipinfo.io';
var request = require('request');




module.exports = function(callback){
		return new Promise(function(resolve, reject){
			request({
				url : url,
				json : true
			}, function(error, response, body){
				if(error){
				reject('unable to trace location');
			} else {
				resolve(body);
			}
			});




		});
		
};
//module exports to create function
// make request to url for json
 // if error callback()
 // else callback(body)