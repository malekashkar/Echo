const Discord = require('discord.js');
const mysql = require('mysql');
const fs = require('fs');
const Enmap = require('enmap');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
require("dotenv").config();

const con = mysql.createConnection({
    host: "188.40.194.152",
    user: "pixelhaze",
    password: "Echo099",
    database: "Echo"
})

con.connect(function(err, rows) {
    if(err) return console.log(err);
    console.log(`Database is up!`)
})

client.config = config;
client.commands = new Enmap();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.login(process.env.token);