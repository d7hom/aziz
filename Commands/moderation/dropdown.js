const{MessageActionRow, MessageSelectMenu} = require("discord.js")

const {MessageEmbed} = require("discord.js")

module.exports = {
  name: "dropdown",
  usage: "dropdown | Make sure to select options",
  description: "Sends a dropdown menu",
  timeout: "5000",
  category: "test",
  async execute(client, message, args) {
    const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId("select")
      .setPlaceholder("Select your option")
      .addOptions([
        {
          label: "THis is selection 1",
          description: "CLick here to see option 1!",
          value: "first"
        },
        {
          label: "THis is selection 2",
          description: "CLick here to see option 2!",
          value: "second"
        },
        {
          label: "THis is selection 3",
          description: "CLick here to see option 3!",
          value: "third"
        },
      ])
    )

    let embed = new MessageEmbed()
    .setTitle("Welcome the dropdown selection")
    .setDescription("Choose the option you want to select")
    .setColor("GREEN")

    let sendmsg = await message.channel.send({ content : "ㅤ", ephemeral:true, embeds : [embed], components:[row]})


    
let embed1 = new MessageEmbed()
    .setTitle("You selected something!")
    .setDescription("You chouse option 1")
    .setColor("GREEN")

    let embed2 = new MessageEmbed()
     .setTitle("You selected something!")
    .setDescription("You chouse option 2")
    .setColor("GREEN")


    let embed3 = new MessageEmbed()
    .setTitle("You selected something!")
    .setDescription("You chouse option 3")
    .setColor("GREEN")




const collector = message.channel.createMessageComponentCollector({
  componentType: "SELECT_MENU"
})

collector.on("collect", async (collected) => {
const value = collected.values[0]

if(value === "first") {
  collected.reply({embeds:[embed1], ephemeral:true})
}

if(value === "second") {
  collected.reply({embeds:[embed2], ephemeral:true})
}

if(value === "third") {
  collected.reply({embeds:[embed3], ephemeral:true})
}


})

  }
}