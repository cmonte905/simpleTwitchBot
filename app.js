var tmi = require('tmi.js');

var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect : true
	},
	identity: {
		username: "lenny_face_bot",
		password: //apikey, found @http://twitchapps.com/tmi/
	},
	channels: ["stanseven"]

};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port){
	client.action("stanseven", "( ͡° ͜ʖ ͡°) you have been struck by a smooth criminal ( ͡° ͜ʖ ͡°)\n" +
	" ( ͡° ͜ʖ ͡°) \n type !help for more options ( ͡° ͜ʖ ͡°) ");
});

client.on('chat', function(channel, user, message, self){
	
	if(message === "!twitter")	 {
		client.action("stanseven", "no twitter for you you twit\n( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°)  ( ͡° ͜ʖ ͡°) ");
	}
	else if(message === "!help"){
		console.log(user +" " +  message);
		client.action("stanseven", "there is !twitter and thats about it ( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°) ");
	}	
	

});
