
const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'help',

    async execute(client, message, args) {
        
        let embed = new MessageEmbed()
   .setColor("LUMINOUS_VIVID_PINK") 
   .setTitle('Here is the list of my commands! Prefix [.21]')
   .setAuthor('Help Menu ๐ฐ')
   .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
   .addFields({
       name: 'About this bot',
       value: 'Developed by <@923249789217431583> , <@811669523593429002>',
   },
   {
       name: 'Information ๐งพ ',
       value: '`Botinfo`',
   },
   {
       name: 'Fun ๐ฑ',
       value: '`xo` | `flags` | `ูุช`',
   },
   {
       name: 'Tools โ๏ธ',
       value: '`av`| `server info` | `say` | `show` | `hide` | `dm` | `Ping`| `cal`| `crembed`| `report`| `slowmode`| `user info`| ',
   },
   {
       name: 'Mod',
       value: ' `kick`  `ban`  `unban`  `softban`  `mute`  `lockdown`  `unlock`  `addrole`  `romverole`  `warn`  `purge`  `unmute` ',
   })

   message.channel.send({embeds : [embed]})
    }
}