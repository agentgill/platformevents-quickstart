var jsforce = require('jsforce');
require('dotenv').config();
var username = process.env.SFDC_USER;
var password = process.env.SFDC_PWD;
var conn = new jsforce.Connection({});
conn.login(username, password, function(err, userInfo) {
	console.log('Subscribing to platform events...' + process.env.EVENT_TYPE);
	if (err) {
		return console.error(err);
	}
	conn.streaming.topic(process.env.EVENT_TYPE).subscribe(function(message) {
		console.dir(message);
	});
});
