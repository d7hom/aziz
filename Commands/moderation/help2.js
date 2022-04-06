	
const { MessageActionRow ,MessageSelectMenu , MessageEmbed} = require('discord.js');
 
module.exports = {
  name: 'help1',
  async execute(client, message, args) {
      
    let row = new MessageActionRow()
 
    .addComponents(
      new MessageSelectMenu()
          .setPlaceholder('click me to view commands')
          .setCustomId('menu-select')
          .addOptions([
                  {
                  label: '📢 General Commands',
                  description: 'to Viuo Public Commands',
                  value: 'pul'
                  },
                  {
                  label: '🛠 Admin Commands',
                  description: 'to Viuo Admin Commands',
                  value: 'adm'
                  },
                  {
                  label: '🎶 : Music Commands',
                  description: 'to Viuo Music Commands',
                  value: 'mus'
                  }
          ])
            )
 
            let embed = new MessageEmbed()
            .setDescription(`**
            Hey ${message.author.username} , iam ${client.user.username}
> A Discord Bot With Many Awesome Features
> Help Related To Nopes Bot Commands:
📢 : General Commands
🛠 : Admin Commands
🎶 : Music Commands
✨ Select A Category From The Menu 
            **`)
            .setColor('ORANGE')
 
 
    let m = await message.channel.send({embeds : [embed], components :[row]})
 
    const collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000})
 
    collector.on('collect', async i => {
      if(i.values[0] === 'pul' || i.values[1] === 'pul'){
 
        m.edit({embeds : [
          new MessageEmbed()
          .setAuthor({name : `welcome to General Commands`, iconURL : client.user.avatarURL()})
          .setThumbnail(client.user.avatarURL())
          .setColor('ORANGE')
          .setDescription(`
          > \`${prefix}user\`: **user info**
          `)
          .setFooter({text : client.user.username , iconURL : client.user.avatarURL()})
        ]})
 
      }
      if(i.values[0] === 'adm' || i.values[1] === 'adm'){
 
        m.edit({embeds : [
          new MessageEmbed()
          .setAuthor({name : `welcome to Admin Commands`, iconURL : client.user.avatarURL()})
          .setThumbnail(client.user.avatarURL())
          .setColor('ORANGE')
          .setDescription(`
          > \`ban\`: **ban info**
          > \`kick\`: **kick info**
          `)
          .setFooter({text : client.user.username , iconURL : client.user.avatarURL()})
        ]})
 
 
      }
 
      if(i.values[0] === 'mus' || i.values[1] === 'mus'){
 
        m.edit({embeds : [
          new MessageEmbed()
          .setAuthor({name : `welcome to  Music Commands `, iconURL : client.user.avatarURL()})
          .setThumbnail(client.user.avatarURL())
          .setColor('ORANGE')
          .setDescription(`
          > \`play\`: **play info**
          `)
          .setFooter({text : client.user.username , iconURL : client.user.avatarURL()})
        ]})
 
        
      }
 
 
    })
 
  }
}