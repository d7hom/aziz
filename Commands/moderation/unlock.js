module.exports = {
    name: 'unlock',
    aliases: ["الغاء القفل"],
    description: 'unlock the channels',
    async execute(client, message) {
      let channel = message.mentions.channels.first() || message.channel;
      if(!message.member.permissions.has('MANAGE_CHANNELS')) return;
      channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: true});
      message.reply({content: `Has Been ${channel} unLocked 🔒`, allowedMentions:[{ repliedUser: true }]});
    },
  };