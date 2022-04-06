const { Message, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name: 'button',
     async execute(client, message, args) {
        
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId("b1")
            .setLabel("Button 1") // text in button
            .setStyle("PRIMARY") // background color
            .setEmoji("✅") // Emoji with text in button
        )

        const m = await message.channel.send({ content: "Button", components: [row] })
        
         const ifilter = i => i.user.id === message.author.id;

        const collector = m.createMessageComponentCollector({ filter: ifilter, time: 60000 })

        collector.on("collect", async i => {
            if(i.customId === "b1") {
                await i.deferUpdate()
                i.editReply({ content: "Button command is work!", components: [] })
            }
        })
    }
}