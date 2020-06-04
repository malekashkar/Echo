module.exports = async(client, reaction, user) => {
    if(user.bot) return;
    if(reaction.message.partial) reaction.message.fetch();
    let message = reaction.message;


}