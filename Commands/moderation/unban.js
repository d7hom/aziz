
const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
    name: 'join',
    aliases: ['j'],
    execute(client, message, args) {

        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
    }
}
