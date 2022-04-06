module.exports = {
    name: 'lock',
    aliases: ["قفل"],
    description: 'lock the channels',
    async execute(client, message) {
      let channel = message.mentions.channels.first() || message.channel;
      if(!message.member.permissions.has('MANAGE_CHANNELS')) return;
      channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: false});
      message.reply({content: `Has Been ${channel} Locked 🔒`, allowedMentions:[{ repliedUser: true }]});
    },
  };


 