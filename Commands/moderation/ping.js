
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ping',

    aliases: [],
    execute(client, message, args) {
        try{
            message.reply({embeds :[new MessageEmbed()
              .setColor("385999")
              .setFooter(`${client.user.tag}`, client.user.avatarURL({ dynamic: true }))
              .setTitle(`🏓 Pinging....`)
            ]}).then(msg=>{
              msg.edit({embeds :[new MessageEmbed()
                .setColor("385999")
                .setFooter(`${client.user.tag}`, client.user.avatarURL({ dynamic: true }))
                .setTitle(`🏓 Ping is \`${client.ws.ping}ms\``)
              ]});
            })
          } catch (e) {
              console.log(String(e.stack).bgRed)
              return message.channel.send({embeds : [new MessageEmbed()
                  .setColor("385999")
                  .setFooter(`${client.user.tag}`, client.user.avatarURL({ dynamic: true }))
                  .setTitle(`❌ ERROR | An error occurred`)
                  .setDescription(`\`\`\`${e.stack}\`\`\``)
              ]});
          }
        }
      }
