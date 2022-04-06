const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js')
module.exports = {
    name: "clear1",
    async execute(client, message, args){
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('primary')
                .setLabel('!مسح')
                .setStyle('DANGER'),
        );

        const embed = new MessageEmbed()
            .setColor('RED')
            .setTitle('مسح')
            .setURL('')
            .setThumbnail("https://cdn.discordapp.com/attachments/944359904540516392/944360100523548692/FLudcQjWQAQQngH-1_1.png")
            .setDescription(':heavy_check_mark:سيتم مسح جميع الرسائل');
    
        await message.reply({ content: '\n', ephemeral: true, embeds: [embed], components: [row] }).then(msg => {
            let filter = i => {return i.user.id == message.author.id && i.isButton()}
            let collector = msg.createMessageComponentCollector({filter, max:1})
            collector.on("collect", interaction => {
                interaction.channel.clone()
                interaction.channel.delete()
            })
        })
    }
}