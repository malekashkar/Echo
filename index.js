const Discord = require('discord.js');
const mysql = require('mysql');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
require("dotenv").config();

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
}) // hold up im gonna go install mysql on a vps
// 188.40.194.152 - let me find password
// Echo099 @Deposit <3

client.on("messageReactionAdd", async reaction => {
    
});

client.login(process.env.token);