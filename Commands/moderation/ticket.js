const simplydjs = require('simply-djs')
module.exports = {
  name: "ticket",
  aliases: [""],
  usage: "unban",
  description: "unbans member",
  execute(client, message, args) {
 // command file
    simplydjs.ticketSystem(message, message.channel, {
      embedDesc: 'hello', // default: ':ticket: Create a ticket by clicking the button :ticket:'
      embedColor: 'cccfff', // default: #075FFFF
      embedFoot: 'simply-djs', // default: message.guild.name
      emoji: ':ticket:', // default:, :ticket:
      color: 'blurple', // default: blurple
    })
  }
}