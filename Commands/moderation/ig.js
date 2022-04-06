const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'report',
  execute(client, message, args) {
    const channel = client.channels.cache.get('YOUR REPORT CHANNEL');
    const query = args.join(" ");
    if(!query[0]) return message.reply("please specify a bug");
    const embed = new MessageEmbed()
    .setTitle("YOUR TEXT")
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL())
    .addFields(
      {name: 'Author', value: `${message.author.tag}`},
      {name: 'ID', value: `${message.author.id}`},
      {name: 'Guild', value: `${message.guild.name}`},
      {name: 'Bug', value: `${query}`}
      )
      message.reply({content: 'succesfully sent!'});
      message.channel.send({embeds : [embed]})
      
  }
}