const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'server',
    description: "Server information",
    async execute(client, message, args) {

        if (message.guild.memberCount !== message.guild.members.cache.size) await message.guild.members.fetch()
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache.size;

        let Embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor({ name: `${message.guild.name}'s Information`, iconURL: message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }) })
            .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
            .addFields(
                { name: '🆔 Server ID:', value: `${message.guildId}`, inline: true },
                { name: '📆 Created On:', value: `**<t:${Math.floor(message.guild.createdTimestamp / 1000)}:R>**`, inline: true },
                { name: '👑 Owned by:', value: `<@!${message.guild.ownerId}>`, inline: true },
                { name: `👥  Members (${message.guild.memberCount}):`, value: `**${members.filter(member => member.status === 'online').size}** Online`, inline: true },
                { name: `💬 Channels (${message.guild.channels.cache.size}):`, value: `**${channels.filter(channel => channel.type === 'GUILD_TEXT').size}** Text | **${channels.filter(channel => channel.type === 'GUILD_VOICE').size}** Voice`, inline: true },
                { name: '🛡️ Emojis:', value: `${emojis}`, inline: true },
            )
            .setFooter({ text: `Requested by ${message.guild.members.cache.get(message.author.id).nickname || message.author.username} | ${moment().format("DD/M/YYYY h:mm:ss A")}`, iconURL: message.author.avatarURL({ dynamic: true, size: 1024, format: 'png' }) })
        message.reply({ embeds: [Embed] });
    }
}