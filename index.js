const Discord = require('discord.js');
const mysql = require('mysql');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
require("dotenv").config();

const con = mysql.createConnection({
    host: "188.40.194.152",
    user: "root",
    password: "Echo099",
    database: "echo"
}) 

con.connect(function(err) {
    if(err) return console.log(err);
    console.log(`Database is up!`)
})
client.login(process.env.token);