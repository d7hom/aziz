const db = require("pro.db")
const { Permissions } = require('discord.js');
module.exports = {
 name: "setchat",
 category:"main",
 timeout:"10000",
 async execute(client, message, args) {
  
 if (message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) {
 let channel = message.mentions.channels.first() 
 
 if(!channel) { 
 return message.channel.send("Please Mention the channel dude")
 }
 

 
 db.set(`chatchannel_${message.guild.id}`, channel.id) 
 
 message.channel.send(`Chat Bot Channel is set as ${channel}`) 
  } else {
     message.channel.send("You need the permission `MANAGE_CHANNELS`")
  }
 }
}