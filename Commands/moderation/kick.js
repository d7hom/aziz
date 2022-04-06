const { Discord, MessageEmbed } = require("discord.js")

const { Permissions } = require("discord.js")

let red = "#F04A47"
let green = "#43B581"
let yellow = "#FFFF00"

module.exports = {
  name: "kick",
  category: "moderation",
  description: "kicks a member",
  timeout: "5000",
  usage: "kick <user>",
  execute(client, message, args) {
  try {
    
    const check = client.emojis.cache.find(x => x.name === "CheckMark")
    const cross = client.emojis.cache.find(x => x.name === "WrongMark")

    

   
    if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} **You do not have kick members permissions**`)
        .setColor(red)
    return  message.channel.send({ embeds: [embed] })
    }

    if (!message.guild.me.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} **I do not have kick members permissions**`)
        .setColor(red)
     return message.channel.send({ embeds: [embed] })
    }

    const target = message.mentions.users.first()
    if (!target) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} **You must mention the person you want kicked**`)
        .setColor(red)
     return message.channel.send({ embeds: [embed] })
    }

    if (target.id === message.member.id) {
      let embed = new MessageEmbed()
        .setDescription(`$cross} **You can not kick yourself**`)
        .setColor(red)
     return message.channel.send({ embeds: [embed] })
    }


    if (target.id === client.user.id) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} **You must kick the interaction manually**`)
        .setColor(red)
     return message.channel.send({ embeds: [embed] })
    }

    if(message.member.roles.highest.comparePositionTo(message.mentions.members.first().roles.highest) < 1) {
      let embed = new MessageEmbed()
        .setDescription(`${cross} **Your role is too too low to kick the user**`)
        .setColor(red)
     return message.channel.send({ embeds: [embed] })
    }


    let reason = args.slice(1).join(" ")
    if (!reason) reason = "No reason provided by moderator"


    let embed = new MessageEmbed()
      .setDescription(`**${check} Kicked ${target.username}**`)
      .setColor(green)
    message.channel.send({ embeds: [embed] })

    try {

    let embed = new MessageEmbed()
          .setDescription(`**${warn} You have been kicked in ${message.guild.name} for ${reason}**`)
          .setColor(yellow)
   target.send({ embeds: [embed] })


    } catch (err) {
     console.log("Can't send message")
    }

    let kick = message.guild.members.cache.get(target.id)
    kick.kick(args[1])




  } catch (err) {

    const check = client.emojis.cache.find(x => x.name === "CheckMark")
    const cross = client.emojis.cache.find(x => x.name === "WrongMark")
    
     console.log("I can't kick")
     let embed = new MessageEmbed()
      .setDescription(`**${cross} I can not kick the user**`)
      .setColor(red)
    return message.channel.send({ embeds: [embed] })
}
  }
}