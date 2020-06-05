module.exports = async(client, reaction, user, con) => {
    if(user.bot) return;
    if(reaction.message.partial) reaction.message.fetch();
    let message = reaction.message;
    let guildID = message.guild.id;
    con.query(`SELECT * FROM setup WHERE guildID = ?`, [guildID], function(err, rows) {
        if(err) return message.channel.send(err);
        if(!rows[0]) return;
        if(message.id === rows[0].messageID){

        }
    })
}