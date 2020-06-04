const Discord = require('discord.js');
const mysql = require('mysql');
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

client.on("messageReactionAdd", async reaction => {
    
});

client.login(process.env.token);