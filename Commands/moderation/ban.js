const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'ban',

    execute(client, message) {

  
        if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply(`**:x: - You don't have \`ADMINISTRATOR\` permissions**`)
        
        let args = message.content.split(' ').slice(1);
        
        if (!args[0]) return message.reply({ embeds: [new MessageEmbed().setDescription(`**Command: ban**\n\nBans a member.\n\n**Usage:**\n\n\`#ban\` \`[user]\` \`(reason)\``)] })
        
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        if (member) {
        
          let reason = args.slice(1).join(' ');
        
          if (!reason) reason = 'none';
        
        
          member.ban({ reason })
          
            .then(() => message.reply(`✅** user banned from the server!** ✈️` ))
            .catch(() => message.reply('**:x: - I can\'t ban this member**'))
        
        } else {
          return message.reply('**:x: - I can\'t find this member on the server**' )
        }

    }
}