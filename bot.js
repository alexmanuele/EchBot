const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
var nightcore = false;
client.on('ready', () => {
	console.log(`logged in as ${client.user.tag}`);
});

client.on('message', msg => {
	
	if(msg.content === 'ech'){
		msg.channel.send("<:cato:608278702677295114>");

	}
	else if(msg.content.substring(0, 7) === 'echtify'){
		var words = msg.content.split(" ");
		var out = [];
		for (var i = 1; i < words.length; i++){
			out.push(words[i].substring(0, (words[i].length -1)).concat('ech'));

		
		}
		var reply = out.join(' ');
		msg.channel.send(reply);
		msg.channel.send("<:cato:608278702677295114>");
	}
	else if(msg.content.substring(0, 9) === 'echbot ur'){
		msg.channel.send("<:cato:608278702677295114> No u");
	}
	else if(msg.content.substring(0, 6) === 'topech'){
		msg.channel.send("<:topech:681887390457266217>");
	}
	else if (msg.content.substring(0,20) === 'echbot which channel'){
		msg.channel.send("rly? <:cato:608278702677295114>");
		var rand = Math.random();
		var choice = "";
		if (rand < 0.50){
			choice = "Lakeside. <:cato:608278702677295114>";
		}else{
			choice = "Dreamers. <:cato:608278702677295114>";
		}
		msg.channel.send(choice);
	}
	else if (msg.content.substring(0, 10) === '-nightcore'){
		if(!nightcore){
			msg.channel.send("Yare yare <@&624584899135012892> <:cato:608278702677295114>");
			nightcore = true;
		}else{
			msg.channel.send("Finally <:cato:608278702677295114> <:cato:608278702677295114> <:cato:608278702677295114>");
			nightcore = false;
		}
	}
	else if (msg.content.substring(0, 7) === 'ech cal'){
		msg.channel.send('!display');
	}
	else if (msg.content.split(" ").slice(0,2).join() === 'echbot,randomize'){
		var people = msg.content.split(" ").slice(2,);
		var i = people.length, temp, index;
		while (i > 0){
			index = Math.floor(Math.random() * i);
			i--;
			temp = people[i];
			people[i] = people[index];
			people[index] = temp;		
		}
		var output = people.join(" ");
		msg.channel.send("<:cato:608278702677295114> "+ output);
		
	}
	else if (msg.content.split(" ").slice(0,2).join() === 'echbot,google'){
		var query = msg.content.split(" ").slice(2,).join("+");
		var link = "https://google.com/search?q=" + query + "&btnI";
		msg.channel.send("<:cato:608278702677295114><:cato:608278702677295114><:cato:608278702677295114>");
		msg.channel.send(link);
		
	}
	/*
	if (msg.content.includes("ech")){
		msg.react("608278702677295114");
	} */
	var ech_match = msg.content.match(/ech/g);
	var num_echs = 0;
	if (ech_match){
		num_echs = ech_match.length;
	}
	if (num_echs >= 1){
		msg.react("641623783056080926");
	}
	if (num_echs >= 2){
		msg.react("689165389187645516");
	}
	if (num_echs >= 3){
		msg.react("706929477510365269");
	}
	if (num_echs >= 4){
		msg.react("734844270590033923");
	}
	if (num_echs >= 5){
		msg.react("734844270258946050");
	}
	if (num_echs >= 6){
		msg.react("734844270145568910");
	}
	if (num_echs >= 7){
		msg.react("734844270204420157");
	}
	if (num_echs >= 8){
		msg.react("734844267834507428");
	}
	if (num_echs >= 9){
		msg.react("734844270573256884");
	}
	if (num_echs >= 10){
		msg.react("734844268065062973");
	}
	if (num_echs >= 11){
		msg.react("734844270875246791");
	}
	if (num_echs >= 12){
		msg.react("734844270795554826");
	}
	if (num_echs >= 13){
		msg.react("734844270330118235");
	}

});

client.login(auth.token);

